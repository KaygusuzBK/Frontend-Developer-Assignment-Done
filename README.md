# Frontend Developer Assignment

Bu proje, bir GraphQL API'sini sorgulayarak sonuçları bir liste halinde gösteren bir web uygulamasıdır. Proje, genel olarak şu işlevleri gerçekleştirir:

- Bir GraphQL API'sine sorgu gönderir ve sonuçları bir listede gösterir.
- Listede bulunan öğeleri seçilebilir ve seçilemez hale getirebilir.
- Seçilen öğenin arka plan rengi, diğer seçilmemiş öğelerden farklıdır.
- Belirli bir renk kümesinden seçilen öğenin arka plan rengi, önceki seçilen öğeden farklı olmalıdır.
- Listede bir metin filtresi oluşturulabilir ve bu filtre ile sonuçlar filtrelenip gruplanabilir.

## Kullanılan Teknolojiler

- HTML
- CSS
- JavaScript
- React
- Tailwind
- React Router
  
## Önemli Noktalar

- GraphQL API sorgusu için [Apollo Client](https://www.apollographql.com/docs/react/) kullanılmıştır.
- Listede bulunan öğelerin arka plan rengi, bir dizi önceden tanımlanmış renk arasından seçilir.
- Uygulama, uzun listeleri işleyebilmek için performanslı bir şekilde tasarlanmıştır.
- Filtrleme ve gruplama işlemleri dinamik olarak gerçekleştirilir ve sonuçlar anlık olarak güncellenir.
- Listede bulunan öğelerin seçimi, belirli bir kurala göre otomatik olarak yapılır. Eğer listeye 10'dan az öğe yüklenmişse, son öğe seçilir; aksi halde 10. öğe seçilir.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakabilirsiniz.
