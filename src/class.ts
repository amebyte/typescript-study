class Cat{
    constructor(name:string) {
        // this.name = name
    }
    name?: string
    run() {}
}
// 无论在ts中还是es中，类成员的属性，都是实例属性，而不是原型属性，类成员的方法，都是实例方法
console.log(Cat.prototype)
const cat = new Cat('mini cat')
console.log(cat)

class ChildCat extends Cat {
    constructor(name: string, public color: string) {
        super(name)
    }
}
// es中并没有抽象类，这是ts对类的拓展，所谓抽象类，就是只能被继承而不能实例化的类。在抽象类中可以定义一个方法，它可以有具体的实现，这样子类就不用实现了，就实现了方法的复用。
abstract class Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void
}
class Chicken extends Animal {
    sleep() {
        console.log('Chicken sleep')
    }
}
const chicken = new Chicken()
chicken.eat()

// 抽象类的好处就是可以抽离出一些事物的共性，这样就有利于代码的复用和拓展，另外抽象类可以实现多态
// 所谓多态就是在父类中定义一个抽象方法，在多个子类中对方法有不同的实现，在程序运行的时候，会根据不同的对象，执行不同的操作，实现了运行时的绑定
class Cattle extends Animal {
    sleep() {
        console.log('Cattle sleep')
    }
}
const cattle = new Cattle()
const animals: Animal[] = [chicken, cattle]
animals.forEach(o => {
    o.sleep()
})

// 链式调用
class WorkFlow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}
new WorkFlow().step1().step2()

class Myflow extends WorkFlow {
    next() {
        return this
    }
}
new Myflow().next().step1().next().step2()