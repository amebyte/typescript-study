# Typescript study

### 学在最前

任何能用javascript实现的应用最终都会用javascript实现。

在实际项目中当我们调用别人写的一个函数时，那个函数又没有留下任何注销，这个时候我们要搞清楚这个函数的调用参数的意义，就需要深入那个函数内部进行查看了。

有时候我们维护一个公众函数，你殚精竭虑地优化了一个参数类型，但不知道有多少处引用，是不是很担心，你的修改会出现其他功能错误呢。

以上种种是因为javascript是一门动态弱类型语言。对变量的类型非常宽容,而且不会在这些变量和它们的调用者之间建立结构化的契约。如果你长期在没有类型约束的环境下开发，就会造成“类型思维”的缺失，养成不良的编程习惯，这也是做前端开发的短板之一。值得庆幸的是开源社区一直在努力解决这个问题，早在2014年Facebook就推出了Flow，微软在同年也发布了Typescript的1.0版本。它们都致力于为Javascript提供静态类型检查，现在多年过去了，显然Typescript发展得更好一些。

#### 什么是Typescript？

根据官方的定义Typescript是拥有类型系统的Javascript的超集，可以编译成纯Javascript。这里你需要注意三个要点：

1. 类型检查 

   Typescript会在编译代码时进行严格的静态类型检查，这意味着你可以在编码的阶段，发现可能存在的隐患。

2. 语言扩展

   Typescript会包括来自ECMASript 6 和未来提案中的特性，比如异步操作和装饰器，也会从其他语言借鉴某些特性，比如接口和抽象类。

3. 工具属性

   Typescript可以编译成标准的Javascript，可以在任何浏览器、操作系统上运行，无需任何运行时的额外开销，从这个角度上讲Typescript更像是一个工具，而不是一门独立的语言。

   
#### 为什么要使用Typescript ?

   使用Typescript能带来其他的好处，比如Visual Studio Code具有强大的自动补全、导航和重构功能，这使得接口定义可以直接代替文档，同时也可以提高开发效率，降低维护成本，更重要的是Typescript可以帮助团队重塑“类型思维”。接口提供方被迫去思考API的边界。他们将从代码的编写者蜕变成为代码的设计者。

####  什么是强类型语言

在强类型语言中，当一个对象从调用函数传递到被调用函数时，其类型必须与被调用函数中声明的类型兼容 — Liskove,Zilles 1974

```javascript
function Test1() {
    Test2(a)
}
function Test2(b) {
    // b 可以被赋值 a,程序运行良好
}
```

- 强类型语言：不允许改变变量的数据类型，除非进行强制类型转换。

- 弱类型语言：变量可以被赋予不同的数据类型

  

静态类型语言：在编译阶段确定所有变量的类型

- 编译阶段确定属性偏移量
- 用偏移量访问代替属性名访问
- 偏移量信息共享



- 对类型极度严格
- 立即发现错误
- 运行时性能好
- 自文档化

动态类型语言：在执行阶段确定所有变量的类型

- 在程序运行时，动态计算属性偏移量
- 需要额外的空间存储属性名
- 所有对象的偏移信息各存一份



- 对类型非常宽松
- Bug可能隐藏数月甚至数年
- 运行时性能差
- 可读性差

#### TS 编译的编译原理

问：TypeScript 可以被翻译为 JS，但这并不意味着 TS 是编译型语言对吧？那为什么用编译这个词呢？为什么不选择翻译，这样的词汇；TS 编译大概是怎样编译的呢？ 

答：翻译是一种简单的映射，而编译则包含复杂的转换过程，含义更加确切。广义的编译是指把源语言转换成目标语言的过程，比如 TypeScript 编译器会先扫描源代码，把它转换抽象语法树，然后再转换成 JavaScript；狭义的编译是指把源语言转换成机器码，需要这种转换的语言通常称为编译型语言（比如C++），而 TypeScript 的产物 JavaScript 则是解释型语言。 

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

