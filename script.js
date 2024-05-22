
function loadingAnimation(){
  
var tl = gsap.timeline();
// setTimeout - some kind of delay
// setIntervel - some kind of Loop

tl.from(".line h1" , {
  y: 150,
  duration: 0.6,
  delay: 0.5,
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
  delay:0, // change this to 2.
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

loadingAnimation()
cursorAnimation()

// 2:02:00