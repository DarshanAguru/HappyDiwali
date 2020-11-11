var fireworks = [];
var gravity;
var song;
var button;

function preload(){
  song = loadSound('diwali.mp3')

}

function toggleSong(){


  if(song.isPlaying()) {
    song.pause();
  }else{
    song.play();
   }


}

function setup() {
  createCanvas(screen.width, screen.height/1.25);
  colorMode(HSB);

    gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);



  button = document.getElementById("muteBtn");

button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
    song.pause();
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
    song.play();
  }
}, false);




}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if(random(1) < 0.04){
  fireworks.push(new Firework());
}
  for(var i = fireworks.length-1 ; i >=0 ; i--){
    fireworks[i].update();
    fireworks[i].show();
    if(fireworks[i].done()){
      fireworks.splice(i, 1);
    }

  }
//console.log(fireworks.length);
}

