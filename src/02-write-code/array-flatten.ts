/**
 * @description 数组扁平化
 * 使用push
*/
export function flatten1(arr: any[]): any[]{
    let res: any[] = []
    arr.forEach(item => {
        if(Array.isArray(item)){
            item.forEach(n => res.push(n))
        }else {
            res.push(item)
        }
    })
    return res
}
/**
 * @description 数组扁平化，使用concat
*/
export function flatten2(arr: any[]): any[]{
    let res: any[] = []
    arr.forEach(item => {
        // 如果不是数组，会添加到里面，如果是数组，会添加到里面
        res = res.concat(item)
    })
    return res
}

// 功能测试
const arr =[1,2,3,[5,6,9,8,4]]
// const res = flatten1(arr)
const res = flatten1(arr)
console.log(res)
