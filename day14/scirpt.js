// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("Myclass");
// console.dir(headings);
// console.log(headings);

// let elements = document.querySelector(".Myclass");
// console.dir(elements);

// let allEl = document.querySelectorAll(".Myclass");
// console.dir(allEl);

// let heading = document.querySelector("h1");
// console.dir(heading);

// let div = document.querySelectorAll(".box");
// // console.log(div);

// div[0].innerText = "This is div 1";
// div[1].innerText = "This is div 2";
// div[2].innerText = "This is div 3";
// console.dir(div[1]);

// let div = document.querySelector("div");
// console.log(div)

// let id = div.getAttribute("id");
// let name = div.getAttribute("name")
// console.log(name)

let btn = document.createElement("button");  
btn.innerText = "Click me";
console.log(btn);

let div= document.querySelector("div");
div.after(btn);

// div.before(btn)

