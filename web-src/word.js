import {Document,Packer,Paragraph,TextRun,ImageRun,PageBreak} from "docx";
import {mount,element,setMessage,setProgress,openPdf,downloadFile,safeStem,rowsFromText} from "./common.js";
const app=mount({tool:"PDF-to-Word",title:"PDF → Word",subtitle:"PDF belgesinden tarayıcı içinde DOCX dosyası üretin.",description:"İki yöntemden birini seçin: düzenlenebilir dijital metin veya kaynak sayfayı görüntü olarak taşıyan görsel yöntem. Yerel Windows motoruyla birebir aynı değildir.",accept:".pdf",action:"Word belgesini oluştur",features:["PDF'yi seçin; dosya tarayıcı belleğinde işlenir.","Düzenlenebilir yöntem: dijital metin Word paragraflarına aktarılır.","Görsel yöntem: sayfaların görüntüsü korunur fakat yazılar düzenlenemez.","Çıktı cihazınıza DOCX olarak kaydedilir.","Taranmış PDF'den düzenlenebilir metin için ayrıca OCR gerekir."]});
element("extra").innerHTML='<div class="option"><label for="mode">Dönüştürme yöntemi</label><select id="mode"><option value="editable">Düzenlenebilir metin (görsel eşleşme garanti değil)</option><option value="visual">Görsel düzen (sayfalar resim, metin düzenlenemez)</option></select></div><p class="note">Bir DOCX dosyasında hem tüm öğelerin kusursuz konumu hem de %100 düzenlenebilirliği garanti edilemez. Dijital metin modu karmaşık grafik/tabloları korumayabilir.</p>';
app.run=async file=>{
 const pdf=await openPdf(file);
 try{
  if(pdf.numPages>80)throw new Error("Web sürümü en fazla 80 sayfalık PDF destekler.");
  const mode=element("mode").value;
  const content=[];
  let chars=0;
  for(let n=1;n<=pdf.numPages;n++){
   const p=await pdf.getPage(n);
   if(n>1)content.push(new Paragraph({children:[new PageBreak()]}));
   if(mode==="editable"){
    const rows=rowsFromText(await p.getTextContent());
    for(const row of rows){
     const str=row.map(cell=>cell.str).join(row.length>1?"  ":"").trim();
     if(!str)continue;chars+=str.length;
     content.push(new Paragraph({children:[new TextRun({text:str})],spacing:{after:80}}));
    }
    if(rows.length===0)content.push(new Paragraph({text:"[Bu sayfada dijital metin bulunamadı.]"}));
   }else{
    const view0=p.getViewport({scale:1});
    const scale=Math.min(1.6,Math.min(1450/view0.width,1450/view0.height));
    const view=p.getViewport({scale});
    const canvas=document.createElement("canvas");canvas.width=Math.ceil(view.width);canvas.height=Math.ceil(view.height);
    await p.render({viewport:view,canvasContext:canvas.getContext("2d")}).promise;
    const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error("Görüntü üretilemedi.")),"image/png"));
    const width=Math.min(540,Math.round(540*view.width/Math.max(1,view.height/1.40)));
    const height=Math.min(740,Math.round(width*view.height/view.width));
    content.push(new Paragraph({children:[new ImageRun({type:"png",data:new Uint8Array(await blob.arrayBuffer()),transformation:{width,height}})]}));
   }
   p.cleanup();setProgress(Math.round(n/pdf.numPages*84));
  }
  if(mode==="editable"&&chars===0)throw new Error("PDF içinde seçilebilir dijital metin yok. Bu web sürümü otomatik OCR ile düzenlenebilir DOCX üretmiyor.");
  setMessage("DOCX yerel olarak oluşturuluyor...");
  const doc=new Document({sections:[{properties:{page:{margin:{top:780,bottom:780,left:760,right:760}}},children:content.length?content:[new Paragraph("Boş sayfa")]}]});
  const blob=await Packer.toBlob(doc);
  downloadFile(blob,safeStem(file.name)+(mode==="visual"?"-gorsel":"-metin")+".docx");
  setProgress(100);setMessage("DOCX hazır. Düzeni ve metni Word ile kontrol edin.","ok");
 }finally{await pdf.destroy().catch(()=>{});}
};
