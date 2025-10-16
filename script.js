const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
  


function page4(){
  var elemC=document.querySelector(".elem-container");
var fixed=document.querySelector("#fixed-image");


elemC.addEventListener("mouseenter",() =>{
  fixed.style.display="block";
 
});

elemC.addEventListener("mouseleave",() =>{
       fixed.style.display="none";
});

var elems=document.querySelectorAll(".elem")
elems.forEach(function (e){
e.addEventListener("mouseenter", () => {
    var image=e.getAttribute("data-image");
    fixed.style.backgroundImage=`url(${image})`;
   
})
});
}




//swipper

function swipper(){
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 10,
     
    });

}

  
function loader(){
    var loader=document.querySelector("#loader");

  setTimeout(() =>{
    loader.style.top="-100%";
  },4000)

}

 function menu(){
    var menu=document.querySelector(".menu i")
    var menuOpen=document.querySelector(".menu-open")
    var overlay=document.querySelector(".overlay1")
    var close=document.querySelector(".overlay1 i")
    menu.addEventListener("click",() =>{
      overlay.style.top="0";
      overlay.style.transition="all ease 0.7s"
        menuOpen.style.top="0";
        menuOpen.style.transition="all ease 0.8s"
    })

    close.addEventListener("click",() =>{
      menuOpen.style.top="-30%";
        menuOpen.style.transition="all ease 0.8s"
        overlay.style.top="-100%";
      overlay.style.transition="all ease 0.7s"
    })
 }

page4();
swipper();
loader();
menu();