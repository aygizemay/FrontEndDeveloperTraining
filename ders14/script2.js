var paragraf = document.createElement("h2");
paragraf.innerHTML = "<i>Paragraf Etiketi</i>";
document.body.appendChild(paragraf);

// değişkenleri global olarak tanımladık.
var koyuZemin = document.body.style;
var acikZemin = document.body.style;

function koyu(){
    koyuZemin.backgroundColor = prompt("İngilizce zemin rengi yazın:"); // #222
    koyuZemin.color = prompt("Yazı rengi yazın: ");  // #eee 
}

function acik() {
    // koyuZemin.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    var zemin = Math.floor(Math.random()*999);
    var yazi = Math.floor(Math.random()*999);
    acikZemin.backgroundColor = "#"+zemin;
    acikZemin.color = "#"+yazi;
}

// tikla() fonksiyonu oluşturuldu 
function tikla() {
    let txt_yazi = document.getElementById("yazi");
    let label_yazi = document.getElementById("labelyazi");
    label_yazi.innerText = txt_yazi.value;    
}

function operatorler() {
    console.log(5 > 6);    // false → 5 , 6dan küçük
    console.log(10 != 20); // true
    /*
        =   Değişken atama
        ==  Mutlak eşitlik sağlar
        === Değişkenlerin tiplerine göre eşitlik
    */
   console.log(0.1 === 0);
   console.log(0.0 == 0.0);
   console.log(typeof(0.0), typeof(2.5));

    if (0 > 3){
        // şartınızın sonuçları
        alert("6 Sayısı 3den büyüktür");
    }else {
        alert("Şart Yanlış");
    }

    // ---------------------------------------------------------- //

    // textboxın içi doluysa
    if (document.getElementById("yazi").value != ""){
        alert(document.getElementById("yazi").value);
    }else {
        alert("textbox boş geçilemez.");
    }

}

// Global olarak htmlden gelen değeri kendi değerime atadım.
var username = document.getElementById("username");
var password = document.getElementById("password");
// Sabit Değişkenleri tanımladım.
const kullanici = "sercan"; 
const parola = "123";

function uyeGiris() {   
    if (username.value == "" || password.value == ""){
        alert("Bilgiler Boş Geçilemez");
        username.style.backgroundColor = "magenta";
        password.style.backgroundColor = "magenta";
    }else {
        if (username.value == kullanici && password.value == parola ){
            alert("Giriş Başarılı");
            document.write(`${kullanici} Oturum Açtı`); 
            // metinsel formatlama  `${degiskenadi}`
        } else {
            alert("Erişim Reddedildi");
            username.value = "";
            password.value = "";
        }
    }
}