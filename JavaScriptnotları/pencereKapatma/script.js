function startTimer(sure, display) {
    var timer = sure, dakika, saniye;
    setInterval(function() {
      dakika = parseInt(timer / 60, 10)
      saniye = parseInt(timer % 60, 10);
  
      dakika = dakika < 10 ? "0" + dakika : dakika;
      saniye = saniye < 10 ? "0" + saniye : saniye;
  
      display.textContent = dakika + ":" + saniye;
  
      if (--timer < 0) {
        
        if(confirm("Çıkmak İster misin?")) {
            window.close();
        } else {
            timer = sure;  // süreyi başa sar
        }
      }
    }, 1000);
  }
  
  window.onload = function() {
    var besdakika = 30 * 1,
      display = document.querySelector('#time');
    startTimer(besdakika, display);
  };