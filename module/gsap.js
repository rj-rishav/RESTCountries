gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from("header", {
    y: -100,
    opacity: 0,
})
.from("#home-p1", {
    y: 20,
    opacity: 0,
    ease: "power1",
    duration: 1
})
.from("#home-p1 a", {
    y: 20,
    opacity: 0,
    ease: "power1",
    duration: 1
})
.from("#home-p2 img", {
    x: 50,
    opacity: 0,
    duration: 1
})
.from("#home-p2 img", {
    y: 30,
    yoyo: true,
    repeat: -1,
    duration: 1.2
})

let tl2 = gsap.timeline();

tl2.from("#news-section h1",{
    scrollTrigger: {
        trigger: "#news-section h1",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
    },
    y: 100,
    opacity: 0
})
.from("#news-wrapper",{
    scrollTrigger: {
        trigger: "#news-wrapper",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
        // markers: true,
        
    },
    y: 100,
    opacity: 0
})
//Fix my scrolltrigger 
