function setup()
{
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(550,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded()
{
    console.log("Posenet is initialised");
}
difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
    console.log(results);
    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    difference=floor(leftWristX - rightWristX);
    console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
}
function draw()
{
    background("#FF0000");
    fill("#32CD32");
    textSize(difference);
    text("Hello", 50,400);
    document.getElementById("font_size").innerHTML = "Font size of the text = " + difference + " px ";
}