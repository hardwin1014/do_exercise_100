/**
 * @description 求1-10000之间的所有对称数（回文）
 * 思路1 看似O(n)但数组转换，操作都需要时间，所以慢
 * 思路2、思路3 操作数字更快、（电脑原型就是计算器）
 * 思路2 要用栈，不合适，因为栈也一般用数组实现、会慢
 *
 *
 * 尽量不要转换数据结构、尤其数组这种有序结构
 * 尽量不要用内置API, 茹reverse、不好识别复杂度
 * 数字操作最快、其次是字符串
*/


/**
 * @description 求1-10000之间的所有对称数（回文）数组翻转
 * 思路1
 * 使用数组翻转、比较
 * 数字转换为字符串、再转换为数组
 * 数组reverse，再join为字符串
 * 前后字符串进行比较
*/
export function findPalindromeNumbers1(max: number):number[] {
    const res: number[] = []
    if(max <= 0 ) return res

    for(let i = 1;i < max; i++){
        const s = i.toString()
        // 转换成字符串、转换为数组、再翻转、比较
        if(s === s.split('').reverse().join('')){
            res.push(i)
        }
    }
    return res
}


/**
 * @description 字符串头尾比较
 * 数字转换为字符串
 * 字符串头尾字符比较
 * 也可以用栈、像括号匹配、但要注意奇偶数
 * @date
*/
export function findPalindromeNumbers2(max: number):number[]{
    const res: number[] = []
    if(max < 0) return res

    for (let i = 1; i <= max; i++){
        const s = i.toString()
        const { length } = s

        // 字符串头尾比较
        let flag = true // 记录是否是回文，偶数奇数
        let startIndex = 0 // 字符串开始
        let endIndex = length - 1 // 字符串结束

        while (startIndex < endIndex){
            // 先把第一个字符和倒数第一个字符进行比较，如果不相等那么这个数字就不是回文
            if(s[startIndex] !== s[endIndex]){
                flag = false
                break
            } else {
                // 继续比较
                startIndex++
                endIndex--
            }
        }
        // 如果是回文数，就push到res里面
        if(flag) res.push(i)
    }
    return res
}
/**
 * @description 生成翻转数
 * 使用 % 和Math.floor生成翻转数
 * 前后数字进行对比
 * （全程操作数字，没有字符串类型）
*/
export function findPalindromeNumbers3(max: number): number[]{
    const res: number[] = []
    if(max <= 0) return res

    for (let i = 1;i <= max; i++){
        let n = i
        let rev = 0 // 存储翻转数

        // i: 123
        // n: 123

        // 生成翻转数
        while (n > 0){
            rev = rev * 10 + n % 10 // rev: 3 2 1
            n = Math.floor(n / 10) // n: 0
        }

        if(i === rev) res.push(i)
    }
    return res
}
// 功能测试
// console.info(findPalindromeNumbers3(200))

// 性能测试
console.time('findPalindromeNumbers1')
findPalindromeNumbers1(100*10000)
console.timeEnd('findPalindromeNumbers1') // 300

console.time('findPalindromeNumbers2')
findPalindromeNumbers2(100*10000)
console.timeEnd('findPalindromeNumbers2') // 44

console.time('findPalindromeNumbers3')
findPalindromeNumbers2(100*10000)
console.timeEnd('findPalindromeNumbers3') // 41
