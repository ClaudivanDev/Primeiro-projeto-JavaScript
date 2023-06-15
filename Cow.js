// coordenadas da vaquinha //
let xcow = 230;
let ycow = 455;

// largura e altura //
let wcow = 40;
let hcow = 35;

// para colisão //
let hit = false;

// para os pontos //
let points = 0;

// para as vidas //
let lifes = 3;

// mostra vaca //
function ShowCow(){
  image(cow, xcow, ycow, wcow, hcow);
}

// título "vidas" //
function ShowLifes(){
  textAlign(CENTER);
  fill(color(10))
  textSize(20);
  text(lifes, 405, 482);
 
}
// movimenta vaca //
function MoveCow(){
  if (keyIsDown(UP_ARROW)){
    ycow -= 3;
}
  if (keyIsDown(DOWN_ARROW)){
// limite Y da vaca. Continua a descer se o Y for menor que... //
    if (ycow < 455){
    ycow += 3;
}
}
}
// Marca ponto e retorna ao início //
function  ScoreGame(){
  if (ycow <= 10) {
     ycow = 470;
     points += 1;
// som de ponto //    
     pontos.play();
// aumenta a velocidade dos carros quando faz ponto //
    aumentaV();
}
}

// mostra placar //
function ShowPoints(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 30, 10));
   text(points, 245, 30);
  
// mostra título vidas //
    fill(color(10))
    textAlign(CENTER);
    textSize(16); 
    text("VIDAS:", 363, 481);
}

// para vaca voltar quando for colidir //
function hitTrue(){
  ycow = 450;
}
// para perder vidas quando colidir //
function perdevida(){
  if (lifes > 0){
        lifes -= 1;
}
}
// colisão da vaca //
function CheckCollison(){
  for(let i = 0; i < Cars.length; i = i + 1){
    hit = collideRectCircle(xCars[i], yCars[i], wCars, hCars, xcow, ycow, 40 / 3);
      if (hit){
        hitTrue();
        colidiu.play();      
        perdevida();
    }
  }
}

