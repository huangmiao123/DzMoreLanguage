var lang = [];//加载语言

var lang_version = [];//语言版本
lang_version["cn"] = "简体";
lang_version["en"] = "英语";

var default_version = "en";//默认版本

//自动加载语言包
$.getScript("lang/Lang/" + default_version +".js");