/**
 * @description 移动0到数组末尾 test
 */
import {moveZero} from "./move-zero";

describe('移动0到数组末尾',() =>{
    it('正常情况+连续0的情况',() => {
        const arr = [1,3,0,1,5,0,4,0,0,0,33]
        moveZero(arr)
        expect(arr).toEqual([1,3,1,5,4,33,0,0,0,0,0])
    })
    it('没有0的情况', () => {
      const arr = [1,3,54,66]
        moveZero(arr)
        expect(arr).toEqual([1,3,54,66])
    });
    it('全是0',() => {
        const arr = [0,0,0,0,0,0]
        moveZero(arr)
        expect(arr).toEqual([0,0,0,0,0,0])
    })
})
