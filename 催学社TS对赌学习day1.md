```
npm i -y
```

TypeScript编译器

```
npm i -g typescript
```

tsc TypeScript编译器

此外还可以使用ts-loader作为TypeScript编译器

静态检查

### noEmitOnError

tsc --noEmitOnError xxx.ts

这个是用于配置，当编译源文件出现错误的时候，是否继续输出编译结果。noEmitOnError默认为false，所以即使编译的源文件中有错误，那么也会继续输出编译结果，如果noEmitOnError配置为true，那么当源文件中有错误的时候，将不再输出编译结果。

TypeScript编译后的JavaScript版本

默认情况下TypeScript编译的目标是ES3，这是ECMAScript的一个非常老的版本，但我们可以通过--target 配置选择我们编译的JavaScript版本，比如：--target es2015，那么编译之后的JavaScript版本就是ECMAScript 2015版本，也就是我们通常说的ES6



### 是否使用noImplicitAny

noImplicitAny编译器选项所做的，基本上是将TypeScript从可选类型语言转换为强制类型检验语言。这使得TypeScript离JavaScript的超集稍微远了一些，因为简单的：

```javascript
function logMe(x) {
  console.log(x);
}
// error TS7006: Parameter 'x' implicitly has an 'any' type.
```

也将报错——你必须明确声明`x`的类型为`any`: 

```javascript
function logMe(x: any) {
  console.log(x);
}
```

这意味着，如果你要把*现有的JS代码库*迁移到TS，那除了更改文件扩展名，你还得做一些较复杂的东西。这还意味着，在编写代码时，您需要更多地关注类型，如果不指定类型，编译器就总是会「抱怨」。由于在实际情况中*显式地声明any*被认为是不好的实践，所以在开发过程的早期，您就需要分配*正确的类型*。如果没有显式的声明，这可能意味着「我太懒了，没有正确地注释这里的类型」。

这样子到底是好是坏是有很大争议的，社区在这个问题上似乎存在分歧。下面是一些业界领先的TypeScript项目，以及它们是否使用了`noImplicitAny`编译器标志:

| Project    | Uses `noImplicitAny` |
| ---------- | -------------------- |
| Angular    | YES                  |
| RxJS       | YES                  |
| VSCode     | NO                   |
| Babylon.js | NO                   |

 接下来下面是我的观点：我们使用TypeScript，是因为类型提供了有意义的额外信息，可以作为文档、并在早期捕获错误。如果想在项目的代码中都享受这种益处，那就不应该只在某个地方添加类型——把它们添加到任何地方，就可以完成了。

否则你就有可能做出如下额外的思考：

> “嗯，我应该在这里添加类型吗？我有点懒，但这很好，但我还有其他工作要做……「我们明天再做吧。」

因此，我的建议是将`noImplicitAny`设置为`true`。



### 是否使用strictnullcheck

空指针是最常见的bug之一，而通过`strictnullcheck` TypeScript编译器标志可以在很大程度上避免空指针。 

如果你准备编写一个新TypeScript项目，或者有时间将strictnullcheck标志引入到现有的项目中，我建议你这样做。你的应用会因此具备更高的安全性，使用严格的null检查也不会打乱代码，因应用程序本应包含这些检查。缺点是新开发人员还需要学习一个概念。对我来说，利大于弊，所以我建议打开严格的空检查。 

```javascript
interface User {
  name: string;
  age?: number;
}
function printUserInfo(user: User) {
  console.log(`${user.name}, ${user.age.toString()}`)
  // => error TS2532: Object is possibly 'undefined'.
  console.log(`${user.name}, ${user.age!.toString()}`)
  // => OK, you confirm that you're sure user.age is non-null.
  // => 好的，你已经确认user.age是非空的。

  if (user.age != null) {
    console.log(`${user.name}, ${user.age.toString()}`)
  }
  // => OK, the if-condition checked that user.age is non-null.
    // => 好的，if条件检查了user.age是非空的。

  console.log(user.name + ', ' + user.age != null ? user.age.toString() : 'age unknown');
  // => Unfortunately TypeScript can't infer that age is non-null here.
  // => 不幸的是TypeScript不能在这里推断年龄是非空的。(译注：截止至2019年7月16日，TS依旧会报此错)
}
```

如上所述：

1. 感叹号表示你确信(例如，通过在代码中的某个地方执行检查)可能为空的变量实际上是非空的。
2. 如果执行If条件检查, TypeScript可以推断某些内容是非空的。
3. 然而，对于三元运算符来说，不幸的是情况并非如此。



空安全 

这是不允许隐式any 

类型收缩 



 type是唯一的 

interface可以存在多个 

 同名 interface 会合并 

类型创建后不能更改

允许用户拓展就使用interface

优先使用interface



tsc --init --locale zh-cn