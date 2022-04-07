/*
* @description 反转单向链表
*
* */
interface ILinkListNode{
    value: number,
    next?: ILinkListNode
}

/*
* 根据数组创建单向链表
* @param arr number arr
* */
function createLinkList(arr: number[]):ILinkListNode {
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


const arr = [100,200,300,400,500,600]
console.log(createLinkList(arr))
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
