const myName: string = 'coboy'
document.querySelector('#app')!.innerHTML = myName

interface List {
  id: number
  name: string
  desc?: string
}

interface Result {
  data: List[]
}

function filter(result: Result) {
  result.data.forEach((o) => {
    if (o.desc) {
      console.log(o.desc)
    }
  })
}

const result1 = {
  data: [
    { id: 1, name: 'name1' },
    { id: 2, name: 'name2' },
  ],
}

filter(result1)

// 实际过程中，可能后端返回的数组会增加一些数据

const result2 = {
  data: [
    { id: 1, name: 'name1', desc: '正在学习typescript' },
    { id: 2, name: 'name2' },
  ],
}
filter(result2)

// 我们发现ts并没有报错，这是因为ts采取了一种鸭式变形法，这是一种动态语言风格。
// 一个比较形象的说法是，一只鸟看起来像鸭子，走起来像鸭子，叫起来像鸭子，那么这只鸟就可以被认为是一只鸟。
// 回到ts中，我们只要传入的对象满足接口的必要条件，那么就是被允许的，即使传入多余的字段也可以通过类型检查。

// 但是如果我们传入对象字面量的话，ts就会对额外的字段进行检查
// 如果我们使用对象字面量进行传值的话，就要使用断言，类型断言的意思是我们要明确告诉编译器，这个对象字面量的类型就是Result，这样编译器就绕过类型检查

// filter({
//     data: [
//         {id: 1, name: 'name1', desc: "正在学习typescript"},
//         {id: 2, name: 'name2'}
//     ]
// } as Result)

// filter(<Result>{
//     data: [
//         {id: 1, name: 'name1', desc: "正在学习typescript"},
//         {id: 2, name: 'name2'}
//     ]
// })

// 我们还可以使用索引签名
// filter({
//     data: [
//         {id: 1, name: 'name1', desc: "正在学习typescript"},
//         {id: 2, name: 'name2'}
//     ]
// })

// 数字索引

interface StringArray {
  [index: number]: string
}
const chars: StringArray = ['a', 'b']

// 字符串索引
interface Item {
  [index: string]: any
  [key: number]: number
}

class A {
  sum(a: number, b: number) {
    return a + b
  }
}

class B extends A {
  sub(a: number, b: number) {
    return a - b
  }
}

// type R<T> = T extends A|B ? A : B

// type RR<T> = typeof T extends typeof A ? A : B;

type at = typeof A
type bt = typeof B

type f<T> = (p?: string) => T

function maker(): B
function maker(p:string): A
function maker(p?:string) {
    if(p) {
        return new A()
    }
    return new B()
}

const instane = maker()
instane.sub(1,2)

const instane2 = maker('ss')
instane2.sum(1,2)
// ts编译器在处理重载的时候，会去查询一个重载的列表，并且会尝试匹配第一个定义，如果不匹配就继续往下查找，所以我们要把最容易匹配的放在第一个