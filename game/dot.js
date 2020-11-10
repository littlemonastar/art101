class Dot{
 constructor(_xPos, _yPos, _rotation){
   this.xPos = _xPos;
   this.yPos = _yPos;
   this.rotation = _rotation;
     }

    
  
  display(){
  fill('white')
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  circle(width * 0.8, height * 0.001, height * 0.2);
  fill('black')
  circle(width * 0.8, height * 0.01, height * 0.09);
  pop();
    }   
  
  move(){
    
      if (this.yPos <= height + 0.5){
      // this.yPos = this.yPos + 2;
      this.yPos += 2;
      } else {
        this.yPos = -height * 0.2;
        }
      }
    }

  

// function drawDot(xPos, yPos, rotation){
//   fill('yellow')
//   push();
//   translate(xPos, yPos);
//   rotate(rotation);
//   circle(width * 0.6, height * 0.5, -50);
//   circle(width * 0.5, height * 0.7, -50);
//   pop();
// }