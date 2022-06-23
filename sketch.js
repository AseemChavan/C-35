var ball;
var database , position ;
var ballPos ; 

function setup(){
    database = firebase.database() //code of firebase  
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballPos = database.ref('ball/position') ; // .ref funcition of firebase to refer location
    ballPos.on("value",readposition)
}
 

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref('ball/position').set({
'x': position.x+x,
'y' : position.y+y
   })       // write values in JSON format
}

function readposition(data) {     
position = data.val()                 // data.val = extract value from the data
ball.x = position.x;
ball.y = position.y;


} 
