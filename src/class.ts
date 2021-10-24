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
        console.log('sleep')
    }
}
const chicken = new Chicken()
chicken.eat()