// 高级类型：映射类型
// 通过映射类型可以把一个旧的类型生成一个新的类型
interface objMapping {
    a: string;
    b: number;
    c: boolean;
}

type ReadonlyObj = Readonly<objMapping>

type PartialObj = Partial<objMapping>

type PickObj = Pick<objMapping, 'a'|'b'>

// 以上三种映射类型官方称为同态,意思是只作用于obj属性而不会引入新的属性

// Readonly的实现原理:
// 从源码可以看出Readonly是一个可索引类型的泛型接口

// 1)索引签名为P in keyof T :
// 其中keyof T就是一个一个索引类型的查询操作符,表示类型T所有属性的联合类型

// 2)P in :
// 相当于执行了一个for in操作,会把变量P依次绑定到T的所有属性上

// 3)索引签名的返回值就是一个索引访问操作符 : T[P]  这里代表属性P所指定的类型

// 4)最后再加上Readonly就把所有的属性变成了只读,这就是Readonly的实现原理


type RecordObj = Record<'x' | 'y', objMapping>
// Record 是非同态类型
// 映射类型本质上是一种预先定义的泛型接口，通常还会结合索引类型，获取对象的属性和属性值，从而
// 像一个对象映射成我们想要的结构

// Readonly， Partial和 Pick是同态的，但 Record不是。 因为 Record并不需要输入类型来拷贝属性，所以它不属于同态，非同态类型本质上会创建新的属性，因此它们不会从它处拷贝属性修饰符。