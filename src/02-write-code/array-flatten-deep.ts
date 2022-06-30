/**
 * @description 数组深度扁平化 push
*/

// 高质量代码的特点：编码规范性、功能完整性、鲁棒性

export function flattenDeep1(arr: any[]): any[]{
    const res: any[] = []
    arr.forEach(item => {
        if(Array.isArray(item)){
            let flatItem = flattenDeep1(item)
            flatItem.forEach(n => res.push(n))
        }else {
            res.push(item)
        }
    })
    return res
}

/**
 * @description 数组深度扁平化 使用concat
 * @param arr arr
*/
export function flattenDeep2(arr: any[]): any[]{
    let res: any[] = [];
    arr.forEach(item => {
        if(Array.isArray(item)){
            const flatItem = flattenDeep2(item)
            res = res.concat(flatItem)
        } else {
          res = res.concat(item)
        }
    })
    return res;
}

// 功能测试
const arr = [1,[2,3,5,[6,6,97,1]],25]

// const res = flattenDeep1(arr)
const res = flattenDeep2(arr)
console.log(res)
