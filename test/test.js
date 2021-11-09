// const s = "loveleetcode";

// const c = "e";

// var shortestToChar = function (s, c) {
//   let res = Array(s.length).fill(0);

//   for (let i = 0; i < s.length; i++) {
//     // 如果当前位置是目标字符就跳出
//     if (s[i] === c) continue;
//     // 分别向左、右两个方向寻找目标字符 C，取最短距离
//     let left = i,
//       right = i,
//       shortest = Infinity;

//     while (left >= 0) {
//       if (s[left] === c) {
//         shortest = Math.min(shortest, i - left);
//         break;
//       }
//       left--;
//     }

//     while (right < s.length) {
//       if (s[right] === c) {
//         shortest = Math.min(shortest, right - i);
//         break;
//       }
//       right++;
//     }
//     res[i] = shortest;
//   }
//   return res;
// };

// console.log(shortestToChar(s, c), "---c----");

/**
 *
 * @param {*} arr
 * @returns
 */
// function reverseArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     console.log(left, right, '---right---');
//     let temp = arr[left];
//     arr[left++] = arr[right];
//     arr[right--] = temp;
//   }
//   return arr;
// }

// var a = reverseArray([1,3,4,7,6,2])

// function yuesefu(n, num) {
//   const arr = Array.from({ length: n }, (v, i) => i + 1);

//   // 留下约瑟夫和他的朋友俩活口
//   for (let i = 0; arr.length > 2; i++) {
//     for (let j = 1; j < num; j++) {
//       if (i >= arr.length) {
//         i = 0;
//       }
//       i = i + 1 < arr.length ? i + 1 : 0;
//       if (j === num - 1) {
//         // 自杀一个后当前指针也得-1
//         arr.splice(i, 1);
//         i--;
//       }
//     }
//   }
//   return arr;
// }

// yuesefu(41, 3);

// var maxProfit = function(prices) {
//   let maxprices = 0, minprices = prices[0]
//   for (let i = 1; i < prices.length; i++) {
//     minprices = Math.min(prices[i], minprices)
//     maxprices = Math.max(maxprices, prices[i] - minprices)
//   }
//   return maxprices
// };

// console.log(maxProfit([7,1,5,3,6,4]))
