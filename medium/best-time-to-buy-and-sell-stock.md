
## 题目地址(121. 买卖股票的最佳时机)

https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

## 题目描述

```
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

 

示例 1：

输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。


示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。


 

提示：

1 <= prices.length <= 105
0 <= prices[i] <= 104
```

## 前置知识

- 

## 公司

- 暂无

## 思路
我们需要找出给定数组中两个数字之间的最大差值（即，最大利润）。此外，第二个数字（卖出价格）必须大于第一个数字（买入价格）。

形式上，对于每组 i 和 j （其中 j > i ）我们需要找出 max(prices[j] -prices[i]) 。

## 关键点

-  动态规划，边界问题

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxprices = 0, minprices = prices[0]
  for (let i = 1; i < prices.length; i++) {
    minprices = Math.min(prices[i], minprices)
    maxprices = Math.max(maxprices, prices[i] - minprices)
  }
  return maxprices
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


