
// <!-- CODE BY ANMOL -->

var crsr = document.querySelector(".cursor");
var blr = document.querySelector(".blurCursor");


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blr.style.left = dets.x - 120 + "px"
    blr.style.top = dets.y - 120+ "px"
})
var headNav = document.querySelectorAll(".nav h3");
headNav.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        crsr.style.border = "1px solid rgb(244, 121, 7)"
        crsr.style.scale = 2
        crsr.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave",function(){
        crsr.style.border = "0px solid blue"
        crsr.style.scale = 1
        crsr.style.backgroundColor = "blue"
    })
})



gsap.to(".nav",{
    background: "linear-gradient(to right bottom,blue,rgb(245, 6, 185),blue)",
    duration: 0.6,
    height: "87px",
    scrollTrigger:{
        trigger: ".nav",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to(".main" ,{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller: "body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from(".about img, .about-us",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "top 65%",
        scrub:1
    }
})
gsap.from(".card",{
    scale: 0.8,
    duration:1.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 80%",
        end: "top 55%",
        scrub:1
    },
})

gsap.from("#left",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#left",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub: 2
    }
})
gsap.from("#right",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#left",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub: 2
    }
})
gsap.from(".page4 h1",{
    y:50,
    duration:2,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 100%",
        scrub: 3
    }

})
const instagramIcon = document.querySelector(".footer #instagramIcon");

instagramIcon.addEventListener('click', function () {
    console.log('Instagram icon clicked');
    window.open('https://www.instagram.com/anmol_gupta000/', '_blank');
});