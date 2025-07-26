let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.clientX, e.clientY);

//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

btn1.addEventListener("click", () => {
    console.log("onnu mere otthe dabaya");
});
btn1.addEventListener("click", () => {
    console.log("onnu mere otthe dabate hi gya dabate hi gaye.. haa");
});

const handler1 = () => {
    console.log("onnu aboo baas bhi karo dabana ji");
};

btn1.addEventListener("click", handler1);

btn1.removeEventListener("click", handler1);
let chad = document.querySelector("#chad");
// chad.onmouseover = () => {
//     console.log("onnu mere upar chad gye ");
// };

