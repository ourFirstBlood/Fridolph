## 包

nodejs中除了它自己提供的核心模块外，我们可以自定义模块，也可以使用第三方模块。nodejs中第三方模块由包组成，可以通过包来对一组具有相互依赖关系的模块进行统一管理。

完全符合commonJS规范的包目录一般包含如下这些文件：

* pakeage.json包描述
* bin 用于存放可执行二进制文件的目录
* lib 用于存放js代码的目录
* doc用于存放文档的目录

nodejs可通过npm命令来下载第三方的模块

## npm

npm 是 是 世界上最大的开放源代码的生态系统。我们可以通过 npm 下载各种各样的包，
这些源代码（包）我们可以在 https://www.npmjs.com 找到。

npm  是随同 NodeJS  一起安装的包管理工具，能解决 NodeJS  代码部署上的很多问题，
常见的使用场景有以下几种：

* 允许用户从 NPM 服务器下载别人编写的第三方包到本地使用。(silly-datetime)
* 允许用户从 NPM 服务器下载并安装别人编写的命令行程序(工具)到本地使用。
（supervisor）
* 允许用户将自己编写的包或命令行程序上传到 NPM 服务器供别人使用。

## save和save-dev区别

* save自动更新 dependencies字段值（配置当前程序所依赖的其他包）

* save-dev自动更新 dependencies字段值（配置当前程序所依赖的其他包，只会下载模块，而不下载这些模块的测试和文档框架）

```js
"dependencies": {
  "ejs": "^2.3.4",
  "express": "^4.3.4",
  "koa": "^1.3.4"
}
```

* ^ 表示第一位版本号不变，后两位取最新的
* ~ 表示前两位不变，最后一位取最新
* * 表示全部取最新
