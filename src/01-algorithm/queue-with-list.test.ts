/*
* @description 链表实现队列 test
* */
import { MyQueue } from "./queue-with-list";
describe('链表实现队列',() => {
    it('add and length',() => {
        const q = new MyQueue()
        expect(q.length).toBe(0)
        q.add(100)
        q.add(200)
        q.add(300)
        q.add(400)
        expect(q.length).toBe(4)
    })
    it('delete',() => {
        const q = new MyQueue()
        expect(q.delete()).toBeNull()
        q.add(200)
        q.add(100)
        q.add(300)
        expect(q.delete()).toBe(300)
    })
})