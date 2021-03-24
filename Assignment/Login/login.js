window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myform");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password = document.forms["myform"]["password"].value;
    var repassword = document.forms["myform"]["repassword"].value;
    if(password == repassword){        
        return true;        
    }
    else{
        var wrongpassword = document.getElementById("errormsg");
        wrongpassword.innerHTML = "Your password are not the same.";
        return false;
    }
}