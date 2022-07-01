/**
 * @description 获取数据类型
*/

export function getType(x: any): string{
    const originType = Object.prototype.toString.call(x) // '[object String]'
    const spaceIndex = originType.indexOf(' ')
    const type = originType.slice(spaceIndex + 1, -1) // 'String'  -1表示最后一个字符，不包括end
    return type.toLowerCase() // string
}

// 功能测试
// console.info(getType(null))
// console.info(getType(undefined))
// console.info(getType(100))
// console.info(getType('abc'))
// console.info(getType(true))
// console.info(getType(Symbol()))
// console.info(getType({}))
// console.info(getType([]))
// console.info(getType(() => {}))
