/*
* @description 括号匹配
* @author coderwxh
*
* 性能分析：时间(n) 空间O(n)
*
* 栈是逻辑结构, 数组是物理结构
* */

/*
* 判断左右括号是否匹配
* @param left 左括号
* @param right 右括号
* */
function isMatch(left: string, right: string):boolean {
    if(left === '{' && right === '}') return true
    if(left === '[' && right === ']') return true
    if(left === '(' && right === ')') return true
    return false
}


/*
* 判断是否括号匹配
* @param str str
* */
export function matchBracket(str: string):boolean{
    const length = str.length
    if(length === 0) return true

    const stack = []

    // 因为是固定的，和输入的没有关系，所以includes不能为O(n)
    const leftSymbols = '{[('
    const rightSymbols = '}])'
    for(let i = 0; i < length;i++){
      const s = str[i]
        if(leftSymbols.includes(s)){
            // 压栈 左括号
            stack.push(s)
        }else if(rightSymbols.includes(s)){
            // 右括号
            const top = stack[stack.length - 1]
            if(isMatch(top,s)){
                stack.pop()
            } else{
                return false
            }
        }
    }
    return stack.length === 0
}
// 功能测试
// const str = '{a[ba(qqq)]}'
// console.log(123,matchBracket(str))
