# DzMoreLanguage语言解决方案
基于Js的前端多语言切换框架。网站多语言切换，网站多语言解决方案，文章多语言，页面多语言。


## 当前版本
目前最新版：1.0.1

## 公告
+ 2018-02-02 升级语言模块。

## 如何使用

下载Language包后放到项目根目录。第二步打开Language->Setting.js做出以下配置
```
lang_debug = true;//是否开启调试模式
lang_debug_type = 2;//1为alert 2为conosle.log
lang_version["cn"] = "简体";//语言版本种类 可随意扩展
lang_version["en"] = "英语";
var default_version = "en";//默认显示的语言种类
var default_version_url = "lang.txt";//默认从文件读取语言种类
```

## 注意

> 调试时请放在服务器内测试，不要直接打开index.html，DzMoreLanguage将依赖于Jquery请务必导入。


### 多语言切换框架
+ 支持url、cookie、支持扩展文件(lang.txt)、配置文件（优先级递减）四种方式进行多语言切换。
+ 支持语言库模块化，在加载了locale、您可以设置还需要加载的语言库模块。


### 如何创建语言模块
> 请先在Language/module文件夹下创建一个模块名目录如：test。分别在该目录下创建cn.js、en.js更多语言请自行扩展。
![](https://github.com/fanhua1994/DzMoreLanguage/blob/master/Image/Image%201.png?raw=true)

### 创建语言库规则
> 比如：cn.js

 lang["module_1"] = "你好";//module_1是key ,"你好"是值（不包括双引号）

> 想要自动加载的模块请使用url参数module_lang=模块名称。支持多模块自动加载。规则  =>(http://localhost:8080/index.html?module_lang=test,test2)

### 设置语言
#### URL设置语言版本（最高优先级）
```
http://localhost:8080/index.html?lang=cn
```
#### URL设置语言版本并加入语言库模块
```
http://localhost:8080/index.html?lang=cn&module_lang=test
```

#### cookie设置语言版本（第二优先级）
```
setLanguage("cn");
```

#### 扩展文件设置（第三优先级）
```
动态语言直接操作lang.txt，或者修改Lang.js里的获取版本url。返回none为忽略，否则请返回语言版本,如"cn"。如果您需要自定义这个路径。请保证以下格式。
http://xxx.com/lang.php  -> echo：cn
```

#### 配置文件（优先级递减）四种方式进行多语言切换。
```
var default_version = "en";
```

### 绑定视图及常用方法（支持模块绑定）
#### 设置语言值（方便将数据库的值进行数据绑定）
```
setValue(key,value);
```

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
