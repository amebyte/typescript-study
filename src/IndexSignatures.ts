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

