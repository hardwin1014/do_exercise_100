/*
* @description 用链表实现队列
*从末尾进，头出
* */

interface IListNode{
    value: number,
    // next?: IListNode 或者
    next: IListNode | null
}

export class MyQueue {
    // 定义头尾和长度
    private head: IListNode | null = null
    private tail: IListNode | null = null
    private len = 0 // length单独存储

    /*
    * 入队  在tail入队 从head出队
    * @param n number
    * */
    add(n: number){
        // 定义链表的节点的形式
        const newNode: IListNode = {
            value: n,
            next:null
        }

        // 处理head
        if(this.head == null){
            this.head = newNode
        }

        // 处理tail，保存最后的节点，
        const tailNode = this.tail
        if(tailNode){
            // 如果最后一个节点有值，就指向新的节点
            tailNode.next = newNode
        }
        // 把当前的tail断开，指向newNode
        this.tail = newNode

        // 记录长度
        this.len ++
    }

    // head 出队, 正常删除是number，删除，没了就是null
    delete(): number | null{
        const headNode = this.tail
        if(headNode == null) return null
        if(this.len <= 0) return null

        // 取值
        const value = headNode.value

        // 处理head
        this.head = headNode.next

        // 记录长度
        this.len --

        // 返回删除的值
        return value
    }

    get length(): number{
        // lenth要单独存储，不能遍历链表来获取（否则复杂度太高O(n)）
      return this.len
    }
}

// 功能测试

// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// q.add(400)
// console.info(q.length)
// console.log(q.delete())
// console.log(q.length)

// 性能测试
const q1 = new MyQueue()
console.time('queue with list')
for(let i = 0; i < 10*10000; i++){
    q1.add(i)
}
for(let i = 0; i < 10*10000;i++){
    q1.delete()
}
console.timeEnd('quque with list')

const q2 = []

console.time('queue with arr')
for(let i = 0; i < 10*10000; i++){
    q2.push(i)
}
for(let i = 0; i < 10*10000;i++){
    q2.shift()
}
console.timeEnd('quque with arr')
