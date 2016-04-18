/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
*    "北京": 90,
*    "上海": 40
* };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var cityName = document.getElementById("aqi-city-input").value.trim();
    var airQuality = document.getElementById("aqi-value-input").value.trim();
    if(!cityName.match(/^[a-z|A-Z|\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文");
        return;
    }
    if(!airQuality.match(/^\d+$/)){
        alert("城市空气质量必须为大于0的整数");
        return;
    }
    aqiData[cityName] = airQuality;
    //清空输入框内容
    document.getElementById("aqi-city-input").value = "";
    document.getElementById("aqi-value-input").value = "";
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList(){
    var table_Value = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var cityName in aqiData){
        table_Value += "<tr><td>"+cityName+"</td><td>"+aqiData[cityName]+"</td><td><button class='del-button'>删除</button></td></tr>";
    }
    if( cityName == ""){
        return;
    }else{
        //渲染表格
        document.getElementById("aqi-table").innerHTML = table_Value;
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
    // do sth.
    var element = target.parentElement.parentElement;   //获取父元素的父元素
    var cityName = element.children[0].innerHTML;       //获取表单第一项城市名称
    delete aqiData[cityName];                           //删除此项
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").onclick = addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var table = document.getElementById("aqi-table");
    table.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName === "BUTTON") {
            delBtnHandle(e.target);
        }
    });


}

init();