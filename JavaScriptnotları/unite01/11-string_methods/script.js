let kursAdi = "Front End Developer Eğitimi - Javascript Ünitesi";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[1];
sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi","Kursu");
sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Developer");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[0];
sonuc = kursAdi.split(" ")[3];


console.log(sonuc);