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
