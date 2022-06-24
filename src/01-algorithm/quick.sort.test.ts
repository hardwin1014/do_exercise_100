/**
 * @description 快速排序 test
 * @date
 * @private
 * @param
 * @return {*}
*/
import { quickSort2, quickSort } from "./quick.sort";
describe('快速排序',() => {
    it('正常情况',() => {
        const arr = [2,3,1,2,34,5,6,43,32,18]
        const res = quickSort2(arr)
        expect(res).toEqual([1, 2, 2, 3, 5, 6, 18, 32, 34, 43])
    })
    it('有负数',() => {
        const arr = [-2,-1,-3,-51,1]
        const res = quickSort2(arr)
        expect(res).toEqual([-51,-3,-2,-1,1])
    })
    it('数组元素都一样',() => {
        const arr = [1,1,1,1,1]
        const res = quickSort2(arr)
        expect(res).toEqual([1,1,1,1,1])
    })
    it('空数组',() => {
        const arr: number[] = []
        const res = quickSort2(arr)
        expect(res).toEqual([])
    })
})
