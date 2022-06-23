/**
 * @description 求连续最多的字符和次数
 * 注意实际复杂度，不要被代码表面迷惑
 * 双指针常用于解决嵌套循环
 */

interface IRes{
    char: string,
    length: number
}

/**
 * @description 求连续最多的字符和次数  嵌套循环，使用跳步  O(n)
 * 在内层循环循环到不同字符的时候，将外层循环指向不同字符开始循环
 */
export function findContinuousChar1(str: string): IRes{
    const res = {
        char: '',
        length: 0
    }
    const { length } = str
    if(length === 0) return res

    let tempLength = 0 // 临时记录当前连续字符的长度

    for(let i = 0; i < length; i++){
        tempLength = 0 // 重置

        for(let j = i; j < length; j++){
            // 在内层循环跑一趟，如果值和外层循环相同，则累加
            if(str[i] === str[j]){
                tempLength++
            }

            // 不同或者到头的情况下，如果临时存储的变量大于，上一个字符的长度，则替换字符和长度
            if(str[i] !== str[j] || j === length - 1){
                if(tempLength > res.length){
                    res.char = str[i]
                    res.length = tempLength
                }

                // 在切换不同字符的时候，外层进行跳步
                if(i < length -1){
                    i = j - 1 // 跳到下一个不相同的字符
                }

                // j break掉，i继续循环
                break
            }
        }
    }
    return res
}

/**
 * @description 求连续最多的字符和次数
 * 双指针
 * 定义指针 i 和 j,j 不动, i继续移动
 * 如果i 和 j的值一直相等,则 i 继续移动
 * 直到i 和 j 的值不相等，记录处理, 让 j 追上 i。继续第一步
 */

export function findContinuousChar2(str: string): IRes {
    const res = {
        char: '',
        length: 0
    }
    const { length } = str
    if(length === 0) return res

    let tempLength = 0 // 临时记录当前连续字符的长度

    let i = 0,j = 0 // i是一直往前跑的, j是做为对比值的
    for (;i < length; i++){
        // 如果相等就累加长度
        if(str[i] === str[j]){
            tempLength++
        }

        // 两个指针指向的字符不相等 或者到了最后一个字符,就要做处理
        if(str[i] !== str[j] || i === length - 1){
            // 如果比上一个存储的长度大的话，那就赋值最大的
            if(tempLength > res.length){
                res.char = str[j]
                res.length = tempLength
            }
            tempLength = 0 // 因为字符不相等, 不能一直累加,所以在交换完之后要重置

            // 字符不相等，交换完之后, 没有到末尾的情况
            if(i < length - 1){
                j = i // 就让 j 追上 i
                i-- // 细节 上面有i++,为什么防止错开,这里要减去
            }
        }
    }

    return res
}
// 功能测试
// const str =  'aaabbbbqqqqqbsdsadsadbbassfdsfereeeee'
// console.info(findContinuousChar2(str))

// 性能测试
// let str = ''
// for(let i = 0; i < 100*10000;i++){
//     str += i.toString()
// }
// console.time('findContinuousChar1')
// findContinuousChar1(str)
// console.timeEnd('findContinuousChar1')
//
//
// console.time('findContinuousChar2')
// findContinuousChar2(str)
// console.timeEnd('findContinuousChar2')
