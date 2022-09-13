// document.querySelectorAll(".animal")[2].innerHTML = "dog";
// const animals = document.getElementById("animals");

//const { array } = require("prop-types");

// animals.innerHTML += "<li class ='animal'>Cat</li>";

// document.querySelectorAll(".box")[0].classList.add('purple');

// document.querySelectorAll(".box")[0].classList.toggle('yellow');

// var num=0;
// document.getElementById("plus").addEventListener("click",function(){
//     num++;
//     document.getElementById("num").innerHTML=num;
// });

// document.getElementById("minus").addEventListener("click",function(){
//     num--;
//     document.getElementById("num").innerHTML=num;
// });

// document.querySelector('.bar').addEventListener("click",function(){
//     document.querySelector('.bar').classList.toggle("눌렸어!");
//     document.querySelector(".newBar").classList.toggle("show");
// });

document.querySelectorAll('.list')[0].addEventListener("click",function(e){
    tabBtn(e.target.dataset.id);
});

function tabBtn(a){
    document.querySelectorAll('.tab-buttion')[a].addEventListener("click",function(){
        for(let i=0;i<document.querySelectorAll('.tab-buttion').length;i++){
            document.querySelectorAll('.tab-buttion')[i].classList.remove("here");
            document.querySelectorAll('.tab-buttion')[i].classList.remove("here");
    
        }
        document.querySelectorAll('.tab-buttion')[a].classList.add("here");
        document.querySelectorAll('.tab-content')[a].classList.add("show");
    });
}



