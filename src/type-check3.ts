// 类型保护
// TypeScript能够在特定的区块中保证变量属于某种确定的类型
// 可以在此区块中放心地引用此类型的属性，或者调用此类型的方法
enum Type { Strong, Week }

class Java {
    helloJava() {
        console.log('hello Java')
    }
    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('hello JavaScript')
    }
    javascript: any
}

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    // if((lang as Java).helloJava) {
    //     (lang as Java).helloJava()
    // } else {
    //     (lang as JavaScript).helloJavaScript()
    // }
    // instanceof
    // if(lang instanceof Java) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }
    // in
    // if('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }
    // typeof
    // if(typeof x === 'string') {
    //     x.length
    // } else {
    //     x.toFixed(2)
    // }
    if(isJava(lang)){
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
    return lang
}

getLanguage(Type.Strong)
