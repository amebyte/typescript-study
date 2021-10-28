// 条件类型
// 条件类型是一种由条件表达式决定的类型
// T extends U ? X : Y
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' : 
    T extends undefined ? 'undefined' : 
    T extends Function ? 'function' : 
    "object"
