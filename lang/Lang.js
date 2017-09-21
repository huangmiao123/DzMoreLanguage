var lang = [];//加载语言

var lang_version = [];//语言版本号
var url_lang = null;//检测当前版本




//==========配置文件区==============
lang_version["cn"] = "简体";
lang_version["en"] = "英语";
var default_version = "en";//默认版本
var default_version_url = "lang.txt";//
//=============END===================

//同步访问
 $.ajaxSetup({  
    async : false  
});

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

function getCookie(name)
{
	var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

//url判断
url_lang = GetQueryString("lang");
if(url_lang != null){
	default_version = url_lang;
}

console.log("加载param后的值：" + url_lang);


if(url_lang == null){
	$.get(default_version_url+"?random=" + Math.random(),function(data,status){
		if(status == "success"){
			if(data.trim() != "none"){
				default_version = data;
				url_lang = default_version;
			}else{
				url_lang = null;
			}
		}else{
			url_lang = null;
		}
	});
}

console.log("加载url后的值：" + url_lang);

if(url_lang == null){
	url_lang = getCookie("lang");
	if(url_lang != null){
		default_version = url_lang;
	}
}

console.log("加载cookie后的值：" + url_lang);

console.log("当前语言：" + default_version);

//自动加载语言包
$.getScript("lang/locale/" + default_version +".js");