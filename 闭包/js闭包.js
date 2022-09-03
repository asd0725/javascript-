// var globalName = 'global';
// function getName(){
//     console.log(globalName);
//     var name = 'inner'
//     console.log(name);
// }
// getName();
// console.log(globalName);
// console.log(name);
// function setName(){
//     setname = 'setName'
// }
// setName();
// console.log(globalName);
// console.log(setname);

//如果在 JavaScript 中所有没有经过定义，而直接被赋值的变量默认就是一个全局变量，比如上面代码中 setName 函数里面的 vName 变量一样。


//块级作用域。在js中块级作用域就是if和for后面的{}
// console.log(a);
// if(true){
//     let a = 22;
//     console.log(a);
// }
// console.log(a);

// function f1(){
//     var a = 1;
//     return function(){
//         return a
//     }
// }

// f1()
// let fa = f1();
// console.log(fa());

// setTimeout(() => {
//     console.log('123');
// }, 1000);

// for(var i = 0;i<=5;i++){
//     setTimeout(() => {
//         console.log(i++);
//     }, 4000);
// }

// var name = "The Window";
// var object = {
//     name: "My Object",
//     getNameFunc: function () {
//         return function () {
//             return this.name;
//         };
//     }
// };
// console.log(object.getNameFunc()());


// function f1(){
//     let n = 1;
//     let c = 5;
//     return function sum(){
//         console.log(++n);
//     }
// }

// let a = f1()
// a()
// a()

// let b = a;
// b()
// b()

// function f1(){
//     let n = 1;
//     return function f2(){
//         let m = 1;
//         return function f3(){
//             console.log(++m);
//         }
//     }
// }

// let a = f1()
// a()
// a()


// function f1(){
//     let n = 999;
//     function f3(){
//         ++n
//     }
//     return function f2(){
//         console.log(n);
//     }
// }


// function f1() {
//     var n = 999;
//     let nAdd = function () { n += 1 }
//     function f2() {
//         alert(n);
//     }
//     return f2;
// }
// var result = f1();


// function f1(){
//     let n = 1;
//     this.sum=function(){
//         console.log(++n);
//     }
// }

// let a = new f1()


// function f1(){
//     let n = 1;
//     function sum(){
//         console.log(++n);
//     }

//     return {
//         sum
//     }
// }

//获取数组中大于2小于9的数
// let arr = [1,23,25,3,4,5,6,8,9,21,10,12];
// let arr1 = arr.filter(function(v){
//     return v>=2 && v<=9
// })
// console.log(arr1);

//封装数组区间值函数
// function between(a,b){
//     return function(v){
//         return v>=a && v<=b
//     }
// }

// let arr = [1,23,25,3,4,5,6,8,9,21,10,12];
// let arr1 = arr.filter(between(3,10))
// console.log(arr1);



//寻找价格区间商品
// let lesson = [
//     {
//         titile:'英语',
//         click:29,
//         price:100
//     },
//     {
//         titile:'数学',
//         click:590,
//         price:500
//     },
//     {
//         titile:'语文',
//         click:990,
//         price:900
//     },
//     {
//         titile:'物理',
//         click:690,
//         price:600
//     }
// ]

// function between(a,b){
//     return function(v){
//         return v.price>=a && v.price<=b
//     }
// }

// let lesson2 = lesson.filter(between(550,1000))
// console.table(lesson2);


//对商品进行排序
// let lesson = [
//     {
//         titile:'英语',
//         click:29,
//         price:100
//     },
//     {
//         titile:'数学',
//         click:590,
//         price:500
//     },
//     {
//         titile:'语文',
//         click:990,
//         price:900
//     },
//     {
//         titile:'物理',
//         click:690,
//         price:600
//     }
// ]

// function order(filed,type = 'asc'){
//     return function(a,b){
//         if(type == 'asc'){
//             return a[filed] > b[filed] ? 1: -1
//         }else{
//             return a[filed] < b[filed] ? 1 : -1
//         }
//     }
// }

// let arr2 = lesson.sort(order('price','desc'))
// console.table(arr2);




//js历史遗留问题
//this指向
// let hd = {
//     user:'jack',
//     get:function(){
//         return function(){
//             this.user
//         }
//     }
// }
// let a = hd.get();
// console.log(a());   //undefined

//第一种改法在get函数上方添加let that = this
//第二种改法改为箭头函数
// let hd2 = {
//     user:'jack',
//     get:function(){
//         return ()=> {
//             this.user
//         }
//     }
// }

// var a = new Array(2,3,4)
// for (const iterator of a) {
//     console.log(iterator);
// }

let a = Array.of('jack')
let b = Array('tom')
console.log(a,b);