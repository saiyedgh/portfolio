let speed = 3000;

gsap.set("#hero path", {visibility: "hidden"})
gsap.set("#hero h2, #hero h3", {visibility: "hidden"})
gsap.set("#WDD, #HCD", {visibility: "visible"})
gsap.set("#mount-back path", {visibility: "visible"})


// Animating the mountains at the BACK
let mountainsB = gsap.timeline({ 
    defaults: { 
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "top top",
            end: "20% 100%",
            // markers: {
            //     startColor: "white",
            //     endColor: "white"
            // },
            scrub: 2
        },
    }
})

mountainsB.to("#mount-b-01", { y: 1.2 * speed})
.to("#mount-b-02", { y: 2 * speed})
.to("#mount-b-03", { y: 4 * speed})
.to("#mount-b-04", { y: 3 * speed})


// text animation Web Design and Development + Human Centered Design
let WDDandHCD = gsap.timeline({ 
    defaults: { 
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "2% top",
            end: "35% 100%",
            // markers: {
            //     startColor: "yellow",
            //     endColor: "yellow"
            // },
            scrub: 0.5
        },
    }
})
WDDandHCD.to("#WDD", { x: -2 * speed})
.to("#HCD", { x: "120vw"})

// Animating the mountains in the MIDDLE
let mountainsM = gsap.timeline({ 
    defaults: { 
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "5% top",
            end: "40% 100%",
            // markers: {
            //     startColor: "#A3A3A3",
            //     endColor: "#A3A3A3"
            // },
            scrub: 1
        },
    }
})
mountainsM.set("#mount-mid path", {visibility: "visible"})
mountainsM.from("#mount-m-01", { y: 1000, scale: 0.8, x: 500})
.to("#mount-m-01", { y: 0, scale: 1, x: 10, ease: Power1.easeIn})
.from("#mount-m-02", { y: 1000, scale: 0.8, x: -500})
.to("#mount-m-02", { y: 0, scale: 1, x: -10, ease: Power2.easeIn})

// text animation User Experience Design and User Interface Design
let UIDandUXD = gsap.timeline({ 
    defaults: { 
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "5% top",
            end: "20% 100%",
            // markers: {
            //     startColor: "orange",
            //     endColor: "orange"
            // },
            scrub: 0.5
        },
    }
})
UIDandUXD.set("#UID, #UXD", {visibility: "visible"})
UIDandUXD.from("#UID", { y: "-100vh"})
.to("#UID", { y: 350})
.from("#UXD", { y: "-100vh" })
.to("#UXD", { y: 300})


// Animating the mountains at the FRONT
let mountainsF = gsap.timeline({ 
    defaults: { 
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "30% top",
            end: "70% 100%",
            // markers: {
            //     startColor: "#5C5C5C",
            //     endColor: "#5C5C5C"
            // },
            scrub: 0.5
        },
    }
})
mountainsF.set("#mount-front path", {visibility: "visible"})
mountainsF.from("#mount-f-01", { y: 1000, scale: 0.8, x: -800})
.to("#mount-f-01", { y: 0, scale: 1, x: -10} )
.from("#mount-f-02", { y: 1000, scale: 0.8, x: 800})
.to("#mount-f-02", { y: 0, scale: 1, x: 10})
.from("#mount-f-04", { y: 1000, scale: 0.8, x: -400})
.to("#mount-f-04", { y: 0, scale: 1, x: -10})
.from("#mount-f-03", { y: 1000, scale: 0.8, x: 800})
.to("#mount-f-03", { y: 0, scale: 1, x: 10} )


// text animation Front End Development
let FED = gsap.timeline({ 
    defaults: { 
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "25% top",
            end: "90% 100%",
            // markers: {
            //     startColor: "red",
            //     endColor: "red"
            // },
            scrub: 0.5
        },
    }
})
FED.set("#FED", {visibility: "visible"})
FED.from("#FED", { y: "100vh", scale: 5})
.to("#FED", { y: 0, scale: 1})

.to("#UID", { x: "-120vw", scale: 0.05})
.to("#UXD", { x: "120vw", scale: 0.05})


/* ------------------------------------------------------ */


//reset scrollbar position after refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
e.preventDefault();
if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
    fsEnter.innerHTML = "Exit Fullscreen";
}
else {
    fullscreen = false;
    document.exitFullscreen();
    fsEnter.innerHTML = "Go Fullscreen";
}
});

/* ------------------------------------------------------ */
