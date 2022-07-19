/**
 * @description  实现new
 * @date
 * @private
 * @param
 * @return {*}
*/

/*
* new 一个对象的过程
*
* 创建一个空对象obj, 集成构造函数的原型
*
* 执行构造函数（将obj作为this）
*
* 返回obj
* */

export function customNew<T>(constructor: Function, ...args: any[]): T{
    // 创建一个空对象，继承constructor的原型
    const obj = Object.create(constructor.prototype)

    // 将obj作为this，执行constructor，传入参数
    constructor.apply(obj, args)

    // 返回obj
    return obj
}

class Foo{
    name: string
    city: string
    constructor(name: string) {
        this.name = name;
        this.city = "上海"
    }

    getName() {
        return this.name
    }
}

// function Foo(name: string){
//     this.name = name
//     this.city = "上海"
// }
// Foo.prototype.getName = function() { return this.name }


// const f = new Foo("coderwxh")
// 自己实现new，关键字就没有了
const f = customNew<Foo>(Foo,"coderwxh")
console.info(f)
console.log(f.getName())
