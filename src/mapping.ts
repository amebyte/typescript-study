// 高级类型：映射类型
// 通过映射类型可以把一个旧的类型生成一个新的类型
interface ObjMapping {
    a: string;
    b: number;
    c: boolean;
}

type ReadonlyObj = Readonly<ObjMapping>

type PartialObj = Partial<ObjMapping>

type PickObj = Pick<ObjMapping, 'a'|'b'>

// 以上三种映射类型官方称为同态,意思是只作用于obj属性而不会引入新的属性