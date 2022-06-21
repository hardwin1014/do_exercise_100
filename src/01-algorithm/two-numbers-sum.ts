/**
 * @description  两数之和
 * @return {*}
*/


/**
 * @description 寻找和为 n 的两个数(嵌套循环) O(n^2)
 * @return {*}
*/
export function findTwoNumbers1(arr: number[],n: number): number[]{
    const res: number[] = []
    const { length } = arr
    if(length===0)return res

    for(let i = 0;i<length-1;i++){
        const n1 = arr[i]
        let flag = false // 是否得到了结果
        // O(n^2)
        for(let j = i + 1;j<length;j++){
            const n2 = arr[j]
            if(n1+n2===n){
                res.push(n1)
                res.push(n2)
                flag = true
                break
            }
        }
        if(flag) break
    }

  return res
}

/**
 * @description 查找和为n的两个数(双指针)  O(n)
 * @date
 * @private
 * @param
 * @return {*}
*/
export function findTwoNumbers2(arr: number[],n: number):number[]{
    const res: number[] = []
    const { length } = arr
    if(length===0) return res

    let i = 0,j=length-1
    while(i<j){
        const n1 = arr[i]
        const n2 = arr[j]
        const sum = n1+n2
        if(sum>n){
            // sum大于n,则j要向前移动
            j--
        }else if(sum < n){
            // sum小于n,则i要向后移动
            i++
        } else{
            // 相等
            res.push(n1)
            res.push(n2)
            break
        }
    }
    return res
}

// 功能测试
const arr = [1,2,4,7,11,15,1,2,4,7,11,15,1,2,4,7,11,15,1,2,4,7,11,15,1,2,4,7,11,151,2,4,7,11,15,1,2,4,7,11,15,1,2,4,7,11,15,1,2,4,7,11,15]
// console.info(findTwoNumbers2(arr,15))

console.time('findTwoNumbers1')
for (let i=0;i<100*10000;i++){
    findTwoNumbers1(arr, 15)
}
console.timeEnd('findTwoNumbers1')

console.time('findTwoNumbers2')
for (let i=0;i<100*10000;i++){
    findTwoNumbers2(arr, 15)
}
console.timeEnd('findTwoNumbers2')

// 时间复杂度达到O(n^2),是不可用的算法
// 凡是有序, 必二分
// 优化嵌套循环，可以考虑"双指针"
