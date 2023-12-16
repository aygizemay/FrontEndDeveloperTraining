var liste = []
function veriEkle() {
    var adet = document.getElementById("sayi").value;
    for (let i=0; i<adet; i++) {
        eleman = prompt(i + ". Eleman Girin..: ");
        liste.push(eleman);
    }  
    console.log(liste);
}

function listele() {
    var eleman = document.querySelectorAll("ul li");
    for (let e of liste) {
        eleman = liste.values[e];
    }
        
        console.log(eleman);
}