/**
 * @description 连续字符 test
 */
import { findContinuousChar1, findContinuousChar2 } from "./continuous-char";
describe('连续字符和长度',() => {
    it('正常情况',() => {
        const str =  'aaabbbbqqqqqbsdsadsadbbassfdsfereeeee'
        const res = findContinuousChar2(str)
        expect(res).toEqual({ char: 'q', length: 5 })
    });
    it('空字符串',() => {
        const res = findContinuousChar2('')
        expect(res).toEqual({ char: '', length: 0 })
    });
    it('无连续字符',() => {
        const str =  'abc'
        const res = findContinuousChar2(str)
        expect(res).toEqual({ char: 'a', length: 1 })
    });
    it('全部都是连续字符',() => {
        const str =  'aaaa'
        const res = findContinuousChar2(str)
        expect(res).toEqual({ char: 'a', length: 4 })
    });
})
