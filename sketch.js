var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //criar objetos de divisão
  
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    
  }

  //crie a 1ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crie a 2ª linha de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crie a 3ª linha de objetos plinko
  for (var j = 25; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //crie a 4ª linha de objetos plinko
  for (var j = 0; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //criar objetos de partículas
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("score: "+score,100,50)
  /*
  MouseX:21.972534332084894
  MouseY:513.358302122347 
  */
  text("500",25,523)
  text("500",25+80,523)
  text("500",25+80*2,523)
  text("500",25+80*3,523)
  text("100",25+80*4,523)
  text("100",25+80*5,523)
  text("100",25+80*6,523)

  text("200",25+80*7,523)
  text("200",25+80*8,523)
  text("200",25+80*9,523)
 
  Engine.update(engine);
  ground.display();
  console.log(score)
  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //exibir os divisões
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
    
  }

  //exibir as partículas
  if(frameCount % 60 == 0) particles.push(new Particle());
  for(var w = 0; w < particles.length; w++) {
    particles[w].display();
    particles[w].score();
  }
}