/**
 * @description 获取详细的数据类型 test
*/
import { getType } from "./get-type";
describe("获取详细的数据类型",() => {
    it('null', function () {
        expect(getType(null)).toBe('null')
    });
    it('undefined', function () {
        expect(getType(undefined)).toBe('undefined')
    });
    it('number', function () {
        expect(getType(100)).toBe('number')
        expect(getType(NaN)).toBe('number')
        expect(getType(Infinity)).toBe('number')
        expect(getType(-Infinity)).toBe('number')
    });
    it('string', function () {
        expect(getType('abc')).toBe('string')
    });
    it('boolean', function () {
        expect(getType(true)).toBe('boolean')
    });
    it('symbol', function () {
        expect(getType(Symbol())).toBe('symbol')
    });
    it('bigint', function () {
        expect(getType(BigInt(100))).toBe('bigint')
    });
    it('object', function () {
        expect(getType({})).toBe('object')
    });
    it('Array', function () {
        expect(getType([])).toBe('array')
    });
    it('function', function () {
        expect(getType(() => {})).toBe('function')
        expect(getType(class Foo{})).toBe('function')
    });
    it('map', function () {
        expect(getType(new Map())).toBe('map')
    });
    it('weakmap', function () {
        expect(getType(new WeakMap())).toBe('weakmap')
    });
    it('set', function () {
        expect(getType(new Set())).toBe('set')
    });
    it('weakset', function () {
        expect(getType(new WeakSet())).toBe('weakset')
    });
    it('date', function () {
        expect(getType(new Date())).toBe('date')
    });
    it('regexp', function () {
        expect(getType(new RegExp(''))).toBe('regexp')
    });
    it('error', function () {
        expect(getType(new Error())).toBe('error')
    });
    it('promise', function () {
        expect(getType(Promise.resolve())).toBe('promise')
    });
})
