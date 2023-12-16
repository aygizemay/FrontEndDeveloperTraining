
function parolaGoster() {
    var ctrl = document.getElementById("password");
    if (ctrl.type == "password"){
        ctrl.type = "text";
    }else {
        ctrl.type = "password";
    }
}

const kullaniciAdi = "ismek";
const parola = "12345";
function kullaniciKontrol(){ 
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    if (username == "" || password == ""){
        alert("Kullanıcı adı veya parola boş geçilemez");
    }else {
        console.log(username, password);
        if (username == kullaniciAdi && password == parola){
            // yeni sayfaya yönlendirme yapar.
            window.location.href = "index.html"; 
            
        }
    }
}
