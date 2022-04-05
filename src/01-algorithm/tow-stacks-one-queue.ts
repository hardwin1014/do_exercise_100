/*
* @description 两个栈-一个队列
*
* 时间复杂度add O(1)  delete O(n)
* 空间复杂度，整体是O(n)
* */

export class MyQueue{
    private stack1: number[] = []
    private stack2: number[] = []

    /*
    * 入队
    * @param n n
    * */
    add(n: number){
      this.stack1.push(n)
    }

    /*
    * 出队
    * */
    delete(): number | null{
        let res
        const stack1 = this.stack1
        const stack2 = this.stack2
        // 将stack1所有元素移动到stack2中
        while(stack1.length){
            const n = stack1.pop()
            if(n!=null){
                stack2.push(n)
            }
        }
        // stack2 pop
        res = stack2.pop()

        // 将stack2所有元素还给stack1
        while (stack2.length){
            const n = stack2.pop()
            if(n!=null){
                stack1.push(n)
            }
        }
        return res || null
    }

    // 属性
    get length(): number{
      return this.stack1.length
    }
}
// 功能测试
const q = new MyQueue()
q.add(111)
q.add(2)
q.add(3)
q.add(4)
console.info(q.length)
console.log(q.delete())
console.info(q.length)
