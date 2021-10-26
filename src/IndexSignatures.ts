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
function getValues(obj: any, keys: string[]) {
    return keys.map(key => obj[key])
}
console.log(getValues(obj, ['a', 'b']))

console.log(getValues(obj, ['e', 'f'])) // 随意指定没有的属性，但ts编译器并没有报错，所以这个时候我们需要对类型进行约束，这个时候我们就需要用到了索引类型
