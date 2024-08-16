// Banner duration timer start time
var startTime;
// Timeline reference
var tl;
init();
// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  // tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  animate();
}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, rotationZ: 0.1, force3D: true });
  tl.set(["#photo, #photo2"], { rotationZ: 0.1, force3D: true });
  tl.set(["#photo2"], { y: 70 });
  tl.set(["#logo", '#h1 span', '#h2 span'], { autoAlpha: 0 });

  tl.addLabel('frame_1', 0)
  .to('#photo2', 2, { y: 3, ease: "none" }, "frame_1")
  .to(['#h1', '#h2'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_1")
    // .to(['#h1'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_1+=2.5")
    // .to(['#h2'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_1+=3")
    .staggerTo(['#h1 span', '#h2 span'], 1, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, 0.3, 'frame_1+=2')
    .staggerFrom(['#h1 span', '#h2 span'], 1, { y: '+=50', ease: Power2.easeOut }, 0.3, 'frame_1+=2')

  // tl.addLabel('frame_END', '+=4.5')
  tl.addLabel('frame_2', 4)
    .to(['#cta'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_2")
    .to(['#logo'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_2+=0.5")

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();
  setRollover();
  // console.log( "Animation duration: " + (endTime - startTime) / 1000 + " seconds");
}

// CTA grow on hover

function setRollover() {

  var clickArea = document.getElementById("default_exit");
  clickArea.onclick = function () {
    window.open(clickTag, "_blank");
  };
  // clickArea.addEventListener("mouseover", default_over, false);
  // clickArea.addEventListener("mouseout", default_out, false);
}

// function default_over(event) {
//   // TweenMax.to(["#cta span"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0, backgroundColor: "#014732", color: "#fff" });
//   // TweenMax.to(["#cta span svg"], 0.3, { fill: "#fff" }, "<");
// }

// function default_out(event) {
//   // TweenMax.to(["#cta span"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0, backgroundColor: "inherit", color: "#000" });
//   // TweenMax.to(["#cta span svg"], 0.3, { fill: "#000" }, "<");
// }


