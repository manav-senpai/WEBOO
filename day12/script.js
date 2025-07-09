//  for a given array with prices of 5 items [ 250, 645, 300, 900, 50] all items have an offer of 10 % off on them. change the arrya to store final price after applying offer. 

// let arr1 = [ 250, 645, 300, 900, 50];
// console.log("Before discount :", arr1)
// let discarr = [];

// let disprice = 0;

// for ( price of arr1){
//     disprice = (price / 100 ) * 90;
//     discarr.push(disprice);
// }
// console.log("After discount :", discarr);

// solved but with diff method

// let fruits = [ ];

// fruits.push("banana");

// console.log(fruits);

// let vegetables = ["tomato", "potato", "brinjal","cabbage"];

// let eatables = fruits.concat(vegetables) ;
// console.log(eatables);

// // console.log(vegetables.slice(1,3));
// console.log(vegetables.splice(1,4,"apple"))

// let arr2 = [ 1,2,3,4,5,6,7];
// arr2.splice(2,3,34,54);
// console.log(arr2);


// let arr3 = ["bloomberg", "Microsoft", "uber", "Google", "Ibm", "Netflix"];

// //remove the first company
// arr3.shift();
// console.log(arr3);

// // remove uber, add ola
// arr3.splice(1,1,"0la");
// console.log(arr3);

// //add amazon at the end
// arr3.push("amazon")
// console.log(arr3);
// //done

// function add(a,b){
//     // let a, b, y;
//     y = a + b;
//     console.log(y)
// }

// add(3,5);

// arrow function 

// const multp = (a, b) => {
//     return a*b;
// }
// console.log(multp);

// function countVowels(str){
//     let count = 0;
//     for( const char of str){
//         // console.log(char);
//         if (char === 'a' || char ==='e'||char === 'i'|| char ==='o'||char === 'u'){
//             count++;

//         }
//     }
//     console.log(count);
// } 

// let arr4 = [2,3,4,5,6,7];

// arr4.forEach(function printValue(val){
//     console.log(val     )
// })

// for a given arry of numbers, print the square of each value using forEach loop

// let arr5 = [1,2,3,4,5,6,7,8];


// arr5.forEach(Square);

// function Square(num){
//     let answer = num*num;
//     console.log("square of ", num ," is", answer);
// }

//done


//map

// let nums = [ 23,34,45,56];
// let newArr = nums.map((val) => {
//     return val * val;
// });
// console.log(newArr);

// let arr= [1,2,3,4,5];
// const output = arr.reduce ((prev, curr) =>{
//     return prev > curr? prev : curr;
// });

// console.log(output)

// let marks = [67,78,56,67,89,68,79,9,43];

// let toppers = marks.filter((val) => {
//     return val> 70;
// });

// console.log(toppers);

// let n = prompt("ENter a number :");

// let arr = [];
// for (let i = 1; i<= n; i++){
//     arr[i-1] = i;
// }
