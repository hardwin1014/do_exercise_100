/**
 * @description 斐波那契数列(递归)
 * 大量重复的计算,时间复杂度是O(2^n)
 */
function fibonacci(n: number):number{
    if(n <= 0) return 0
    if(n === 1) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

/**
 * 优化---不用递归，用循环，记录中间结果，时间复杂度为O(n)
 * @description 斐波那契数列 (循环优化版本)
 */
export function fibonacci2(n: number): number{
    if(n <= 0) return 0
    if(n === 1) return 1

    let n1 = 1 // 记录n-1的结果
    let n2 = 0 // 记录n-2的结果
    let res = 0 // 和
    for(let i = 2; i <= n;i++){
        res = n1 + n2

        // 记录中间结果
        n2 = n1
        n1 = res
    }
    return res
}

/**
 * @description 动态规划 ( 自底向上求解 )
 * 把大问题拆解成多个小问题，逐级向下拆解
 * 使用递归的思路分析问题，再改为循环来实现
 * 算法三大思维: 贪心，二分，动态规划
 *
 * 青蛙跳台阶
 * f(n) = f(n-1)+f(n-2)
 */

// 功能测试
console.time('fibonacci')
console.log(fibonacci2(15))
console.timeEnd('fibonacci')
