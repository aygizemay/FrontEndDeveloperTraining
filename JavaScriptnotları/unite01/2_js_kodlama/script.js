console.log("merhaba");

var ad = "";
ad = prompt("Adınızı Giriniz..: ");
document.write(ad);
console.log(ad);
document.writeln(ad + "<br> <b>" + ad + "<b>");
let hello = document.getElementById("labelYazi");
console.log(hello);

function mesaj(){
    let msg = document.getElementById("labelYazi").outerText;
    msg = hello;
    console.log(msg);
}

function yaziDegis() {
    let metin = document.getElementById("yazi");
    // document.write(metin);
    let label = document.getElementById("labelYazi");
    label.innerHTML = metin.value;
    console.log(metin, label);
}