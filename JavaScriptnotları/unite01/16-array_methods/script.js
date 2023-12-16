let ogrenciler = ["çınar","yiğit","ada"];
let liste = new Array();
sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

let adet = Number(prompt("Kaç Eleman Girilecek"));
for (let i = 0; i < adet; i++) {
    eleman = prompt(i + 1 + ". Eleman Gir")
    liste.push(eleman);
}

console.log(liste);
// eleman silme
// sonuc = ogrenciler.pop();       // son eleman silinir ve silinen eleman geri döndürülür.
// sonuc = ogrenciler.shift();     // ilk eleman silinir.

// eleman ekleme
// sonuc = ogrenciler.push("sena");    // dizinin sonuna eleman eklenir.
// sonuc = ogrenciler.unshift("sena");



let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

sonuc = markalar1.concat(markalar2, markalar3);
// console.log("concat→"+sonuc); // listeleri birleştirir
sonuc = markalar1.splice(0, 1, "bmw","audi");
sonuc = markalar1.splice(0, 1);

console.log(sonuc);
console.log(markalar1);