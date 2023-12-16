// Girilen sayıya kadar toplamını alan js programı
var sayi = 0;
var sayac = 0, toplam = 0;
sayi = Number(prompt("Bir Sayı Girin:"));

while (sayac < sayi) {
    sayac ++;
    toplam = sayac + toplam;
    console.log(sayac);
    // console.log(toplam);
}
console.log("Döngü Bitmiştir. " + (toplam).toString());

// ------------- FOR DONGUSU KULLANIMI -----------------
toplam = 0;
for (let sayac = 1; sayac <= sayi; sayac++) {
    toplam = sayac + toplam;
    console.log(sayac);
}
document.write(toplam)

// ----------- Dil Ekleme Fonksiyonu --------------
function dilEkle(){
    var adet = document.querySelector("#diller");
    var hata = document.querySelector("#dogrulama");
    
    if (adet.value < 1){
        hata.style.display = "block";
        hata.style.backgroundColor = "red";
        hata.innerText = "HATA";
    }
    else {
        hata.style.display = "none";
        const liste = document.createElement("ul");
        document.body.appendChild(liste);
        liste.innerHTML = "<h2>Programlama Dilleri</h2>";
        for (let index = 0; index < adet.value; index++) {
            const diller = document.createElement("li");
            var checkbox = document.createElement("input"); 
            // const olarak tanımlarsanız bir kez eleman eklersiniz.
            // var - let olarak tanımlarsanız istediğiniz kadar eleman ekleyebilirsiniz.
            checkbox.type = "checkbox";
            diller.innerText = prompt("Dil Girin:");
            liste.appendChild(diller);
            diller.appendChild(checkbox);          
        } 
    }
}

function sureHesapla(zaman, goster) {
    var timer = zaman, dakika, saniye;
    setInterval(() => {
        dakika = parseInt(timer / 60, 10)
        saniye = parseInt(timer % 60, 10);

        // javascript ternary if kullanımı
        dakika = dakika < 10 ? "0" + dakika : dakika;
        saniye = saniye < 10 ? "0" + saniye : saniye;
  
        goster.textContent = dakika + ":" + saniye;

        // Süre dolduğunda çıkmak ister misin popup çalışsın
        if (--timer < 0)     // süre sıfırlandığında
        {   
            // confirm()  → Yes - No gibi seçim popup özelliği çıkartır.
            if (confirm("Web Sayfası Kapatılıyor Çıkmak İster misin?")){
                window.close()  // pencereyi kapat
            }else {
                timer = zaman;  // süreyi başa sar
            }
        }
    }, 500);
}

window.onload = function(){
    var zamanlayici = 30 * 1;
    var gosterge = document.querySelector("#time");
    sureHesapla(zamanlayici, gosterge);
};



