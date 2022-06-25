/**
 * @description 数字千分位格式化
*/
import { thousandsFormat1, thousandsFormat2 } from "./thousands-format";

describe('数字千分位格式化',() => {
    it('正常情况',() => {
        const n = 1201004050
        const res = thousandsFormat1(n)
        expect(res).toBe('1,201,004,050')
    })
    it('小于1000的情况',() => {
        expect(thousandsFormat1(100)).toBe('100')
        expect(thousandsFormat1(0)).toBe('0')
    })
})
