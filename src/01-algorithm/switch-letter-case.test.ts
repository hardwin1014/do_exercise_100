/**
 * @description 切换字母大小写test
*/

import { switchLetterCase1, switchLetterCase2} from "./switch-letter-case";

describe('切换字母大小写',() => {
    it('正常情况',() => {
        const str = '100aBcD$#xYz'
        const res = switchLetterCase2(str)
        expect(res).toBe('100AbCd$#XyZ')
    })

    it('空字符串',() => {
        const res = switchLetterCase2('')
        expect(res).toBe('')
    })

    it('非字母',() => {
        const res = switchLetterCase2('1000&&%早上好')
        expect(res).toBe('1000&&%早上好')
    })
})
