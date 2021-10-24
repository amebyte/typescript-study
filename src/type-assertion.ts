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
