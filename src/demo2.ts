type ClassT<T> = new (...args: any[]) => T

function createClass<TBase extends ClassT<Object>>(base: TBase) {
    return class extends base {
        name = 'coboy'
    }
}

class User{

}

const newUser = createClass(User)
const newUserInstance = new newUser()
newUserInstance.name

