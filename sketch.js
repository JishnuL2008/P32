const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
 background(backgroundImg);
    } 
    Engine.update(engine);

    // write code to display time in correct format here
noStroke();
textSize(25);
fill("black");


}

async function getBackgroundImg(){

    // write code to fetch time from API
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");


    //change the data in JSON format
var responseJSON=await response.json();
var datetime=responseJSON.datetime;
    // write code slice the datetime
hour=datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset

if(hour>=0400&&hour&&hour<=0600){
    bg="sunrise1.png";
    
}else if(hour>=0600&&hour&&hour<=0800){
    bg="sunrise2.png";
} else if(hour>=0800&&hour&&hour<=1000){
    bg="sunrise3.png";
} else if(hour>=1000&&hour&&hour<=1200){
    bg="sunrise4.png";
} else if(hour>=1200&&hour&&hour<=1400){
   bg="sunrise5.png";
} else if(hour>=1400&&hour&&hour<=1600){
    bg="sunrise6.png";
} else if(hour>=1600&&hour&&hour<=1800){
    bg="sunrise7.png";
    
} else if(hour>=1800&&hour&&hour<=2000){
    bg="sunrise8.png";
} else if(hour>=2000&&hour&&hour<=2300){
    bg="sunrise9.png";
} else if(hour>=2300&&hour&&hour===00){
    bg="sunrise10.png";
} else if(hour===00&hour&&hour<=0300){
    bg="sunrise11.png";
} else{
    bg="sunrise12.png";
}




    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg);
}
