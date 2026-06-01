const words = [
    "Geological Engineering Student",
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

    currentWord = words[i];

    if(!isDeleting){
        document.getElementById("typing").textContent =
        currentWord.substring(0,j++);

        if(j > currentWord.length){
            isDeleting = true;
            setTimeout(type,1000);
            return;
        }
    }else{

        document.getElementById("typing").textContent =
        currentWord.substring(0,j--);

        if(j === 0){
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type,isDeleting ? 50 : 120);
}

type();

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
});

window.addEventListener("scroll",()=>{

    document.querySelectorAll(".reveal")
    .forEach(item=>{

        let top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight-100){
            item.classList.add("active");
        }

    });

});