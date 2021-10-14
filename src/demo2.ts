type ClassT<T> = new (...ags: any[]) => T

function createClass<T extends ClassT<T>>(base: T) {
    return class extends base {

    }
}