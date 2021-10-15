type ClassT<T> = new (...ags: any[]) => T;

function createClass<T extends ClassT<T>>(base: T) {
  return class extends base {};
}

// TypeScript鸭子类型（duck-typing） – TypeScript开发教程
// 根据TypeScript, Duck-Typing是一种方法/规则，用于检查更复杂的变量类型的类型兼容性。

// TypeScript使用duck-typing方法来比较一个对象和其他对象，方法是检查两个对象是否具有相同的类型匹配名称。这意味着我们不能改变一个变量的签名。例如，如果我们分配一个有两个属性的对象，比如名称、地址，下一次我们分配一个包含更多属性或更少属性的对象，或者两个属性都不是(名称、地址)，那么TypeScript编译器将生成编译时错误。这个概念被称为Duck typing。

// duck-typing特性在TypeScript代码中提供了类型安全性。

// 通过duck-typing规则TypeScript编译器检查对象是否与其他对象相同。

// 根据duck-typing方法，两个对象必须具有相同的属性/变量类型。

// class Car {
//     drive() {
//       // hit the gas
//     }
//   }
//   class Golfer {
//     drive() {
//       // hit the ball far
//     }
//   }
//   // No error?
//   let w: Car = new Golfer();

class Dogt {
  sound = "barking";
}
class Lion {
  sound = "roaring";
}
class Goat {
  sound = "bleat";
  swim() {
    console.log("Cannot Swim!");
  }
}
let lion: Lion = new Dogt(); // 替代者
let dog: Dogt = new Lion(); // 替代者
let lionTwo: Lion = new Goat();
//let goat: Goat = new Lion(); // IDE & compiler error
console.log("Lion Sound: " + lion.sound);
console.log("Dog sound: " + dog.sound);
console.log("Lion sound: " + lionTwo.sound);
