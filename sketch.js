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
  button = createButton('toggle');
button.mousePressed(toggleSong);

}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if(random(1) < 0.06){
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
