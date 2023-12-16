// dict, json
let kullaniciA = {
    "ad": "Ayşe",
    "soyad": "Kartal",
    "yas": 30,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "izmit"
    },
    "hobiler": ["sinema","spor"]
}
let kullaniciB = {
    "ad": "Çınar",
    "soyad": "Kartal",
    "yas": 55,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "izmit"
    },
    "hobiler": ["sinema","spor"]
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciA.hobiler[1];

let kullanicilar = [
    kullaniciA,
    kullaniciB
];
sonuc = kullanicilar[1].ad;

let urun = prompt("veri gir");
let urunler = [
    {
        "urun_adi": urun,
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    }
]

sonuc = urunler[0].urun_adi;



console.log(sonuc);