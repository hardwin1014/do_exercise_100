/*
*  Object（只能以symbol和字符串类型作为key）   无序结构
*  数组  链表  map（key可以为所有类型） set      有序结构
*
*  链表：查询慢O(n),新增和删除快O(1)  离散存储    React Fiber渲染使用了链表
*  数组：查询快O(1),新增和删除慢O(n)  连续存储
* */

/*
* @description 反转单向链表
* 如何让nextNode不丢失
* */
export interface ILinkListNode{
    value: number,
    next?: ILinkListNode
}

/*
* 根据数组创建单向链表
* @param arr number arr
* */
export function createLinkList(arr: number[]): ILinkListNode {
    const length = arr.length
    if(length === 0) throw new Error('arr is empty')

    // 定义链表的结构
    let curNode: ILinkListNode = {
        value: arr[length - 1]
    }
    // 如果只有一个，那就返回他
    if(length === 1) return curNode

    // 不止一个,倒着遍历，-2是因为长度-1是最后一个，但是要从倒数第二个开始遍历，所以-2
    for(let i = length - 2;i >= 0; i--){
        curNode = {
            value: arr[i],
            next: curNode
        }
    }
    return curNode
}

/*
* 反转单向链表，并返回反转之后的head node
* @param listNode list head node
* */
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode{
    // 定义三个指针 也有可能是undefined
    let prevNode: ILinkListNode | undefined = undefined
    let curNode: ILinkListNode | undefined = undefined
    let nextNode: ILinkListNode | undefined = listNode

    // 以nextNode为主，遍历链表
    while (nextNode){
        // 第一个元素,前面没有值，next没办法指向前一个，所以删掉next，防止循环引用
        if(curNode && !prevNode){
            delete curNode.next
        }

        // 反转指针
        if(curNode && prevNode){
            curNode.next = prevNode
        }

        // 整体向后移动指针
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode?.next // ?.表示如果属性获取不到就返回undefined
    }

    // 最后的一个还没有指向前一个，补上
    // !. 当nextNode空时，此时curNode尚未设置next， 确信next有值
    curNode!.next = prevNode
    return curNode! // !表示确定是ILinkListNode ，不会是undefined
}

const arr = [100,200,300,400,500,600]
const list1 = createLinkList(arr)
console.log(list1)
const list2 = reverseLinkList(list1)
console.log(list2)
/*
{
    "value": 100,
    "next": {
    "value": 200,
        "next": {
        "value": 300,
            "next": {
            "value": 400,
                "next": {
                "value": 500,
                    "next": {
                    "value": 600
                }
            }
        }
    }
}
}*/
