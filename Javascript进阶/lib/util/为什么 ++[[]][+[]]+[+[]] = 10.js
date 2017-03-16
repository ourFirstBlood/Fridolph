// 这是一个Javascript 语言题目，一个完全有效的等式，不信自己可以试一下，下面看看高人的题解：

// ++[[]][+[]]+[+[]]
// 如果把这段表达式拆分开来，它相等于：

// ++[[]][+[]]
// +
// [+[]]
// 在 JavaScript 里，+[] === 0 是完全正确的。 + 会把一些字符转化成数字，在这里，这个式子会变成 +"" 或 0。

// 因此，我们可以简化一下(++ 比 + 有更高的优先级)：

// ++[[]][0]
// +
// [0]
// 因为 [[]][0] 的意思是：获取 [[]] 的第一个元素，这就得出了下面的结果：

// [[]][0] 返回内部数组 ([])。根据语言规范，我们说 [[]][0] === [] 是不正确的，但让我们把这个内部数组称作 A，以避免错误的写法。
// ++[[]][0] == A + 1， 因为 ++ 的意思是”加一”。
// ++[[]][0] === +(A + 1)；换句话说，你得到的永远是个数值( +1 并不一定得到的是个数值，但 ++ 一定是)。
// 同样，我们可以把这一堆代码简化的更清晰。让我们把 A 换回成 [] :

// +([] + 1)
// +
// [0]
// 在 JavaScript 里，这也是正确的：[] + 1 === "1"，因为 [] == "" (这相当于一个空的数组的内部元素连接)，于是：

// +([] + 1) === +("” + 1)，并且 
// +("” + 1) === +("1")，并且 
// +("1") === 1 
// 让我们再次简化一下：

// 1
// +
// [0]
// 同样，在 Javascript 里，这是正确的：[0] == "0"，因为这是相当于一个有一个元素的数组的内部元素的连接。 各元素会使用，分隔。 当只有一个元素时，你可以推论出这个过程的结果就是它自身的第一个元素。

// 所以，最终我们得到 (数字 + 字符串 = 字符串)：

// 1
// +
// "0"

// === "10" // 耶！