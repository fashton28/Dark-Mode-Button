const bod = document.getElementById("background");
const circle = document.getElementById("circle");
const container = document.getElementById("toogle");
var real = false

const changeBackground = () => {
    if(real) {
        bod.style.backgroundColor = "black";
        circle.style.transform = "translateX(100%)";
        circle.style.backgroundColor ="black"

    }else{
        bod.style.backgroundColor = "white";
        circle.style.transform = "translateX(0px)"
        circle.style.backgroundColor ="white"
    };
    real = !real;
};

container.addEventListener("click", changeBackground)
   

