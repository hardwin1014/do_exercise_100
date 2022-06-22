import {ITreeNode, getKthValue} from "./binary-search-tree";

/**
 * @description 二叉搜索树 test
 */

describe('二叉搜索树',() => {
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
    it('正常情况',() => {
        const res = getKthValue(bst,3)
        expect(res).toBe(5)
    })

    it('k 不在正常范围之内',() => {
        const res1 = getKthValue(bst,-11)
        expect(res1).toBeNull()

        const res2 = getKthValue(bst,1000)
        expect(res2).toBeNull()
    })
})
