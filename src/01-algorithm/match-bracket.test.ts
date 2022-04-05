/*
* @description 括号匹配test
* toEqual判断对象和数组的
* toBe是判断Boolean的
* */
import {matchBracket} from "./match-bracket";

describe('括号匹配',() => {
    it('正常情况',() => {
        const str = '{aa[qq(aa)]}'
        const res = matchBracket(str)
        expect(res).toBe(true)
    })
    it('不匹配',() => {
        const str = '{aa[qq(aa)]]}'
        const res = matchBracket(str)
        expect(res).toBe(false)
    })
    it('顺序不一致',() => {
        const str = '{aa[qq(aa])}'
        const res = matchBracket(str)
        expect(res).toBe(false)
    })
    it('空字符串',() => {
        const str = ''
        const res = matchBracket(str)
        expect(res).toBe(true)
    })
})
