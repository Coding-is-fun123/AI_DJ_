leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
function preload(){
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3")
}
function setup(){
    canvas= createCanvas(500,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("MODEL LOADED!!!!!!!!!!!")
}
function draw(){
    image(video,0,0,500,500);
    fill("#becdff");
    stroke("black");
   
   if(scoreLeftWrist>0.2){
    circle(leftWristX,leftWristY,20);
    song2.pause()
    if(song1== false){
        song1.play();
        document.getElementById("song_name").innerHTML= "Song Name = Harry Potter Theme Song"
    }
   }
}
function gotPoses(results){
    if( results.length>0){
        console.log(results);
        scoreRightWrist= results[0].pose.keypoints[10].score;
        scoreLeftWrist= results[0].pose.keypoints[9].score;
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX+ " leftWristY = " + leftWristY);

        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX+ " rightWristY = " + rightWristY);
    }

}