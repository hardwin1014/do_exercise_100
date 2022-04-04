// 思路一，遍历数组删除最后的几个，添加到头部
/**
 * 旋转数组 K步 --使用pop和unshift
 * @params arr arr
 * @params k k
 * @returns arr
*/
export function rotate1(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length) // abs 取绝对值
    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        if (n != null) {
            arr.unshift(n)
        }
    }
    return arr
}

// 功能测试
// const arr = [1, 2, 3, 6, 54, 8, 9, 6]
// const arr1 = rotate1(arr, 3)
// const arr2 = rotate1(arr, 3)
// console.log(arr1);
// console.log(arr2);

// 思路二
export function rotate2(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length) // abs 取绝对值

    const part1 = arr.slice(-step) // 从末尾开始
    const part2 = arr.slice(0, length - step)
    const part3 = part1.concat(part2)
    return part3
}
