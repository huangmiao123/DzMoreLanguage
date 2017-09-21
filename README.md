# MultilingualJs
基于Js的前端多语言切换框架。网站多语言切换，网站多语言解决方案，文章多语言，页面多语言。请您放心，语言包仅加载仅加载一次之后会取缓存。

## 注意

> 调试时请放在服务器内测试，不要直接打开index.html


### 多语言切换框架
+ 支持url、支持扩展文件(lang.txt)、cookie、配置文件（优先级递减）四种方式进行多语言切换。
+ 支持语言库模块化，在加载了locale、您可以设置还需要加载的语言库模块。

> 想要自动加载的模块请使用url参数module_lang=模块名称，请记住一个界面只能加载一个模块，加载再多也无意义。
```
//自动加载模块语言
var module_lang = GetQueryString("module_lang");
if(module_lang != null){
	loadJs("Language/module/" + module_lang + "/" + default_version +".js");
	console.log("模块"+module_lang + "加载成功");
}
```
