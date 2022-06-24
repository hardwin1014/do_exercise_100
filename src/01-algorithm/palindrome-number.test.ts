/**
 * @description 对称数 test
*/
import { findPalindromeNumbers2,findPalindromeNumbers1,findPalindromeNumbers3 } from "./palindrome-number";
describe('对称数（回文）',() => {
    it('正常情况',() => {
        const numbers = findPalindromeNumbers3(200)
        expect(numbers.length).toBe(28)
    })

    it('max小于等于0',() => {
        const numbers = findPalindromeNumbers3(0)
        expect(numbers).toEqual([])
    })
})
