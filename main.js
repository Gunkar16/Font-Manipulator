leftWrist = 0;
rightWrist = 0;

noseX = 0;
noseY = 0;

difference = 0;

var Name;

function setup(){
    Canvas = createCanvas(430,430);
    Canvas.position(545,210);
    Video = createCapture(VIDEO);
    Video.size(350,350);
    Video.position(35,210)
    poseNet = ml5.poseNet(Video,modelLoaded);
    poseNet.on('pose',gotPoses);
    Name= document.getElementById("text").innerHTML;
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results,error){
    if(results){
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;

        console.log(leftWrist);
        console.log(rightWrist);


        difference = leftWrist - rightWrist;
        difference = difference - 100;
        console.log(results);
        console.log(difference)

    }
    else{
        console.log(error);
    }
}
function draw(){
    Name = document.getElementById("text").value;
    console.log(Name);
    background('#41686d');
    fill('#9ffffd');
    stroke('#9ffffd');
    text(Name,10,225);
    textSize(difference);
}


