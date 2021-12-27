day2

类型断言

1. as
2. 尖括号语法 这种方式在react中会有冲突

更具体或者更不具体，不就覆盖了所有 



文字类型

const 声明 类型是字面量

let var 在对象里面声明 -》 string

可以使用const将整个对象转换为文本类型



缩小类型

类型保护

1.typeof

2.if(true | false)

3.Equality narrowing

4.in

5.instanceof



```javascript
// 声明两个接口Dog(服务员)接口和Cat(技师)接口
interface Dog {
  disable: boolean;
  say: () => {};
}
interface Cat {
  disable: boolean;
  skill: () => {};
}
function callAnimal(animal: Dog | Cat) {
  animal.say(); // 这样写会报错 因为 callAnimal 不能准确的判断联合类型具体的实例是什么
}
```





类型谓词

定义一个function来主动告诉ts返回类型是什么



never类型



```javascript
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

interface Three {
    kind: 'three',
    value: number
}

type Shape3 = Circle | Square;

function getArea3(shape: Shape3) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape; // 这里去检测没有其他的kind
            return _exhaustiveCheck;
    }
}
```



