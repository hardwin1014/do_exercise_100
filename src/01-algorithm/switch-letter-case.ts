/**
 * @description 切换字母大小写
 * 使用正则表达式、性能较差
 * 使用ASCII码判断,性能较好---推荐答案
 *
*/
// 正则
export function switchLetterCase1(s: string): string {
    let res = ''
    const { length } = s
    if(length===0) return res

    const reg1 = /[a-z]/
    const reg2 = /[A-Z]/

    for (let i = 0;i < length; i++){
        const c = s[i] // 取出字符
        if(reg1.test(c)){
            res += c.toUpperCase()
        } else if(reg2.test(c)){
            res += c.toLowerCase()
        } else {
            res += c
        }
    }
    return res
}


/**
 * @description 切换字母大小写（ASCII编码）
*/
export function switchLetterCase2(s: string):string{
    let res = ''
    const { length } = s
    for(let i = 0;i < length; i++){
        // const code = s.charCodeAt(i)
        const c = s[i]
        const code = c.charCodeAt(0)

        // 大写
        if(code >= 65 && code <= 90){
            res += c.toLowerCase()
        } else if(code >= 97 && code <= 122){
            // 小写转大写
            res += c.toUpperCase()
        } else{
            res += c
        }
    }

    return res
}

// 功能测试
// const str = '100aBcD$#xYz'
// console.info(switchLetterCase1(str))


// 性能测试
const str = '100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz'
console.time('switchLetterCase1')
for(let i = 0; i < 10*10000;i++){
    switchLetterCase1(str)
}
console.timeEnd('switchLetterCase1')

console.time('switchLetterCase2')
for(let i = 0; i < 10*10000;i++){
    switchLetterCase2(str)
}
console.timeEnd('switchLetterCase2')

// switchLetterCase1: 2841.22998046875 ms
// switchLetterCase2: 973.230224609375 ms
