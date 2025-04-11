
## İçindekiler
  - [Ekran Görüntüsü](#ekran-görüntüsü)
  - [Bağlantılar](#bağlantılar)
  - [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
  - [Neler Öğrendim](#neler-öğrendim)

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

CSS ile toast mesajı animasyonu:

.toast {
    transition: opacity 0.5s ease-in-out;
}
.toast.show {
    opacity: 1;
}

