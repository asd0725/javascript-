//新建一个构造函数，实例化时不使用new关键词。
// function person1(){
//     this.age = 18;
// }
// let p1 = person1();
// console.log(p1);
// console.log(age);
// console.log(p1.age);
//通过上面代码发现，如果不使用new关键词实例化，返回的结果就是undefined。age输出为18；由于javascript默认指向window，所以输出的age就是18

//新建一个构造函数，实例化时使用new关键词；且在构造函数中返回一个对象；
// function person2(){
//     this.name = 'jenny';
//     return {age:18}
// }

// let p2 = new person2();
// console.log(p1);
// console.log(p1.name);
// console.log(p1.age);
//如果在构造函数中返回一个和this无关的对象，那么new命令会直接返回这个新对象，而不是通过new执行步骤生成的对象；


//如果给上边的代码修改；在构造函数中返回不是对象。
// function person3(){
//     this.name = 'jack';
//     return age = 18;
// }

// let p3 = new person3();
// console.log(p3);
// console.log(p3.name);
//根据代码运行结果显示，如果构造函数中返回的不是对象，那么还是会按照new关键词的执行逻辑，生成一个新的对象（绑定的最新的this）,最后返回出来。

//new 关键词执行之后总是会返回一个对象，要么是实例对象，要么是 return 语句指定的对象。

//call apply bind的区别
// 都可以改变函数 func 的 this 指向。
// call 和 apply 的区别在于，传参的写法不同：apply 的第 2 个参数为数组；
// call 则是从第 2 个至第 N 个都是给 func 的传参；
// 而 bind 和这两个（call、apply）又不同，bind 虽然改变了 func 的 this 指向，但不是马上执行
// 而这两个（call、apply）是在改变了函数的 this 指向之后立马执行。

//在程序中：A 对象有个 getName 的方法，B 对象也需要临时使用同样的方法
// 那么这时候我们是单独为 B 对象扩展一个方法，还是借用一下 A 对象的方法呢？
// 当然是可以借用 A 对象的 getName 方法，既达到了目的，又节省重复定义，节约内存空间。

// let a = {
//     name:'jack',
//     getName : function(msg){
//         return msg + this.name
//     }
// }

// let b = {
//     name:'tom'
// }
// console.log(a.getName('hello '));
// console.log(a.getName.call(b,'hello '));
// console.log(a.getName.apply(b,['hello ']));
// let name = a.getName.bind(b,'hello ')
// console.log(name());



// this.x = 9;
// let modules = {
//     x: 81,
//     showX:function(){
//         console.log(this.x);
//     }
// }
// modules.showX()
// let relave = modules.showX;
// relave()

// let m2 = relave.bind(modules)
// m2()


//类数组借用方法
// let arrayLike = {
//     0:'java',
//     1:'c++',
//     2:'Python',
//     length:3
// }
// Array.prototype.push.call(arrayLike,'c','c#')
// console.log(arrayLike);
//这里的arrayLike不是数组，打印它的类型时依然是object。借用array的push方法可以往arrayLike里添加元素


//获取数组的最大最小值
let arr1 = [12,15,18,2,6,5,29,20]
let min = Math.min.apply(Math,arr1);
let max = Math.max.apply(Math,arr1);
console.log('min = ',min);
console.log('max = ',max);