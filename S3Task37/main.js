
    //拖曳对象
    var dragging = false;
    var mouseY;
    var mouseX;
    var messageBox;
    
    window.onload = function () {
        messageBox = document.getElementById("messageBox");
        messageBox.onmousedown = down;
        messageBox.onmousemove = move;
        messageBox.onmouseup = up;
        messageBox.style.top = "0px";
        messageBox.style.left = "0px";
    }

    function down(event){
        event = event || window.event;
        dragging = true;
        mouseX = parseInt(event.clientX);
        mouseY = parseInt(event.clientY);
        objY = parseInt(messageBox.style.top);
        objX = parseInt(messageBox.style.left);
    }

    function move(event){
        event = event || window.event;
        if(dragging == true){
            var x,y;
            x = event.clientX - mouseX + objX;
            y = event.clientY - mouseY + objY;
            messageBox.style.top = y + "px";
            messageBox.style.left = x + "px";
        }
    }
    
    function up() {
        dragging = false;
    }

function sub_onclick(){
    //确认键被按下时的事件
    alert("确认键被按下");
}

function cal_onclick(){
    //取消键被按下时的事件
    // alert("取消键被按下");
    document.getElementById("blackMaster").style.display = "none";
    document.getElementById("messageBox").style.display = "none";
}

function showMessage_onclick(){
    document.getElementById("blackMaster").style.display = "block";
    document.getElementById("messageBox").style.display = "block";
}

function init() {
    //为确认键添加按下事件
    document.getElementById("submitBtn").onclick = sub_onclick;
    //为取消键添加按下事件
    document.getElementById("cancelBtn").onclick = cal_onclick;
    //为弹出窗口文字添加按下事件
    document.getElementById("showMessage").onclick = showMessage_onclick;
    //
    document.getElementById("blackMaster").onclick = cal_onclick;
}

/*//阻止冒泡事件
    function doSomething (obj,evt) {
    alert(obj.id);
    var e=(evt)?evt:window.event; //判断浏览器的类型，在基于ie内核的浏览器中的使用cancelBubble
    if (window.event) {
        e.cancelBubble=true;
    } else {
    //e.preventDefault(); //在基于firefox内核的浏览器中支持做法stopPropagation
        e.stopPropagation();
    }
}*/

init();