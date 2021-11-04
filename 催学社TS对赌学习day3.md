day3

### 函数类型表达式

语法`(a: string) => void`意思是“有一个参数的函数，名为`a`，类型为String，它没有返回值“。就像函数声明一样，如果没有指定参数类型，则它是隐式的`any`. 

注意，参数名是**所需**。功能类型`(string) => void`意思是“函数具有一个名为`string`类型`any`

为什么s没有的时候 fn 还是没有报错

### 呼叫签名 

在JavaScript中，函数除了具有可调用属性外，还可以具有属性。但是，函数类型表达式语法不允许声明属性。如果我们想用属性来描述可调用的东西，我们可以编写一个*呼叫签名*在对象类型中： 

```javascript
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```

### 构造签名 

你可以写一个*构造签名*通过添加`new`在呼叫签名前面的关键字： 

```javascript
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```



### 约束 

```javascript
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
 
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
```

### 函数重载

```javascript
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
```

### never

```javascript
unction fail(msg: string): never {
  throw new Error(msg);
}
```

