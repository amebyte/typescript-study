// 条件类型
// 条件类型是一种由条件表达式决定的类型
// T extends U ? X : Y
// 意思是如果类型T可以赋值给类型U，那么结果类型就是X类型，否则就是Y类型
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' : 
    T extends undefined ? 'undefined' : 
    T extends Function ? 'function' : 
    "object"
