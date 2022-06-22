/**
 * @description 斐波那契数列 test
 */
import { fibonacci2 } from "./fibonacci";
describe('斐波那契数列',() => {
    it('0和1',() => {
        expect(fibonacci2(0)).toBe(0)
        expect(fibonacci2(1)).toBe(1)
    })
    it('正常情况',  () => {
        expect(fibonacci2(9)).toBe(34)
        expect(fibonacci2(15)).toBe(610)
    });
    it('n 小于 0', () => {
        expect(fibonacci2(-10)).toBe(0)
    });
})
