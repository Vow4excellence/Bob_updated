var bob,road,bob1;
var bob_img,bob2_img,bob3_img,boy4_img,boy5_img;
var road_img,road2_img;

function preload(){
  bob_img = loadAnimation("B/boy4.png","B/boy5.png")
  bob1_img = loadAnimation("B/boy3.jpg")
  road1_img = loadImage("B/road1.png")
}

function setup() {
  createCanvas(600,600);
  bob=createSprite(300, 545, 200,200 );
  bob.addAnimation("animate",bob_img);
 // road = createSprite(300,300,200,200)
  //road.addImage("straight",road1_img)
  bob.scale = 0.2
}

function draw() {
  background(road1_img);
  if (keyIsDown(UP_ARROW)){
    bob.addAnimation("animate",bob_img);
    bob.y += -1;
      }
  else
    bob.changeAnimation("standing",bob1_img)
  

    drawSprites();
}
