const tablinks = document.getElementsByClassName("tab-links");
const tabcontent = document.getElementsByClassName("tab-content");

console.log(tablinks);
console.log(tabcontent);

function openSection(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active");
    }

    for(tabcon of tabcontent)
    {
        tabcon.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active");

    document.getElementById(tabname).classList.add("active-tab");

}

const sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

var typed = new Typed('.element', {
    strings: ["Web Developer"],
    typeSpeed: 130,
    backspeed:130,
    loop:true
  });