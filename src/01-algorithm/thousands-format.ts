/**
 * @description 千分位格式化
 * 将数组千分位格式化，输出字符串
 * 输入数字12050100，输出12,050,100
 * 注意逆序判断
 *
 *
 * 思路：转换为数组，reverse 每三分为拆分
 * 使用字符串拆分
 * 使用正则表达式
 *
 * 性能分析
 * 使用数组,转换影响性能
 * 使用正则表达式，性能较差
 * 使用字符串、性能较好---推荐答案
 *
 * 顺序从尾到头
 * 尽量不要转换数据结构
 * 慎用正则
*/
/**
 * @description 千分位格式化（使用数组）
*/

export function thousandsFormat1(n: number): string {
    n = Math.floor(n) // 只考虑整数

    const s = n.toString()
    const arr = s.split('').reverse()
    return arr.reduce((prev,val,index) => {
        // 每隔三位，使用逗号分割一下
        if(index % 3 === 0){
            if(prev){
                return val + ',' + prev
            } else {
                return val
            }
        } else {
            return val + prev
        }
    },'')
}


/**
 * @description 数字千分位格式化（字符串分析）
*/
export function thousandsFormat2(n: number):string{
    n = Math.floor(n) // 只考虑整数

    let res = ''
    const s = n.toString()
    const { length } = s

    // '10200300' length = 8
    // i = 7
    for(let i = length - 1; i >= 0; i--){
       const j = length - i
       if(j % 3 === 0){
             if(i === 0){
                 res = s[i] + res
             } else{
                 res = ',' + s[i] + res
             }
       } else {
           res = s[i] + res
       }
    }

    return res
}
const n = 1201004050
console.log(thousandsFormat2(n))
