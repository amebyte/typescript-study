// 类型与接口的关系
// 一个接口可以约束一个类成员有哪些属性以及他们的类型
interface Human {
    name: string;
    eat(): void
}
// 类实现接口的时候必须实现接口中声明的所有属性和方法
class Asian implements Human {
    constructor(name: string) {
        this.name = name
    }
    name: string
    eat() {}
}
// 接口只能约束类的公有成员
// 接口的继承
// 接口可以像类一样相互继承，并且一个接口可以继承多个接口
interface Man extends Human {
    run(): void
}
interface Child {
    cry(): void
}
interface Boy extends Man,Child {}

const boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
}
// 从接口的继承可以看出，接口的继承可以抽离出可重用的接口，也可以将多个接口合并成一个接口

// 接口继承类
// 接口除了可以继承接口之外，还可以继承类，这就相当于接口把类的成员都抽象出来，也就是只有类的成员结构，而没有具体的实现
class Auto {
    state = 1
}
interface AutoInterface extends Auto {

}
// 这样AutoInterface接口就隐含了state属性，要想实现这个AutoInterface接口只要一个类的成员和state的属性就可以了
class C implements AutoInterface {
    state = 1
}
class Bus extends Auto implements AutoInterface {

}
// 在这个例子中我们就不必实现state属性了，因为Bus是Auto的子类自然继承了state属性
// 这里需要额外注意的是，接口在抽离类的成员的时候，不仅抽离了公共成员，而且抽离了私有成员和受保护成员