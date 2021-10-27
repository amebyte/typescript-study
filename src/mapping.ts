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

type RecordObj = Record<'x' | 'y', objMapping>
// Record 是非同态类型
// 映射类型本质上是一种预先定义的泛型接口，通常还会结合索引类型，获取对象的属性和属性值，从而
// 像一个对象映射成我们想要的结构