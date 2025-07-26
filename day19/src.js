let modeBtn = document.querySelector("#mode");
let currentMode = "lightmode";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if( currentMode === "lightmode"){
        currentMode = "darkmode";
        body.classList.add("dark");
        body.classList.remove("light");

    }else{
        currentMode = "lightmode";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    // console.log(currentMode);
});