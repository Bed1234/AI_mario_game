function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

  video = createCapture(VIDEO);
  video.size(800,400);

  // .parent() to place the p5.js component inside html element
  video.parent('game_console');
  
  //initializing the posenet model
  poseNet = ml5.poseNet(video, modelLoaded);

  //executing the poseNet model
  poseNet.on('pose',gotPoses);

}

//loading the model using modelLoaded()  functoion
function modelLoaded(){
	console.log("Model Is Loaded");
  }

  // storing the results
function gotPoses(results){
	
  if (results.length > 0){
	console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

  }
  
}

function draw() {
	game();
}






