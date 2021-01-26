/*

class 22 - 23: Physics Engine
Developer: Priyesha

*/

//Declare variables for game objects and behaviour indicators(FLAGS)

//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var userEngine, userWorld;


var bird;
var catapult;
var pig1, pig2;
var ground, platform;
var log1, log2, log3, log4;
var box1, box2, box3, box4, box5;
var Day;
//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
    Day = loadImage("images/day.png");
 }


//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(1200, 600);

  //create and initialize simulation matter.js
  userEngine = Engine.create();
  userWorld = userEngine.world;
  ground = new Ground(600, height-20, 1200, 10);

  bird = new Bird(100,100);

  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810, 260, 300, PI / 2);
  
  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  pig2 = new Pig(810, 220);
  log2 = new Log(810, 180, 300, PI / 2);
  
  box5 = new Box(810, 160, 70, 70);
  log3 = new Log(760, 120, 150, PI / 7);
  log4 = new Log(870, 120, 150, -PI / 7);


}

//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background(Day);
  //render and excute the simulation of matter.js
  Engine.update(userEngine);

  ground.display();

  bird.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();
  

  
}