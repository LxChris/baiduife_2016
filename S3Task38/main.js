

var stuGrades = [
    ["小明",80,90,70,240],
    ["小红",90,60,90,240],
    ["小亮",60,100,80,230]
]

function show_Data(){
    var showValue = "<tr><th>姓名</th><th>语文<p class='up' id='upChinese'>▲</p><p class='down' id='downChinese'>▲</p></th><th>数学<p class='up' id='upMath'>▲</p><p class='down' id='downMath'>▲</p></th><th>英语<p class='up' id='upEnglish'>▲</p><p class='down' id='downEnglish'>▲</p></th><th>总分<p class='up' id='upTotal'>▲</p><p class='down' id='downTotal'>▲</p></th></tr>";
    var showTable = document.getElementById("showTable");
    for(var i=0;i<stuGrades.length;i++){
        showValue += "<tr><td>"+stuGrades[i][0]+"</td><td>"+stuGrades[i][1]+"</td><td>"+stuGrades[i][2]+"</td><td>"+stuGrades[i][3]+"</td><td>"+stuGrades[i][4]+"</td></tr>";
    }
    showTable.innerHTML = showValue;
    document.getElementById("upChinese").onclick = sort_upChinese;
    document.getElementById("downChinese").onclick = sort_downChinese;
    document.getElementById("upMath").onclick = sort_upMath;
    document.getElementById("downMath").onclick = sort_downMath;
    document.getElementById("upEnglish").onclick = sort_upEnglish;
    document.getElementById("downEnglish").onclick = sort_downEnglish;
    document.getElementById("upTotal").onclick = sort_upTotal;
    document.getElementById("downTotal").onclick = sort_downTotal;
}


function sort_upChinese(){
    stuGrades.sort(function(a,b){
        return b[1] > a[1];
    });
    show_Data();
}

function sort_downChinese(){
    stuGrades.sort(function(a,b){
        return b[1] < a[1];
    });
    show_Data();
}

function sort_upMath(){
    stuGrades.sort(function(a,b){
        return b[2] > a[2];
    });
    show_Data();
}

function sort_downMath(){
    stuGrades.sort(function(a,b){
        return b[2] < a[2];
    });
    show_Data();
}

function sort_upEnglish(){
    stuGrades.sort(function(a,b){
        return b[3] > a[3];
    });
    show_Data();
}

function sort_downEnglish(){
    stuGrades.sort(function(a,b){
        return b[3] < a[3];
    });
    show_Data();
}

function sort_upTotal(){
    stuGrades.sort(function(a,b){
        return b[4] > a[4];
    });
    show_Data();
}

function sort_downTotal(){
    stuGrades.sort(function(a,b){
        return b[4] < a[4];
    });
    show_Data();
}

function init(){

    show_Data();

    document.getElementById("upChinese").onclick = sort_upChinese;
    document.getElementById("downChinese").onclick = sort_downChinese;
    document.getElementById("upMath").onclick = sort_upMath;
    document.getElementById("downMath").onclick = sort_downMath;
    document.getElementById("upEnglish").onclick = sort_upEnglish;
    document.getElementById("downEnglish").onclick = sort_downEnglish;
    document.getElementById("upTotal").onclick = sort_upTotal;
    document.getElementById("downTotal").onclick = sort_downTotal;



}

init();