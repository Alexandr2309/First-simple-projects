// let elems = document.querySelectorAll('p')
// let b = document.querySelector('button')
// let set = new Set;
// for(let elem of elems){
// elem.addEventListener('click', function(){
//     set.add(this)
// })
// }
// b.addEventListener('click',function(){
//     for(let elem of set){
//         elem.textContent += '!'
//     }
// })

// let sum = 0
// let s = Symbol()
// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// }
// obj[s] = function() {
//     for(let key in this){
//         sum += this[key]
//     }
//     console.log(sum);
// }
// obj[s]()

// let sum = 0
// let arr = [1,2,3,44,5]
// let sym = Symbol();
// arr[sym] = function(){
//     for(let elem of this){
// sum+= elem
//     }
//     console.log(sum);
// }
// for(let elem of arr){
//     console.log(elem);
// }

// let s = Symbol.for('f')
// let sum = 0
// let set = new Set;
// function createArrTen(){
// let arr = []
// for(let i=1;i<=10;i++){
//     arr.push(i)
// } return arr;
// }
// function func(arr1,arr2){
// let arr = []
// for(let elem of arr1){
//     for(let elems of arr2){
//         if(elem==elems){
//             set.add(elem)}}
//     };
//     arr[s] = function(){
//         for(let elem of this){
// sum += 0
//         } return sum}
//     let array = [...set];return array
// }
// let arr1 = createArrTen()
// let arr2 = [1,2,3,5,2,3,4,5,10]
// console.log(func(arr1,arr2));

// let json =`[1,2,3,'a','b']`
// console.log(json);

// let arr = [1,2,3,4];
// console.log(arr[Symbol.iterator]);

// function *createIterator(arr){
//     for(let i=0;i<arr.length;i++){
//         yield arr[i]
//     } return arr
// }
// let arr = [1,2,34,3,"hello",234];
// let iterator = createIterator(arr);
// console.log(iterator.next());
// console.log(iterator.next();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// let obj = {a:1,b:2,c:3,d:43}
// function *createIterator(obj){
// for(let key in obj){
//     yield obj[key];
// }
// }
// let iterator = createIterator(obj)
// for(let elem of iterator){
//     console.log(elem);
// }
// let map = new Map();
// map.set(1,2)
// map.set(2,3)
// map.set(3,4)
// let res = map.values();
// let arr =[]
// for(let elem )

// let li = document.querySelectorAll('li')
// let str = 123456789
// str = str.toString();
// let sum = 0;
// for(let elem of str){
// sum+= +elem
// }
// console.log(sum);

// let a = 12345
// function strRes(str){
//     let sum = 0;
//     let res = [...str.toString()]
//     for(let elem of res){
// sum+= Number(elem)
//     } return sum;
// }
// console.log(strRes(a))

// let p = document.querySelectorAll('p');
// let entries = p.entries()
// let button = document.querySelector('button')
// button.addEventListener('click',function(){
//     for(let [num,elem] of entries){
//         elem.innerHTML += num
//     }
// })

// let json = '[1,2,3,4,5]';
// let res = JSON.parse(json)
// console.log(res)
// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;
// let sum  = 0;
// let res = JSON.parse(json); 
// for(let key in res){
//     for(let elem of res[key]){
//         sum += Number(elem)
//     }
// }
// console.log(sum);

// let array = ['surname','name','patronymic'];
// let tr = document.querySelectorAll('tr');
// function func(){
//     let res = []
//     for(let i=0;i<tr.length;i++){
//         let k=0;
//         let obj = {}
//         for(let elems of tr[i].children){
//             if(elems.tagName === 'TH'){continue}
//             else{obj[array[k]]=elems.innerHTML; k++};}
//   res.push(obj); k=0}; let out = JSON.stringify(res); return out;
// }
// console.log(func());

// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;
// let arr = JSON.parse(json)
// arr.push({"name": "user4",
// "age": 23,
// "salary": 65666})
//  arr = JSON.stringify(arr)
// console.log(arr);

// localStorage.setItem('first',1);
// localStorage.setItem('sec',2);
// localStorage.setItem('thr',3);
// let str  = localStorage.getItem('first')
// let str1  = localStorage.getItem('sec')
// let str2  = localStorage.getItem('thr')
// let sum = 0;
// let arr = [...str,str1,str2];
// for(let elem of arr){
//     sum += Number(elem)
// }
// console.log(sum);

// let table = document.querySelector('table')

// let time = localStorage.getItem('time');
// if(!time){
//     let now = new Date().getTime();
//     localStorage.setItem('time1', now)
// }
// window.onfocus = function(){
// if(localStorage.getItem('time1')) {
//     let now2 = new Date().getTime(); localStorage.setItem('time2',now2)
// let res1 = localStorage.getItem('time1')
// let res2 = localStorage.getItem('time2')
// console.log(res2-res1);}}


    let bs = document.querySelector('.button');
    let res = document.querySelector('#res');
    bs.addEventListener('click', function(e){
        if(e.target.tagName === 'DIV'){e.preventDefault()}
        if(e.target.id === 'sum'){
            res.innerHTML = eval(res.innerHTML);
        }
        else{
res.innerHTML += e.target.value;}
    })
    let clear = document.querySelector('#clear');
    function func(){
        res.innerHTML = '';
    }






