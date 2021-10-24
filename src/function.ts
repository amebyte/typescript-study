// 函数定义
// 1.通过Function来定义
function fn1(x: number, y: number) {
    return x + y
}
// 2.通过一个变量来定义
let fn2: (x: number, y: number) => number
// 3.通过类型别名来定义
type fn3 = (x: number, y: number) => number
// 4.通过接口来定义
interface fn4 {
    (x: number, y: number): number
}


// 混合类型接口
interface lib {
    (): void // 表示这个类是个函数，返回值是void
    version: string, // 属性
    toDo(): void // 方法
}

// 实现
let lib: lib = (() => {}) as lib
lib.version = '1.0'
lib.toDo = () => {}

// 创建多个实例
function getLib() {
    let lib: lib = (() => {}) as lib
    lib.version = '1.0'
    lib.toDo = () => {} 
    return lib
}