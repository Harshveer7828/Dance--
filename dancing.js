gsap.from("#page1>img:nth-child(3)",{
    x:-1200,
    duration:1,
    rotate:20,
    delay:0,

})
gsap.from("#left1 #navbar a",{
    y:-100,
    duration:0.5,
    stagger:0.2
})
gsap.from("#page1>h1 span",{
    x:1200,
    duration:0.5,
    stagger:0.2,
    delay:1
})

gsap.from("#lowerbutton",{
    y:100,
    duration:1,
    delay:2
})
gsap.from("#iconsdiv",{
    x:50,
    opacity:0,
    duration:1
})
gsap.from("#smalldance",{
    rotate:360,
    duration:1,
    scale:0,
    delay:1

})

gsap.from("#bgdiv2 img",{
    scale:0,

})
gsap.to("#bgdiv2 img",{
    scale:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        scrub:1,
        // markers:true,
        start:"top 90%",
        end:"top 5%"
    }
})

gsap.from("#bgsmalldiv2",{
    left:"30%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 20%"
    }

})

gsap.from("#innersmall2>h1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        scrub:1,
        start:"top 70%",
        end:"top 50%"
    }
})
gsap.from("#textdiv2>h1",{
    y:300,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        scrub:1,
        start:"top 60%",
        end:"top 40%"
    }
})

gsap.from("#textdiv2>p",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top 50%",
        end:"top 30%"

    }
})

var tl=gsap.timeline()

tl.from("#page3 h3,#page3 h1,#page3 p",{
    // opacity:0,
    y:200,
    rotateX:90,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        scrub:0.5,
        // markers:true,
        stagger:1,
        start:"top 40%",
        end:"bottom 90%"
    }
})
tl.from("#left4 h1,#left4 h3",{
    x:-500,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 40%",
        end:"bottom 96%",
        stagger:0.2,
        scrub:1
    }
})
tl.from("#right5 h1,#right5 p,#right5 button",{
    y:500,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 60%",
        end:"bottom 95%",
        stagger:0.2,
        scrub:1
    }
})





