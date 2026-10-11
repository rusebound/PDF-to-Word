# PDF → Word Dönüştürücü

**Yayıncı: DEMİRHAN ÖZDEMİR** · **Ana dil: Türkçe** · **Platform: Windows x64** · **Dağıtım: Portable**

![Türkçe](https://img.shields.io/badge/Dil-Türkçe-blue) ![Portable](https://img.shields.io/badge/Windows-Portable-informational) ![Önizleme](https://img.shields.io/badge/Yayın-Önizleme-orange)

PDF belgelerini düzenlenebilir **Microsoft Word (DOCX)** formatına dönüştürmeyi amaçlayan bağımsız masaüstü uygulaması. PDF'nin metin, tablo ve görsel düzenini uygun olduğu ölçüde aktarır.

**[⬇ PDF → Word — Portable Sürümü İndir](https://github.com/rusebound/PDF-to-Word/releases/tag/initial-binary)**

## Kullanıcıya sağladığı faydalar

| İhtiyaç | Fayda |
|---|---|
| PDF'deki bir yazıyı düzenlemek | İçeriği Word içinde düzenleme olanağı |
| PDF'den metin almak | Uygun dijital belgelerde metni yeniden yazmadan aktarmak |
| Görselleri ve tabloları birlikte taşımak | Word çıktısında belge yapısını mümkün olduğunca korumaya çalışmak |
| Birden çok belgeyle çalışmak | Dosyaları uygulamaya ekleyip dönüştürmek |
| Kaynak dosyayı saklamak | PDF'yi değiştirmeden yeni DOCX çıktı oluşturmak |

## Temel özellikler

- **Basit işlem sırası:** PDF ekle → Word'e dönüştür → çıktı dosyasını aç.
- **Düzenlenebilir metin:** Dijital metin içeren PDF'leri Word belgesine aktarma hedefi.
- **Tablo ve görseller:** Kaynak geometrisine göre olabildiğince korunmaya çalışılır.
- **Portable Windows paketi:** ZIP çıkarıldıktan sonra `.exe` başlatılır; Office yüklü olması zorunlu değildir.
- **Kaynak dosyayı koruma:** PDF değiştirilmez.
- **Çıktı konumu:** Paket kılavuzuna göre DOCX, kaynak PDF'nin bulunduğu klasöre, mevcut dosyanın üzerine yazılmadan kaydedilir.
- **OCR olasılığı:** Taranmış belgelerde sonuç kalitesi ve düzen koruma, OCR işleminin başarısına bağlıdır.

## Kurulum

1. [Sürüm indirme sayfasını](https://github.com/rusebound/PDF-to-Word/releases/tag/initial-binary) açın ve `PDF.TO.WORD.zip` dosyasını indirin.
2. ZIP dosyasını tamamen çıkarın.
3. `PDFdenWorde/PDFdenWorde.exe` dosyasını çalıştırın; `_internal` ve diğer paket dosyaları aynı klasör yapısında kalsın.
4. Uygulamada **PDF Ekle** seçeneğini kullanın veya PDF'yi pencereye sürükleyin.
5. **Word'e Dönüştür** düğmesine basın.
6. Çıktı `.docx` dosyasını kaynak PDF klasöründe bulun, Word veya LibreOffice ile açıp kontrol edin.

> **Önemli:** Bu paket bir Windows programıdır. Yalnızca tarayıcı eklentisi kurabilen ve `.exe` çalıştırılması yasaklanmış bilgisayarlarda kullanılamaz.

## Dönüşümün doğruluğu hakkında

**“PDF'nin birebir aynısı ama Word'de tamamen düzenlenebilir” her belge için teknik olarak garanti edilemez.** PDF, Word belgesindeki paragraf mantığını ve asıl düzenleme yapısını çoğu zaman taşımaz. Çok sütunlu sayfalar, tablo hücreleri, dipnotlar, yazı tipleri, formüller, döndürülmüş metin ve taranmış görseller farklı sonuçlar üretebilir.

En iyi sonuç genellikle metin katmanı olan, temiz ve düzenli PDF belgelerinde beklenir. **Kritik dosyalarda yazı, tarih, sayı, görsel ve tablo düzenini gözle doğrulayın.** Taranmış belgelerde OCR hataları olabilir.

## Sık sorulan sorular

**Microsoft Word gerekli mi?** Dönüştürme motorunu çalıştırmak için zorunlu değil; çıktı DOCX dosyasını görüntülemek/düzenlemek için Word veya uyumlu yazılım gerekir.

**PDF bozulur mu?** Uygulama tasarımına göre kaynak PDF korunur. Yine de önemli belgeleri yedekleyin.

**Dosyalar nereye kaydedilir?** Paket içindeki kılavuza göre kaynak PDF ile aynı klasöre.

**Sınırsız ve %100 hatasız mı?** Hayır. Belgeye göre doğruluk değişir.

## Teknik altyapı

Portable paket PyMuPDF, pdf2docx, Python ve OCR/Tesseract bileşenlerini içerir. **Bu GitHub deposunda dağıtım ve dokümantasyon bulunmaktadır; uygulamanın özgün kaynak kodunun eksiksiz yayımlandığı iddia edilmez.** Üçüncü taraf lisanslarının uyumluluğu ayrıca incelenmelidir.

## İndirme bütünlüğü

`PDF.TO.WORD.zip` · SHA-256:

`DFF9E209348E7B4F626C88F1984346FBFA1F89DE908C4F5E90E831AC0BF1C64F`

PowerShell: `Get-FileHash '.\PDF.TO.WORD.zip' -Algorithm SHA256`

**Yayın durumu:** Önizleme. Arşivin GitHub'a yüklenmesi ve SHA-256 kontrolü başarılı; bağımsız Windows fonksiyon testi, dijital imza ve geniş belge portföyü kalite testi henüz doğrulanmadı.

**Destek:** [GitHub Issues](https://github.com/rusebound/PDF-to-Word/issues). Kişisel belge ve hassas bilgileri eklemeyin.

---

**Yayıncı: DEMİRHAN ÖZDEMİR** · [GitHub profili](https://github.com/rusebound)

**English (short summary):** Portable Windows PDF to editable Word conversion utility. Preserves layout where feasible; perfect visual fidelity and editability cannot be guaranteed.
