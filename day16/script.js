// let btn = document.createElement("button");
// btn.innerText = "click me";
// console.log(btn);

// // let div = document.querySelector("div");
// //  div.append(btn);
// // div.prepend(btn)
// // div.after(btn);

// let paragraph = document.createElement("p");
// paragraph.innerHTML = "<b> This is the new paragraph </b>";
// // console.log(paragraph);

// let para = document.querySelector("p")

// para.remove();
let body = document.querySelector("body");
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";


//was doing it the wrong way..
body.prepend(newBtn);

let para = document.querySelector("p");

