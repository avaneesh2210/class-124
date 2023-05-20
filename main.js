difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Pose net is intialized.');
}
function gotPoses(){
    
}