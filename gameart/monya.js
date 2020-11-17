

class Monya{
  constructor(){
    this.r = 80;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.5;

  }

  jump(){
    if (this.y == height - this.r){
      this.vy = -15;
    }
  }

  hits(mouse){
    return collideRectRect(this.x, this.y, this.r, this.r, mouse.x, mouse.y, this.r, this.r);
  }

  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show(){
    image(gImg, this.x, this.y, this.r, this.r);
  //   fill(250, 50);
  // 　rect(this.x, this.y, this.r, this.r);
  }
}
