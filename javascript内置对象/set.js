let mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.add(1)
mySet.add('jack')
let o1 = {1:'tom',2:'ben'}
mySet.add(o1)
mySet.add({1:'tom',2:'ben'})
// console.log(mySet);
// console.log(mySet.has('jack'));
// console.log(mySet.has(5));
// console.log(mySet.has(Math.sqrt(4)));
// console.log(mySet.has(o1));
// mySet.delete(2)
// console.log(mySet.size);

//使用foreach迭代set
// mySet.forEach(value => {
//     console.log(value);
// });

//数组去重
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
// console.log(...new Set(numbers));

//string相关
//字符串中相同的字母会被剔除
//有大小写区分
let str1 = 'jackj'
let str2 = 'jackJ'
let mySet2 = new Set(str2)
// console.log(mySet2);