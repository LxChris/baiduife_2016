
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

function init(){
    //为确认键添加按下事件
    document.getElementById("submitBtn").onclick = sub_onclick;
    //为取消键添加按下事件
    document.getElementById("cancelBtn").onclick = cal_onclick;
    //为弹出窗口文字添加按下事件
    document.getElementById("showMessage").onclick = showMessage_onclick;
}

init();