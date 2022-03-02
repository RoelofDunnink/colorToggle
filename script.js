let mouseHoverStatus= true
let mouseHover = (mouseHoverStatus) =>{
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

        getSidebarUl.style.visibility= "visible";
        getSidebar.style.width= "272px";

        let arrayLenght = getSidebarLinks.length;
        for (let i =0; i<arrayLenght; i++){
            getSidebarLinks[i].style.opacity = "1";
            mouseHoverStatus=false

        } 
}       

let toggleNavStatus= true;
let toggleNav = () =>{
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus=== true){
        getSidebarUl.style.visibility= "hidden";
        getSidebar.style.width= "0px";

        let arrayLenght = getSidebarLinks.length;
        for (let i =0; i<arrayLenght; i++){
            getSidebarLinks[i].style.opacity = "0";

        }
    }
}
const home= document.querySelector(".home");
const greyHome= document.getElementById("grijs");
const rood= document.getElementById("rood");
const groen= document.getElementById("groen");
const blauw= document.getElementById("blauw");
const geel= document.getElementById("geel");
const bruin= document.getElementById("bruin");

greyHome.addEventListener('click', e => {
    home.classList.add('grey-background');
    home.classList.remove("home","red-background","green-background","blue-background","yellow-background", "brown-background");
})
rood.addEventListener('click', e => {
    home.classList.add('red-background');
    home.classList.remove("home","grey-background", "green-background","blue-background","yellow-background", "brown-background");
})
groen.addEventListener('click', e => {
    home.classList.add('green-background');
    home.classList.remove("home","grey-background", "red-background","blue-background","yellow-background", "brown-background");
})
blauw.addEventListener('click', e => {
    home.classList.add('blue-background');
    home.classList.remove("home","grey-background", "red-background","green-background","yellow-background", "brown-background");
})
geel.addEventListener('click', e => {
    home.classList.add('yellow-background');
    home.classList.remove("home","grey-background", "red-background","blue-background","green-background", "brown-background");
})
bruin.addEventListener('click', e => {
    home.classList.add('brown-background');
    home.classList.remove("home","grey-background", "red-background","blue-background","yellow-background", "green-background");
})
