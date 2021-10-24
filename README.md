# Typescript study

### 环境配置

```
npm init -y
```

```
npm i typescript -g
```

全局安装好之后我们就可以使用ts编译器了--tsc

```
// 初始化生成tsconfig.json文件
tsc --init
// 编译文件
tsc ./src/index.ts
```

配置构建工具

```
npm i webpack webpack-cli webpack-dev-server -D
```

为了工程的可维护性，我们可以把开发环境的配置、生产环境的配置、公共的配置分开书写，最后通过插件来合并。

既然我们引入了ts文件，我们就需要安装ts的loader进行编译打包,注意我们需要在本地安装typescript

```
npm i ts-loader typescript -D
```

我们用到了HtmlWebpackPlugin，它的作用是通过一个模版帮助我们生成网站的首页，而且可以帮我们把输出文件自动嵌入到这个文件中。

```
npm i html-webpack-plugin -D
```

在开发环境中我们开启了sourcemap

```javascript
module.exports = {
    devtool: 'eval-cheap-module-source-map' // webpack5
}
```

生产环境我们使用到了CleanWebpackPlugin 插件

```
npm i clean-webpack-plugin -D
```

合并配置文件我们使用到了webpack-merge

```
npm i webpack-merge -D
```

更改package.json的文件入口

```javascript
"main": "./src/index.ts"
```

编写启动开发环境命令

```javascript
"scripts": {
   "start": "webpack serve --mode development --env development --config ./build/webpack.config.js",
   "build": "webpack --mode production --env production --config ./build/webpack.config.js"
   "test": "echo \"Error: no test specified\" && exit 1"
}
```



#### 