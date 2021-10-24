// 类型推断
interface AmeFoo {
    name: string
}
let ameFoo = {} as AmeFoo
ameFoo.name = 'coboy'

// 推荐在声明的时候就指定类型
let ameFoo1: AmeFoo = { name: 'coboy' }
// 类型断言可以增加我们代码的灵活性，在改造一些旧代码的时候非常有效，但使用类型断言，要注意避免滥用，要对上下文的环境要有充足的预判，没有任何根据的类型断言会带来安全的隐患，总之TS的类型推断
// 可以为我们提供重要的辅助信息，应该善加利用

// 类型兼容
// 当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
// X兼容Y：X（目标类型）= Y（源类型）

// 之所以我们要讨论类型兼容性问题，是因为TS允许我们把一些类型不同的变量相互赋值
// 类型兼容性的例子广泛存在于接口、函数和类中

// 接口兼容性
interface AmeX {
    name: any;
    age: any;
}
interface AmeY {
    name: any;
    age: any;
    height: any;
}
let ameX: AmeX = { name: 'coboy', age: 25 }
let ameY: AmeY = { name: 'cobyte', age: 25, height: 180 }
ameX = ameY
ameY = ameX
// 这里再次体现了TS的检测原则，也就是鸭式变形法（一只鸟走起来像鸭子，游起来像鸭子，叫起来像鸭子，就可以被认为是鸭子）
// 源类型必须具备目标类型的必要属性，就可以进行赋值(成员少的会兼容成员多的)

// 函数兼容性
// 要判断两个函数是否兼容通常发生在相互赋值的情况下，也就是函数作为参数的情况下
type Handler = (x: number, y: number) => void
function add(handler: Handler) {
    return handler
}

// 1.参数个数

let handler1 = (x: number) => {}
add(handler1)
let handler2 = (x: number, y: number, z: number) => {}
add(handler2)

// 可选参数和剩余参数
let fun1 = (p1: number, p2: number) => {}
let fun2 = (p1?: number, p2?: number) => {}
let fun3 = (...args: number[]) => {}
// 固定参数可以兼容可选参数和剩余参数
fun1 = fun2
fun1 = fun3
// 可选参数是不兼容固定参数和剩余参数
fun2 = fun3
fun2 = fun1
// 可以将strictFunctionTypes设置为false
// 剩余参数可以兼容固定参数和可选参数
fun3 = fun1
fun3 = fun2

// 2.参数类型
let handler3 = (a: string) => {}
add(handler3)

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d
p2d = p3d
// 可以将strictFunctionTypes设置为false
// 这种函数的参数之间可以赋值的情况，叫做函数参数的双向协变，这种情况允许我们把一个精确的类型赋值给一个不那么精确的类型，这样做我们就不需要把一个不精确的类型断言成一个精确的类型

// 3.返回值类型
// ts要求我们目标的返回值类型必须与源函数的返回值类型相同，或者为其子类型
let fun4 = () => ({name: 'coboy'})
let fun5 = () => ({name: 'cobyte', age: 18})
fun4 = fun5
fun5 = fun4

function overload(x: number, y: number): number
function overload(x: string, y: string): string
function overload(x: any, y: any): any {}
// 函数重载分为两部分，第一部分就是函数重载的列表，第二部分就是函数的具体实现，这里列表中的函数就是目标函数，
// 而具体的实现函数就是源函数。程序在运行的时候，编译器会查找重载列表，然后使用第一个匹配的定义来执行下面的函数，所以在重载列表中，
// 目标函数的参数要多于源函数的参数，而且返回值类型也要符合相应的要求

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
// 枚举类型和数字类型是可以完全相互兼容的
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// 枚举之间是完全不兼容的

// 类的兼容性
class AmeByte1 {
    constructor(x: number, y: number) {}
    id: number = 1
}
class AmeByte2 {
    static x = 1
    constructor(p: number) {}
    id: number = 2
}
let amebyte1 = new AmeByte1(1, 2)
let amebyte2 = new AmeByte2(1)
amebyte1 = amebyte2
amebyte2 = amebyte1
// 类的兼容性和接口的比较相似，他们也只是比较结构。注意：在比较两个类是否兼容的时候，静态成员和构造函数是不参与比较的，如果两个类具有相同的实例成员，那么他们的实例就可以互相兼容。
// 如果两个类含有私有成员，那么这两个类就不兼容了,这个时候只有父类和子类之间是互相兼容的
class AmeByte3 {
    constructor(x: number, y: number) {}
    id: number = 1
    private name: string = ''
}
class AmeByte4 {
    static x = 1
    constructor(p: number) {}
    id: number = 2
    private name: string = ''
}
let amebyte3 = new AmeByte3(1, 2)
let amebyte4 = new AmeByte4(1)
amebyte3 = amebyte4
amebyte4 = amebyte3

class ChildAmeByte3 extends AmeByte3 {}
let childAmeByte3 = new ChildAmeByte3(1, 2)
amebyte3 = childAmeByte3
childAmeByte3 = amebyte3

// 泛型兼容性
interface Empty1<T> {}
let obj1: Empty1<number> = {}
let obj2: Empty1<string> = {}
obj1 = obj2

interface Empty2<T> {
    value: T
}
let obj3: Empty2<number> = {}
let obj4: Empty2<string> = {}
obj3 = obj4
// 只有类型参数T被接口成员使用的时候，才会有影响泛型的兼容性

// 泛型函数
let ameT1 = <T>(x: T): T => {
    console.log('x')
    return x
}
let ameT2 = <U>(y: U): U => {
    console.log('y')
    return y
}
ameT1 = ameT2
// 如果两个泛型函数的定义相同但没有指定类型参数，那么他们之间也是可以互相兼容的

// 口诀：
// 结构之间的兼容：成员少的兼容成员多的
// 函数之间的兼容：参数多的兼容参数少的

