## 数组 VS 链表

> - 数组和链表逻辑上有很多相似之处。不同的只是一些使用场景和操作细节，对于做题来说，我们通常更关注的是操作细节
> - 通过对比两者的相似性可以归纳学习链表的基本操作
> - 数组是连续的内存空间，通常每一个单位的大小也是固定的，因此可以按下标随机访问。而链表则不一定连续，因此其查找只能依靠别的方式，一般我们是通过一个叫 next 指针来遍历查找

数组遍历

```js
for(int i = 0; i < arr.size();i++) {
    print(arr[i])
}
```

链表遍历

```js
for (ListNode cur = head; cur != null; cur = cur.next) {
    print(cur.val)
}
```

数组逆序遍历

```js
for(int i = arr.size() - 1; i > - 1;i--) {
    print(arr[i])
}
```

链表逆序遍历

```js
for (ListNode cur = tail; cur != null; cur = cur.pre) {
    print(cur.val)
}
```

数组反转

```javascript
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
  return arr;
}
```
