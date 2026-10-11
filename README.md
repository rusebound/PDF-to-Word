# PDF → Word Dönüştürücü

**Windows x64 · Portable · PDF → düzenlenebilir DOCX**

PDF dosyalarını Word belgelerine dönüştürmek için hazırlanan bağımsız Windows uygulaması. Dijital belgelerde metin, paragraflar, tablolar ve görsellerin olabildiğince korunması hedeflenir.

**[PDF TO WORD.zip indir — GitHub Releases](https://github.com/rusebound/PDF-to-Word/releases)**

## Kurulum ve kullanım

1. `PDF TO WORD.zip` dosyasını indirin ve **tamamen** çıkarın.
2. `PDFdenWorde/PDFdenWorde.exe` dosyasını çalıştırın. `_internal` klasörünü yanından ayırmayın.
3. PDF ekleyin veya sürükleyip bırakın; **Word'e Dönüştür** seçeneğini kullanın.
4. DOCX çıktısı, paketin açıklamasına göre kaynak PDF'nin yanında ve mevcut dosyaların üzerine yazılmadan oluşturulur.
5. Sonucu Word veya LibreOffice ile açarak sayfa sayısı, görseller, tablolar ve metni kontrol edin.

## Teknik altyapı

ZIP içindeki Windows paketinde PyMuPDF, pdf2docx, OCR/Tesseract ve Python çalışma zamanı bileşenleri bulunmaktadır. **Bu depo şu anda portable dağıtım ve tanıtım deposudur; uygulamanın geliştirme kaynak kodunun tamamını içerdiği iddia edilmez.**

## Gerçekçi doğruluk sınırı

PDF dosyaları Word'ün özgün belge akışını tutmaz. Karmaşık tablo, çok sütun, yazı tipi, formül, dipnot, çizim ve taranmış sayfalarda **kaynakla birebir görünüm ve kusursuz düzenlenebilirlik garanti değildir**. Kaynak PDF'yi yedekleyin; düzenlemeye başlamadan önce çıktı kalitesini kontrol edin. Üçüncü taraf lisans uyumluluğu ayrıca gözden geçirilmelidir.

## Dosya bütünlüğü

`PDF TO WORD.zip` SHA-256:

`DFF9E209348E7B4F626C88F1984346FBFA1F89DE908C4F5E90E831AC0BF1C64F`

Windows: `Get-FileHash '.\PDF TO WORD.zip' -Algorithm SHA256`

## Yayın durumu

**Önizleme (pre-release).** Arşiv yapısı denetlendi; bu GitHub yayımı kapsamında bağımsız Windows fonksiyon testi, dijital imza veya farklı belgelerde kabul testi yapılmadı.

**English:** Portable Windows PDF-to-Word converter. Download the complete ZIP from Releases. Complex layouts and scanned PDFs may produce imperfect editable DOCX output.

Destek: [Issues](https://github.com/rusebound/PDF-to-Word/issues).
