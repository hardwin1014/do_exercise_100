/**
 * 旋转数组 K步 --使用pop和unshift
 * @params arr arr
 * @params k k
 * @returns arr
 * 思路1：时间复杂度O(n^2)，空间复杂度O(1)
 * 思路2：时间复杂度O(1),空间复杂度O(n)
 * 前端重时间，轻空间
*/
// 思路一，遍历数组删除最后的几个，添加到头部
export function rotate1(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length) // abs 取绝对值
    //  时间复杂度O(n^2)    空间O(1)
    // 数组的shift splice unshift 都是比较慢的 O(n)
    // pop push 是非常快的
    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        if (n != null) {
            arr.unshift(n) // 会导致整个数组的挪动，数组的一个连续的内存空间
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

    // 时间O(1)  空间O(n)
    const part1 = arr.slice(-step) // 从末尾开始
    const part2 = arr.slice(0, length - step)
    const part3 = part1.concat(part2)
    return part3
}

// 性能测试
// const arr1 = []
// for(let i = 0;i < 10*10000;i++){
//     arr1.push(i)
// }
// console.time('rotate1')
// rotate1(arr1, 9*10000)
// console.timeEnd('rotate1')
//
//
// const arr2 = []
// for(let i = 0; i < 10*10000;i++){
//     arr2.push(i)
// }
//
// console.time('rotate2')
// rotate2(arr2, 9*10000)
// console.timeEnd('rotate2')


// rotate1: 1017.874755859375 ms
// rotate2: 0.344970703125 ms
