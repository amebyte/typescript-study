// 索引签名
interface t {
  [index: string | number]: string | number
}

const a: t = { a: '1', 1: '4', b: 2 }

const salary1 = {
  baseSalary: 100_000,
  yearlyBonus: 20_000,
}

const salary2 = {
  contractSalary: 110_000,
}

interface ISalary{
    [k: string] : number
}

type SalaryT = { [k: string] : number }

function totalSalary(salaryObject: SalaryT) {
  let total = 0
  for (const name in salaryObject) {
    total += salaryObject[name]
  }
  return total
}
totalSalary(salary1) // => 120_000
totalSalary(salary2) // => 110_000


// 索引类型
// 我们有时候会遇到这样的一种场景，就是从对象中获取一些属性的值然后建立一个集合
let obj = {
    a: 1,
    b: 2,
    c: 3
}
function getValues<T,K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}
console.log(getValues(obj, ['a', 'b']))

console.log(getValues(obj, ['e', 'f'])) 
// 随意指定没有的属性，但ts编译器并没有报错，所以这个时候我们需要对类型进行约束，这个时候我们就需要用到了索引类型

// keyof T 
// 表示类型T的所有公共属性的字面量的联合类型
interface Obj {
    a: number,
    b: string
}
type key = keyof Obj

// T[k]
// 表示对象T的属性k所代表的类型
let value: Obj['a']

// 泛型约束
// T extends U
// 表示泛型变量可以通过继承某个类型获得某些属性

// 可以看到索引类型可以实现对对象属性的查询和访问，然后配合泛型约束，就能告诉我们建立对象、对象属性以及属性值之间的约束关系

