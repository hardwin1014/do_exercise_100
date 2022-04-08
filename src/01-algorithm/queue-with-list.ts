/*
* @description 用链表实现队列
*
* */

interface IListNode{
    value: number,
    // next?: IListNode
    next: IListNode | null
}

export class MyQueue{
    private head: IListNode | null = null
    private tail: IListNode | null = null
    private len = 0

    /*
    * 入队  在tail入队
    * @param n number
    * */
    add(n: number){
        // 定义节点的模型
        const newNode: IListNode = {
            value: n,
            next:null
        }

        // 处理head
        if(this.head == null){
            this.head = newNode
        }

        // 处理tail
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

        return value
    }

    get length(): number{
        // lenth要单独存储，不能遍历链表来获取（否则复杂度太高O(n)）
      return this.len
    }
}

const q = new MyQueue()
q.add(100)
q.add(200)
q.add(300)
q.add(400)
console.info(q.length)
console.log(q.delete())
console.log(q.length)