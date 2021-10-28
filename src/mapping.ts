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


// Readonly的实现原理:
// 从源码可以看出Readonly是一个可索引类型的泛型接口

// 1)索引签名为P in keyof T :
// 其中keyof T就是一个一个索引类型的查询操作符,表示类型T所有属性的联合类型

// 2)P in :
// 相当于执行了一个for in操作,会把变量P依次绑定到T的所有属性上

// 3)索引签名的返回值就是一个索引访问操作符 : T[P]  这里代表属性P所指定的类型

// 4)最后再加上Readonly就把所有的属性变成了只读,这就是Readonly的实现原理

// Partial的实现原理:
// 可选和只读映射类型的实现几乎一样,知识属性变为可选

// Pick映射类型的实现原理:

// Pick映射类型有两个参数:
// 第一个参数T,表示要抽取的目标对象
// 第二个参数K,具有一个约束:K一定要来自T所有属性字面量的联合类型,
// 即映射得到的新类型的属性一定要从K中选取

// 以上三种映射类型官方称为同态,意思是只作用于obj属性而不会引入新的属性

type RecordObj = Record<'m' | 'n', objMapping>

// 第一个参数是预定义的新属性,比如m,n
// 第二个参数就是已知类型
// 映射出的新类型所具有的属性由Record的第一个属性指定，而这些属性类型为第二个参数指定的已知类型，这种类型就是一个非同态的类型  


// Record 是非同态类型，非同态类型本质上会创建新的属性 
// 映射类型本质上是一种预先定义的泛型接口，通常还会结合索引类型，获取对象的属性和属性值，从而
// 像一个对象映射成我们想要的结构

// Readonly， Partial和 Pick是同态的，但 Record不是。 因为 Record并不需要输入类型来拷贝属性，所以它不属于同态，非同态类型本质上会创建新的属性，因此它们不会从它处拷贝属性修饰符。