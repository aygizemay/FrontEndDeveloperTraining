var targetDate = new Date('2024-01-01T00:00:00');

// Geri sayım fonksiyonu
function countdown() {
  var now = new Date();
  var timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    document.getElementById('countdown').innerHTML = 'Süre doldu!';
  } else {
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + ' gün ' + hours + ' saat ' + minutes + ' dakika ' + seconds + ' saniye';
  }
}

// İlk çağrı
countdown();

// Her saniyede bir güncelle
setInterval(countdown, 1000);