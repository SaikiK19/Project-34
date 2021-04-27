//Create variables here
var dog,dogImage,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(400,350,50,50);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", read)
  dog.addImage(dogImage);
}


function draw() { 
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    write(foodS)
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(30);
  fill("white")
  text("Food remaining: "+foodS,25,600)
  text("Press the Up arrow to feed the dog",10,25);

}


function read(data){
  foodS = data.val()

}
function write(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}