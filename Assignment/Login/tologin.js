window.onload = loginLoad;
function loginLoad(){
	var login = document.getElementById("myLogin")
    login.onsubmit = checkLogin;
}

function checkLogin(){
    //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var queryUsername = urlParams.get("username");
    let queryPassword = urlParams.get("password")

    let username = document.forms["myLogin"]["username"].value;
    let password = document.forms["myLogin"]["password"].value;
    if(queryUsername == username && queryPassword == password){                
        alert("Login Finish");
    }
    else{
        alert("Your Username or password is wrong.");
        return false;
    }

}