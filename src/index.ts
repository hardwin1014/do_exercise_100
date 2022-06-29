// 基础算法
// import './01-algorithm/array-rotate'
// import './01-algorithm/match-bracket'
// import './01-algorithm/two-stacks-one-queue'
// import './01-algorithm/reverse-link-list'
// import './01-algorithm/queue-with-list'
// import './01-algorithm/binary-search'
// import './01-algorithm/two-numbers-sum'
// import './01-algorithm/binary-search-tree'
// import './01-algorithm/fibonacci'
// import './01-algorithm/move-zero'
// import './01-algorithm/continuous-char'
// import './01-algorithm/quick.sort'
// import './01-algorithm/palindrome-number'
// import './01-algorithm/thousands-format'
// import './01-algorithm/switch-letter-case'


/**
 * @description 如何实现高效的英文单词前缀匹配
 * 把全部的单词遍历成一个hash table逻辑结构
 * Object物理结构
 *
 * 考虑优化原始数据结构
 * 有明确范围的数据*（如26个英文字母）、考虑使用哈希表（对象）
 *
 * 如遍历数组,时间复杂度至少O(n)起步(n是数组长度)
 * 而改为树,时间复杂度降低到O(m)（m是单词的长度）
 * PS: 哈希表(对象)通过key查询，时间复杂度为O(1)
*/

// 手写系列
import './02-write-code/array-flatten'
