# MultilingualJs
基于Js的前端多语言切换框架。网站多语言切换，网站多语言解决方案，文章多语言，页面多语言。请您放心，语言包仅加载仅加载一次之后会取缓存。

## 注意

> 调试时请放在服务器内测试，不要直接打开index.html


### 多语言切换框架
+ 支持url、支持扩展文件(lang.txt)、cookie、配置文件（优先级递减）四种方式进行多语言切换。
+ 支持语言库模块化，在加载了locale、您可以设置还需要加载的语言库模块。


### 如何创建语言模块
> 请先在Language/module文件夹下创建一个模块名目录如：test。分别在该目录下创建cn.js、en.js更多语言请自行扩展。
![](https://github.com/fanhua1994/MultilingualJs/blob/master/Image/Image%201.png?raw=true)

### 创建语言库规则
> 比如：cn.js
 lang["module_1"] = "l am module text";//module_1是key ,"l am module text"是值（不包括双引号）

> 想要自动加载的模块请使用url参数module_lang=模块名称，请记住一个界面只能加载一个模块，加载再多也无意义。
```
//自动加载模块语言
var module_lang = GetQueryString("module_lang");
if(module_lang != null){
	loadJs("Language/module/" + module_lang + "/" + default_version +".js");
	console.log("模块"+module_lang + "加载成功");
}
```

### 绑定视图及常用方法（支持模块绑定）
#### 返回值，含默认值 不进行数据绑定
```
getValue(key,defalut_value);
```

#### 返回值，没有值则返回null
```
getValue(key);
```

#### 绑定视图 ，带JQ选择器
```
bindView(key,selector);
```

#### 绑定视图，默认ID选择器且与key相同
```
bindView(key);
```

#### 自动绑定，默认ID选择器与key相同。该方法不需要传参数。直接使用。内存消耗较大，语言库过大时请慎重使用。
```
autoBindView();
```
