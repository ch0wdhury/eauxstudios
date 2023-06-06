
//Loop though all Video tags and set Controls as false


window.addEventListener('load', async () => {
  let video = document.querySelector('video[autoplay]');
  try {
    await video.play();
  } catch (err) {
    video.controls = false;
  }
});

/* activate pause for video if scrolled out of viewport */
$(window).scroll(function() {
  $("video").each(function(){
    if ($(this).is(“:in-viewport( 400 )”)) {
      $(this)[0].play();
    } else {
      $(this)[0].pause();
    }
  });
});

$("video").click(function() {
  //console.log(this); 
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});







