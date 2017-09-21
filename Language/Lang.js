var lang = [];//加载语言

var lang_version = [];//语言版本号
var url_lang = null;//检测当前版本




//==========配置文件区==============
lang_version["cn"] = "简体";
lang_version["en"] = "英语";
var default_version = "en";//默认版本
var default_version_url = "lang.txt";//
//=============END===================



//==========函数区===================
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function setCookie(name,value)
{
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function setLanguage(lang){
	setCookie(lang);
}

function getCookie(name)
{
	var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

function loadJs(js_file){
	$.ajax({  
    type: 'GET',  
    url:js_file,  
	cache:true,
    async:false,  
	contentType:"application/x-www-form-urlencoded; charset=utf-8",
    dataType:'script'
	});
}

function loadLang(){
	$.ajax({  
    type: 'GET',  
    url:default_version_url,  
	cache:true,
    async:false,  
	success:function(data){
		data = data.trim();
		if(data != "none"){
			url_lang = data;
			default_version = url_lang;
		}else{
			url_lang = null;
		}
	},
	error:function(data){
		url_lang = null;
	}
	});
}

/**
*	如果key不存在将返回默认值
*/
function getValue(key,default_value){
	if(typeof(lang[key])=="undefined"){ 
		return default_value;
	}else{
		return lang[key];
	}
}

function getValue(key){
	if(typeof(lang[key])=="undefined"){ 
		return null;
	}else{
		return lang[key];
	}
}

function bindView(key,selector){
	if(typeof(lang[key]) != "undefined"){
		$(selector).html(lang[key]);
	}
}

/**
* 如果key与ID选择器的值相同，请使用这个
* #app_1   app_1
*/
function bindView(key){
	if(typeof(lang[key]) != "undefined"){
		$("#" + key).html(lang[key]);
	}
}

function autoBindView(){
	for(var key in lang){
		bindView(key);
	}
}
//======================================

//url判断
url_lang = GetQueryString("lang");
if(url_lang != null){
	default_version = url_lang;
}

console.log("加载param后的值：" + url_lang);

if(url_lang == null){
	url_lang = getCookie("lang");
	if(url_lang != null){
		default_version = url_lang;
	}
}
console.log("加载cookie后的值：" + url_lang);

if(url_lang == null)
	loadLang();
console.log("加载url后的值：" + url_lang);



console.log("当前语言：" + default_version);




//自动加载模块语言
var module_lang = GetQueryString("module_lang");
if(module_lang != null){
	loadJs("Language/module/" + module_lang + "/" + default_version +".js");
	console.log("模块"+module_lang + "加载成功");
}

//自动加载语言包
loadJs("Language/locale/" + default_version +".js");