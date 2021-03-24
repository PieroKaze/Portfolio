window.onload = pageLoad;
var topic = document.getElementById("topic1")
var comment1 = document.getElementById("comment1")
var comment2 = document.getElementById("comment2")

topic = false;
comment1 = false;
comment2 = false; 

function postFunction(){ 
    var text = document.getElementById("text1").value;       
     
    if(topic == false){
        alert("You can send only 3 massages.")
        document.getElementById("topic1").innerHTML = text;        
        topic = true;
        document.getElementById("text1").value = "";
    }
    else if(comment1 == false){
        alert("You can send only 2 massages.")
        document.getElementById("comment1").innerHTML = text;
        comment1 = true;
        document.getElementById("text1").value = "";
    }
    else if(comment2 == false){
        alert("You can send the last one massage.")
        document.getElementById("comment2").innerHTML = text;
        comment2 = true;
        document.getElementById("text1").value = "";
    }
    else{
        alert("You can't send massage.")
    }                
}

function clearFunction(){    
    alert("All messages were deleted.")
    document.getElementById("text1").value = "";
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    topic = false;
    comment1 = false;
    comment2 = false;   
}