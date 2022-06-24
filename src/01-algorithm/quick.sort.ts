/**
 * @description 快速排序
 * 找到中间位置midValue
 * 遍历数组，小于midValue放在left, 否则放在right
 * 继续递归、最后将左右和midValue一起concat拼接，返回
 *
 *
 * 细节
 * 获取midValue的两种方式
 * splice()会修改原数组
 * 使用slice(),不会修改原数组--更加推荐
 *
 *
 * 有遍历、有二分----O(n * logn) 或者O(nlogn)
 *
 *
 * splic和slice没有区分出来
 * 算法本身的时间复杂度就够高O(n*logn)
 * 另外，splice是逐步二分之后执行的，二分会快速削减数量级
 *
 *
 * 常见排序算法
 * 有二分，时间复杂度就包含O(logn)
 * 注意数组操作, splice和slice
*/


/**
 * @description 快速排序（splice）
 * @params arr number arr
*/
export function quickSort(arr: number[]): number[] {
    const { length } = arr
    if(length === 0) return arr

    const midIndex = Math.floor(length/2)
    const midValue = arr.splice(midIndex, 1)[0] // splice返回的是一个数组

    const left: number[] = []
    const right: number[] = []

    // O(n*logn)
    // 此时不能使用length,因为arr已经被splice修改了
    for(let i = 0; i < arr.length; i++){
        const n = arr[i]
        if(n < midValue){
            // 小于midValue，则放在left
            left.push(n)
        } else{
            right.push(n)
        }
    }
    // 只是放了一些数据，还是散乱的，递归
    return quickSort(left).concat(
        [midValue],
        quickSort(right)
    )
}


/**
 * @description 快速排序（slice）
 * @params arr number arr
 */
export function quickSort2(arr: number[]): number[] {
    const { length } = arr
    if(length === 0) return arr

    const midIndex = Math.floor(length/2)
    const midValue = arr.slice(midIndex, midIndex + 1)[0] // splice返回的是一个数组

    const left: number[] = []
    const right: number[] = []

    for(let i = 0; i < length; i++){
        // 只对midIndex和midValue以外的东西操作
        if(i !== midIndex){
            const n = arr[i]
            if(n < midValue){
                // 小于midValue，则放在left
                left.push(n)
            } else{
                right.push(n)
            }
        }
    }
    // 只是放了一些数据，还是散乱的，递归
    return quickSort2(left).concat(
        [midValue],
        quickSort2(right)
    )
}

// 功能测试
// const arr = [2,3,1,2,34,5,6,43,32,18]
// console.log(quickSort2(arr))

// 性能测试
const arr1 = []
for(let i = 0; i < 10 * 10000;i++){
    arr1.push(Math.floor(Math.random() * 1000))
}
console.time('quickSort')
quickSort(arr1)
console.timeEnd('quickSort') // 64ms

console.time('quickSort2')
quickSort2(arr1)
console.timeEnd('quickSort2')// 73ms
