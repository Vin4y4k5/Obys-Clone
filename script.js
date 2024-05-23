function locomotive(){
    
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function loadingAnimation(){
  
var tl = gsap.timeline();
// setTimeout - some kind of delay
// setIntervel - some kind of Loop

tl.from(".line h1" , {
  y: 150,
  duration: 0.6,
  stagger: 0.25,
})


tl.from("#line1-part1" ,{
  opacity:0,
  onStart:function(){
    var h5timer = document.querySelector("#line1-part1 h5")
    var grow = 0;
    setInterval(function(){
      if(grow<100){
        h5timer.innerHTML = grow++;
      }
      else{
        h5timer.innerHTML = grow;
      }
    },20)
      }
  })

tl.to(".line h2" , {
  opacity:1,
  animationName: "textanime"
})

tl.to("#loader", {
  opacity:0,
  duration:0.3,
  delay:2, // --  change this to 2.
})

tl.from("#page1" , {
  y:1200,
  opacity:0,
  ease:Power4,
})

tl.to("#loader" , {
  display:"none",
})

tl.from("#nav" , {
  opacity:0,
})

tl.from("#mid1 h1,#mid2 h1,#mid3 h2,#mid4 h1" , {
  y: 150,
  stagger: 0.1,
})

}

function cursorAnimation(){
  document.addEventListener("mousemove" , function(dets){
    gsap.to("#cursor" , {
      left:dets.x,
      top:dets.y,
  
    })
  })
  
  Shery.makeMagnet("#nav-part2 h3", {});
}

locomotive()
loadingAnimation()
cursorAnimation()

// 1:25:50 git add .
