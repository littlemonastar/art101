class Mouse{

  constructor(){
    this.r = 50;
    this.x = width;
    this.y = height - this.r;
  }

  move(){
    this.x -= 5;
  }

  show(){
    image(dImg, this.x, this.y, this.r, this.r);
    
  }

}
