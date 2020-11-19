let video;
let poseNet;
let pose;

function setup() {
  createCanvas(740, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses){
  console.log(poses);
   if (poses.length > 0){
    pose = poses[0].pose;
     skelton = poses[0].skelton;
   }
}

function modelLoaded(){
  console.log('poseNet ready');
}

function draw() {
  image(video, 0, 0);
  
  
  
  if (pose){
    
  let eyeR = pose.rightEye;
  let eyeL = pose.leftEye;
  let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y)
  
  
  fill(156, 250, 214);
  ellipse(pose.rightEye.x, pose.rightEye.y, 100);
  ellipse(pose.leftEye.x, pose.leftEye.y, 100);
    
  fill(0, 0, 0); 
  ellipse(pose.rightEye.x, pose.rightEye.y, 60);
  ellipse(pose.leftEye.x, pose.leftEye.y, 60);
    
  fill(34, 144, 214);
  ellipse(pose.nose.x, pose.nose.y, 60);
  fill(0, 0, 255);
    ellipse(pose.rightWrist.x, pose.rightWrist.y, 80);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 80);
    
    for(let i = 0; i < pose.keypoints.length; i++){
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(0, 255, 0);
      ellipse(x, y, 16, 16);
    }
    
//     for (let i = 0; i < skelton.length; i++){
//       let a = skelton[i][0];
//       let c = skelton[i][1];
//       strokeWeight(2);
//       strokeWeight(255);
//       line(a.position.x, a.postion.y, a.position.x, a.postion.y);
//     }
    
    
  }
}
