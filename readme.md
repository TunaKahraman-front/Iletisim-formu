
## İçindekiler
  - [Genel Bakış](#genel-bakış)
  - [Ekran Görüntüsü](#ekran-görüntüsü)
  - [Bağlantılar](#bağlantılar)
  - [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
  - [Neler Öğrendim](#neler-öğrendim)

## Genel Bakış

- Formu doldurup gönderince başarı mesajı görmeli.
- Şu durumlarda hata mesajları almalı:
  - Zorunlu alanlar boşsa.
  - E-posta adresi geçersizse.
- Formu sadece klavye ile kullanabilmeli.
- Girdiler, hatalar ve başarı mesajı ekran okuyucularla uyumlu olmalı.
- Cihazın ekran boyutuna göre uygun tasarım görmeli.
- Etkileşimli öğelerin hover ve focus durumlarını görmeli.

### Ekran Görüntüsü

![Ekran Görüntüsü](./screenshot.jpg)

### Bağlantılar

- Canlı Site URL: [Canlı Site URL'si](https://your-live-site-url.com)

### Kullanılan Teknolojiler

- HTML5
- CSS3
- JavaScript
- Flexbox
- Mobil öncelikli tasarım

### Neler Öğrendim

Bu projede form doğrulama ve kullanıcı deneyimi üzerine çalıştım. Öne çıkanlar:

- JavaScript ile anlık form doğrulama:
```javascript
if (!mail.value.trim()) {
    mailErr.textContent = 'Bu alan zorunludur';
    mailErr.style.display = 'block';
    mail.classList.add('error');
    hasError = true;
}
```
- CSS ile toast mesajı animasyonu:
```css
.toast {
    position: fixed;
    top: 20px;
    left: 37%;
    background-color: #0A775F;
    color: white;
    padding: 15px;
    border-radius: 10px;
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}
.toast.show {
    opacity: 1;
    display: flex;
}
```
