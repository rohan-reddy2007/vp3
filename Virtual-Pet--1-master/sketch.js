//Create variables here
var a,dog,b,database, foodS, foodStock;
function preload()
{
  //load images here
  a = loadImage("images/dogimg.png");
  b = loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(a);
  dog.scale = 0.2
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(b);
  }
 
  drawSprites();
  //add styles here
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
   x=0
  } else{
   x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


