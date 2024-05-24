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
  delay:0, // --  change this to 2.
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


  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video")
  videoContainer.addEventListener("mouseenter", function(){
    videoContainer.addEventListener("mousemove" , function(dets){
      gsap.to("#cursor" , {
        opacity:0
      })
      gsap.to("#video-cursor" , {
        left:dets.x - 500,
        y:dets.y - 280
      })
    })
  } )
  videoContainer.addEventListener("mouseleave" ,function(){
    gsap.to("#cursor" , {
      opacity:1
    })
    gsap.to("#video-cursor" , {
      left:"70%",
      top:"5%",
      
    })
  })


  var flag = 0
  videoContainer.addEventListener("click" , function(){
    if(flag == 0){
      video.play()
      video.style.opacity = 1
      document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-line"></i>`
      gsap.to("#video-container img" , {
        opacity:0,
      },
      gsap.to("#video-cursor" ,{
        scale:0.5
      }),
      flag = 1
    )}
    else{
      video.pause()
      video.style.opacity = 0
      document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-fill"></i>`
      gsap.to("#video-container img" , {
        opacity:1,
      },
      gsap.to("#video-cursor" ,{
        scale:1
    }),
      flag = 0
    )}
    
  })





}

function imageAnimation(){
  Shery.imageEffect(".image-div" , {
    style:5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.7999927559853671},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.31,"range":[0,2]},"discard_threshold":{"value":0.47,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":11.45,"range":[0,100]}},
    gooey:true,
  })
}


locomotive()
loadingAnimation()
cursorAnimation()
imageAnimation()

// 1:25:50 git add .
// 50:00 - 1:14:45 second video
