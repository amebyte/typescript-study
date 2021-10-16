
interface items {
    [index: number]: number;
}
interface myitems {
  [index: string]: string;
}

const value1: items = { 1: 2, 3: 4 }
const value2: myitems = { 1: '2', 3: '4' }

console.log(value1)
console.log(value2)


type Index = 'a' | 'b' | 'c'
type FromIndex = { [k in Index]?: number }

const good: FromIndex = {b:1, c:2}

// Error:
// Type '{ b: number; c: number; d: number; }' is not assignable to type 'FromIndex'.
// Object literal may only specify known properties, and 'd' does not exist in type 'FromIndex'.

// const bad: FromIndex = {b:1, c:2, d:3};


type Dog = { name: string, age: number }

function addDog(dog: Dog): void {}

const d = { name: 'dd', age: 2 }
addDog(d)


type Dog1<T> = { name: string, type: T }

function addDog1<T>(dog: Dog1<T>) {

}
addDog1({name: 'dd', type: 'fff' })
addDog1<string>({name: 'dd', type: 'xxx' })


// 这两个写法啥区别啊

type StringNot<T> = T extends 'a'|'b' ? T :never
type MyStringNot<T> = [T] extends ['a'|'b'] ? T :never

const aaa: StringNot<'a'> = 'a'
const bbb: StringNot<'b'> = 'b'

// [T] 是否是这个 ['a'|'b'] 的子集

// 就结果而言没啥区别


interface Star {
    color?: 'blue'|'red',
    color1?: 'blue'|'red'
  }
  
  function paintStart (id: number, color: NonNullable<Star['color1']>) {
    console.log('dfd', color)
  }
  
  paintStart(1, 'blue')
