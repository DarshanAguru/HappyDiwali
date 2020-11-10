

function Particle(x, y, hue,  firework){
  this.pos = createVector(x,y);
  this.firework = firework;
  this.lifespan = 255;
  this.hue = hue;

  if (firework){
    this.vel = createVector(random(-3,3), random(-16,-10));
}else{
  this.vel = p5.Vector.random2D();
  this.vel.mult(random(2, 10));
}
this.acc = createVector(0,0);

this.applyForce = function(force) {
this.acc.add(force);

}

  this.update = function(){
    if(!this.firework){
      this.vel.mult(0.9);
      this.lifespan -= 6;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done= function() {
    if(this.lifespan < 0){
      return true;
    } else {
      return false;
    }
  }

  this.show = function(){
    colorMode(HSB);

    if(!this.firework){
      strokeWeight(1.5);
    stroke(hue, 255, 255, this.lifespan);
  } else {
    strokeWeight(4);
    stroke(hue, 255, 255);
  }
    point(this.pos.x, this.pos.y);

  }

}
