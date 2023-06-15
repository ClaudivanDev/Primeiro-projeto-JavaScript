function setup(){
  createCanvas(600, 500);
  trilha.loop(0,1,0.5);
}
function draw(){
  background(road);
  ShowCow();
  CheckCollison();
  MoveCow();
  ScoreGame();
  ShowCar();
  MoveCars();
  ShowPoints();
  ShowLifes();
 // reinicia2();
  GameOver();
   LoopCar();
}