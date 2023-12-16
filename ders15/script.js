var baslik = document.getElementById("menu");
var baglanti = baslik.getElementsByClassName("eleman");

// i indis sayısı ve bağlantı ise list itemler sayısı kadar döngü oluştursun
for (let i = 0; i < baglanti.length; i++) {
    baglanti[i].addEventListener("click", function () {
        var aktifLink = document.getElementsByClassName("active");
        aktifLink[0].className = aktifLink[0].className.replace("active", "");
        this.className += " active";
    });
}

function goster2() {
    var kontrol = document.getElementById("password");
    var dugme = document.getElementById("goster");
    dugme.value = "+";   // düğmeye tıklandığında içeriği değişsin
    // Parola göster/gizle
    if (kontrol.type == "password") {
        kontrol.type = "text";
    } else {
        kontrol.type = "password";
    }
}

function renkDegis() {
    var zemin = document.getElementById("cont");
    var damlalik = document.getElementById("bgcolor");
    zemin.style.backgroundColor = damlalik.value;
    console.log(damlalik.value);
}

var sayi1 = document.getElementById("s1");
var sayi2 = document.getElementById("s2");
var yazdir = document.getElementById("sonuc");
sonuc = 0;

function degerKontrol() {
    if (sayi1.value == "" || sayi2.value == "") {
        alert("Değerler Boş Geçilemez");
    }
}

function cikar() {
    degerKontrol();
    sonuc = parseInt(sayi1.value) - parseInt(sayi2.value);
    console.log(sonuc);
    yazdir.innerText = sonuc;
}
function carp() {
    degerKontrol();
    sonuc = parseInt(sayi1.value) * parseInt(sayi2.value);
    console.log(sonuc);
    yazdir.innerText = sonuc;
}

function bol() {
    try {
        degerKontrol();
        sonuc = parseInt(sayi1.value) / parseInt(sayi2.value);
        if (parseInt(sayi2.value) == 0) {
            yazdir.innerText = "Sıfıra bölünemez";
        }
        else {
            console.log(sonuc);
            yazdir.innerText = sonuc;
        }
    } catch (e) {
        alert("Hata\n" + e);
    }
}

function topla() {
    degerKontrol();
    sonuc = parseInt(sayi1.value) + parseInt(sayi2.value);
    console.log(sonuc);
    yazdir.innerText = sonuc;
}

// --------------- SEPETE EKLEME / ÇIKARMA İŞLEMİ -------------------

var sepetim = document.getElementById("sepet");
sepetim.value = 0

function addToCard(){
    sepetim.value ++;
}
function removeToCard(){
    if (sepetim.value < 1){
        alert("Ürün Sayısı Negatif Olamaz");
    } else {
        sepetim.value --;
    }
}