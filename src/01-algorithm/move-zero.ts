/**
 * @description 将数组中的0移动到末尾
 * 必须在原数组进行操作
 */

/**
 * 传统思路
 * 遍历数组，遇0则push到数组末尾，用splice截取掉当前元素，时间复杂度为O(n^2)--算法不可用
 *
 * 数组是连续存储，要慎用splice unshift等api
 */
export function moveZero2(arr: number[]):void{
    const { length } = arr
    if(length===0) return
    let zeroLength = 0 // 记录当前有多少个0
    for(let i = 0; i < length - zeroLength;i++){
        // 因为0会被移动到最后，所以没必要遍历到末尾
        if(arr[i] === 0){
            arr.push(0)
            arr.splice(i, 1)// 本身就有O(n)
            i-- // 数组截取了一个元素，i要递减，否则连续0的就会有错误
            zeroLength++ // 累加0的长度
        }
    }
}

/**
 * @description  将数组中的0移动到末尾 原数组操作（双指针）
 * 定义j指向第一个0，i指向j后面的第一个非0
 * 交换ij的值，继续往后移动
 * 只遍历一次，所以时间复杂度是O(n)
 */
export function moveZero(arr: number[]):void{
    const { length } = arr
    if(length===0) return
    let i
    let j = -1 // 指向第一个0
    for (i = 0; i < length; i++) {
        if(arr[i] === 0) {
            // 定义j指向第一个0
            if (j < 0) {
                j = i
            }
        }
        // i 指向 j 后面的第一个非0
        if(arr[i] !== 0 && j >= 0){
            const n = arr[i]
            arr[i] = arr[j]
            arr[j] = n
            j++ // 往前挪一步
        }
    }
}

// 功能测试
// const arr = [0,3,4,5,0,0,0,11]
// moveZero(arr)
// console.log(arr)


// 性能测试
// const arr1 = []
// for(let i = 0; i < 20*10000;i++){
//     if(i%10===0){
//         arr1.push(0)
//     }else{
//         arr1.push(i)
//     }
// }
// console.time('moveZero1')
// moveZero(arr1) // moveZero1: 2.189697265625 ms
// console.timeEnd('moveZero1')
//
//
// const arr2 = []
// for(let i = 0; i < 20*10000;i++){
//     if(i%10===0){
//         arr2.push(0)
//     }else{
//         arr2.push(i)
//     }
// }
// console.time('moveZero2')
// moveZero2(arr2) // moveZero2: 230.848876953125 ms
// console.timeEnd('moveZero2')
