window.onload = pageLoad;

function pageLoad(){
	var btnStart = document.getElementById("start");
    btnStart.onclick = startGame;

}

function startGame(){
	alert("Ready!?");
    addBox();
    timeStart();
}

function timeStart(){
	//นับตัวเลขถอยหลังทุกๆ 1 วินาที
    var Timer_Tick = 1000; //1000 millisecond = 1 second
    var timer = null;
    //เวลาทั้งหมดในการเล่นเกม
    var min = 0.5;
    //แปลง 0.5 ไปเป็น 30 วินาที
    var second = min*60;

    var x = document.getElementById("clock");

    timer = setInterval(timeCount, Timer_Tick);

    function timeCount(){
        second = second - 1;
        x.innerHTML = second;
        //check จำนวนกล่องใน layer ว่าเหลือเท่าไหร่
        var allbox = document.querySelectorAll("#game-layer div")
        if(allbox.length <= 0 && second > 0){
            alert("เหลือเวลาอยู่ " + second + " วินาที" + " You Win!");
            clearScreen();
            clearInterval(timer);
            timer = null;
        }

        else if(second == 0){
            alert("You lose")
            clearInterval(timer);
            timer = null; //ถ้าไม่กำหนด เวลาจะนับต่อไปเรื่อยๆ
            clearScreen()
        }
    }
}

function addBox(){
    //รับค่าจำนวนกล่องที่กรอกเข้ามาจาก id numbox
	var numbox = document.getElementById("numbox").value;
    var parseIntNumber = parseInt(numbox);
    //เลือกพื้นที่ spawn box
    var gameLayer = document.getElementById("game-layer");

    var colorDrop = document.getElementById("color").value;

    for(var i = 0; i < parseIntNumber; i++){
        var tempbox = document.createElement("div"); //create div
        tempbox.className = "square"; // add class in div ที่พึ่งสร้างมา
        tempbox.id = "Box" + i; //add id in div ที่พึ่งสร้างมา >> id จะเป็น box1, box2,...
        tempbox.style.background = colorDrop; //กำหนดสีให้กับ div ที่พึ่งสร้างมาเมื่อกี้
        tempbox.style.left = Math.random()*(500-25)+"px"; //สุ่มตำแหน่งด้านซ้ายขวา
        tempbox.style.top = Math.random()*(500)+"px"; //สุ่มตำแหน่งด้านบนล่าง
        gameLayer.appendChild(tempbox); //เอา div ที่พึ่งสร้างมาใส่ในกล่อง
        bindBox(tempbox);

    }
}

function bindBox(box){    
    //พื้นที่ที่ต้องการลบกล่องออก
	let currentBoxInContainer = document.getElementById("game-layer");
    //เมื่อกดแล้วจะทำลายกล่อง
    box.onclick = function(){
        currentBoxInContainer.removeChild(box);
    }
}

function clearScreen(){
    //เวลาหมด ทำลายทุกกล่อง
	var allbox = document.querySelectorAll("#game-layer div");
    var containerBox = document.getElementById("game-layer");

    //delete all div
    for(var i = 0; i < allbox.length; i++){
        containerBox.removeChild(allbox[i]);
    }
}