/**
 * @description: 二分查找的两种实现
 */

/**
 * 二分查找(循环)
 * @param arr
 * @param target
 */
export function binarySearch1(arr: number[], target: number): number {
	const { length } = arr;
	if (length === 0) return -1;

	let startIndex = 0; // 开始位置
	let endIndex = length - 1; // 结束位置

	// 左边值和右边值没相交就一直循环
	while (startIndex <= endIndex) {
		// 找到中间值
		const midIndex = Math.floor((startIndex + endIndex) / 2);
		const midValue = arr[midIndex];
		if (target < midValue) {
			// 目标值较小，则在左侧查找
			// 防止和上一个中间值下标重复
			endIndex = midIndex - 1;
		} else if (target > midValue) {
			// 目标值较大，则在右侧查找
			startIndex = midIndex + 1;
		} else {
			// 相等返回
			return midIndex;
		}
	}

	// 找不到返回-1
	return -1;
}

/**
 * @description: 二分查找(递归)
 * @param {number} arr
 * @param {number} target
 * @param {number} startIndex
 * @param {number} endIndex
 * @return {*}
 */
export function binarySearch2(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
	let { length } = arr;
	if (length === 0) return -1;

	// 开始和结束的范围
	if (startIndex == null) startIndex = 0;
	if (endIndex == null) endIndex = length - 1;

	// 如果start大于end的时候，则结束
	if (startIndex > endIndex) return -1;

	// 中间位置
	const midIndex = Math.floor((startIndex + endIndex) / 2);
	const midValue = arr[midIndex];

	if (target < midValue) {
		// 目标值较小， 则继续在左侧查找
		return binarySearch2(arr, target, startIndex, midIndex - 1);
	} else if (target > midValue) {
		// 目标值较大，则继续在右侧查找
		return binarySearch2(arr, target, midIndex + 1, endIndex);
	} else {
		// 相等返回下标
		return midIndex;
	}
}


// 功能测试
const arr = [ 10, 20, 30, 40, 50, 60, 70,80,90,100,110,120];
const target = 10;
console.log(binarySearch2(arr, target));


// 递归和循环
// 数量级 复杂度O(logn)
/**
 * 递归-代码逻辑更加清晰
 * 非递归-性能更好
 * 时间复杂度O(logn) -非常快
 *
 * 凡有序，必二分！！！
 * 凡二分，时间复杂度必包含O(logn)
 * */

// 性能测试
console.time('binarySearch1')
for(let i = 0; i< 100*10000;i++){
	binarySearch1(arr,target)
}
console.timeEnd('binarySearch1')


console.time('binarySearch2')
for(let i = 0; i< 100*10000;i++){
	binarySearch2(arr,target)
}
console.timeEnd('binarySearch2')


/*
binarySearch1: 14.26904296875 ms
binarySearch2: 25.300048828125 ms
* */
