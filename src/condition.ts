// 条件类型
// 条件类型是一种由条件表达式决定的类型
// T extends U ? X : Y
// 意思是如果类型T可以赋值给类型U，那么结果类型就是X类型，否则就是Y类型，条件类型使类型具有了不唯一性，同样增加了语言的灵活性
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' : 
    T extends undefined ? 'undefined' : 
    T extends Function ? 'function' : 
    "object"

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)

type T3 = TypeName<string | string[]>

// 利用这个特性可以帮助我们实现一些类型的过滤
type Diff<T, U> = T extends U ? never : T

type T4 = Diff<'a'|'b'|'c', 'a' | 'e'>
// Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | "b" | "c"
// "b" | "c"

