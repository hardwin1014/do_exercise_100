import { flatten1, flatten2 } from "./array-flatten";
describe("扁平化数组",() => {
    it('空数组', function () {
        const res = flatten1([])
        expect(res).toEqual([])
    });
    it('非嵌套数组', function () {
        const arr = [1,2,3]
        const res = flatten1(arr)
        expect(res).toEqual([1,2,3])
    });
    it('一级嵌套', function () {
        const arr = [1,2,[10,20],3]
        const res = flatten1(arr)
        expect(res).toEqual([1,2,10,20,3])
    });
    it('二级嵌套',() => {
        const arr = [1,2,[10,[100,200],20],3]
        const res = flatten1(arr)
        expect(res).toEqual([1,2,10,[100,200],20,3])
    })
})
