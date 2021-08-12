lipstickX=0;
lipstickY=0;

function preload(){
    lipstick = loadImage('https://i.postimg.cc/5t4Sv8p5/tumblr-lips-png-7-Transparent-Images.png');
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        lipstickX = results[0].pose.lipstick.x-15;
        lipstickY = results[0].pose.lipsstick.y-15;
        console.log("lipstick x ="+results[0].pose.lipstick.x);
        console.log("lipstick y ="+results[0].pose.lipstick.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lipstick, lipstickX, lipstickY, 30, 30);
}

function take_snapshot(){
    save('vaishvi.png');
}