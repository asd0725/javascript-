var obj1 = {0:'a',1:'b',2:'c',length:3}
let arr1 = Array.from(obj1,function(value,index){
    return value + 'd'
})
// for (const e of arr1) {
//     console.log(e)
// }
//Array.from(arrayLike[, mapFn[, thisArg]])
// 参数
// arrayLike
// 想要转换成数组的伪数组对象或可迭代对象。

// mapFn 可选
// 如果指定了该参数，新数组中的每个元素会执行该回调函数。

// thisArg 可选
// 可选参数，执行回调函数 mapFn 时 this 对象。

//上边的方法可以简写为箭头函数
let arr2 = Array.from(obj1,(value)=>{
    return value+'d'
})

// arr2.forEach(element => {
//     console.log(element);
// });

//es6判断一个变量是否为数组
let a = new Set()
// console.log(Array.isArray(a));

let arr3 = [1,2,3,4,5,6];
arr3.splice(2);
// console.log(arr3);

//数组iindexOf方法
var array = ['abc', 'def', 'ghi','123'];
// console.log(array.indexOf('123')); // 1