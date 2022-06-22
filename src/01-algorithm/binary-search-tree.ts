/**
* @description 二叉搜索树
 * 二叉树的三种遍历（前 中 后）是根的前中后
 * 二叉搜索树的特点： left<= root; right>=root
 * 二叉搜索树的价值：可使用二分法进行快速查找
 *
 *
 * 说到底还是为了性能
 * 数组：查找快，增删慢
 * 链表：查找慢，增删快
 * 二叉搜索树BST: 查找快，增删快--木桶效应
 *
 * BST如果不平衡，那就成链表了
 * 所以要尽量平衡：平衡二叉搜索树BBST
 *
 *
 * 红黑树是一种自平衡二叉树
 * 分为红、黑两种颜色，通过颜色转换来维持树的平衡
 * 相对于普通平衡二叉树，它维持平衡的效率更高
 *
 *
 * B树
 * 物理上是多叉树，但是逻辑上是二叉树
* */

/**
 * 堆和二叉树的区别
 * 堆的物理结构是数组，逻辑结构是二叉树
 *
 * 查询比BST慢
 * 增删比BST快，维持平衡更快
 * 但是整体的时间复杂度都在O(logn)级别,即树的高度
 *
 * 堆可以用数组表示，(从小到大)
 * const heap = [-1, 10, 14, 25, 33, 81, 82, 99] // 忽略0节点
 *
 * 节点关系
 * const parentIndex = Math.floor(i/2)
 * const leftIndex = 2 * i
 * const rightIndex = 2 * i + 1
 *
 *
 * 堆的使用场景
 * 特别适合“堆栈模型”
 * 堆的数据，都是在栈中引用的，不需要从root遍历
 * 堆恰巧是数组形式，根据栈的地址,可用O(1)找到目标
 */


export interface ITreeNode{
    value: number,
    left: ITreeNode | null
    right: ITreeNode | null
}

const arr: number[] = []

/**
* @description 二叉树前序遍历  根  左  右
* */
function preOrderTraverse(node: ITreeNode | null){
    if(node === null) return
    // console.log(node.value)
    arr.push(node.value)
    preOrderTraverse(node.left)
    preOrderTraverse(node.right)
}

/**
* @description 二叉树中序遍历  左  根  右
 * 得到的结果就是排序好的
* */
function inOrderTraverse(node: ITreeNode | null){
    if(node === null) return
    inOrderTraverse(node.left)
    // console.log(node.value)
    arr.push(node.value)
    inOrderTraverse(node.right)
}

/**
* @description 二叉树后续遍历  左  右  根
* */
function postOrderTraverse(node: ITreeNode | null){
    if(node === null) return
    postOrderTraverse(node.left)
    postOrderTraverse(node.right)
    // console.log(node.value)
    arr.push(node.value)
}

/**
* @description 寻找BST里的第K小值
* @param node tree node
* @params k 第几个值
* */
export function getKthValue(node: ITreeNode,k: number):number | null{
    // 中序遍历取的就是排好序的结果
    inOrderTraverse(node)
    return arr[k] || null
}


const bst: ITreeNode = {
    value: 5,
    left: {
        value:3,
        left:{
            value:2,
            left:null,
            right: null
        },
        right:{
            value: 4,
            left: null,
            right: null
        }
    },
    right:{
        value:7,
        left:{
            value:6,
            left: null,
            right: null
        },
        right:{
            value:8,
            left: null,
            right:null
        }
    }
}
// preOrderTraverse(bst)
// inOrderTraverse(bst)
// postOrderTraverse(bst)
console.log(getKthValue(bst,3))
