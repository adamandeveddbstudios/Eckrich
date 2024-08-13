// Banner duration timer start time
var startTime;
var clickTag="https://eckrich.sfdbrands.com/en-us/recipes/";
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
  tl.set(["#photo2"], { y: 300 });
  tl.set(["#logo"], { autoAlpha: 0 });

  tl.addLabel('frame_1', 0)
    .to('#photo2', 2, { y: 0, ease: "none" }, "frame_1")
    .to(['#h1'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_1+=2.5")
    .to(['#h2'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_1+=3")

  // tl.addLabel('frame_END', '+=4.5')
  tl.addLabel('frame_2', 4)
    .to(['#logo'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame_2")
    .to(['#cta'], 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame2")

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
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.15, { scale: 1, ease: Power1.easeInOut })
}



