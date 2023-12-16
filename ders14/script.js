const mesaj = prompt("Mesajınız:"); // dışarıdan veri girişi yapar.
// const değişkeni yalnızca bir defa değer atanabilir.
alert("Bu bu bir uyarı mesajıdır"); // uyarı mesajı
console.log("Terminale yazı yazıldı"); // terminal ekranına yazı yaz

let sayi1, sayi2;
var toplam = 0;
// prompt ile alınan değerler metinsel olarak görünür.
sayi1 = Number(prompt("1. sayı gir: "));  // Metinselden tamsayı dönüşümü yaptık
sayi2 = Number(prompt("2. sayı gir: "));

toplam = sayi1 + sayi2;

alert("Toplam Değişkeninin Tipi: " + typeof(toplam).toString());  // değişkenlerin tiplerini öğrendik

alert("Sayılar Toplamı: " + toplam);  // mesaj olarak yazdır
console.log("Sayılar Toplamı: " + toplam);  // terminale yazdır
console.log(mesaj);

document.write(mesaj); // sayfada bulunan konumda etiket yoksa en başa yazar
document.body.style.backgroundImage = "linear-gradient(90deg, blue, green)";

