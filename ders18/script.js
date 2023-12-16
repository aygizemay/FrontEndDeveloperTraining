const link = document.querySelector("link[rel='icon']"); 
let i=1;  // sayaç olarak i değişkeni tanımladık
setInterval( ()=> link.href = `./assets/wh_true (${++i % 6}).jpg`,500);