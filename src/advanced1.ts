// 高级类型
// 交叉类型与联合类型
interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

class DogImpl implements DogInterface {
    run() {}
    eat() {}
}
class CatImpl implements CatInterface {
    jump() {}
    eat() {}
}
enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new DogImpl() : new CatImpl()
    return pet
}

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
type Shape = Square | Rectangle
function area(s: Shape) {
    switch(s.kind) {
        case "square":
            return s.size * s.size
        case "rectangle":
            return s.height * s.width
    }
}