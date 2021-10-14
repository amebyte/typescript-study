
type Dog = { name: string, age: number }

function addDog(dog: Dog): void {}

const d = { name: 'dd', age: 2 }
addDog(d)


type Dog1<T> = { name: string, type: T }

function addDog1<T>(dog: Dog1<T>) {

}
addDog1({name: 'dd', type: 'fff' })
addDog1<string>({name: 'dd', type: 'xxx' })

