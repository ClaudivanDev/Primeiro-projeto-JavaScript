// coordenadas dos carros //
let xCars = [400, 600, 600, 400, 600, 200, 0, 0, 0]; // os 4 últimos andam na contra da direita pra esquerda
let yCars = [50, 50, 120, 195, 195, 268, 268, 330, 400];
// largura e altura dos carros //
let wCars = 70;
let hCars = 40;

// posição de que aparecem depois da primeira volta
let posicaoInicial = [700, 700, 700, 700, 700, -100, -100, -100, -100];

// velociade dos carros //
let vCars = [3, 3, 4, 3.5, 3.5, -3, -3, -4, -3.5, -3.5]; // valores negativos para os carros andar na direção oposta

// aumenta velocidade dos carros //
let vCarsPlus = 0.5;

// mostra carros //
function ShowCar(){
  for (let i = 0; i < Cars.length; i = i + 1){
    image(Cars[i], xCars[i], yCars[i], wCars, hCars);
}
}
// movimenta carros //
function MoveCars(){
  for (let i = 0; i < Cars.length; i = i + 1){
    xCars[i] -= vCars[i];

  }
 
}

// para limite x dos carros //
function PassedTheScreen(xCars){
  return xCars < - 100 || xCars >= 700;
}
// para carros retornar ao chegar no limite X //
function  LoopCar(){
  for (let i = 0; i < Cars.length; i = i + 1){
    if (PassedTheScreen(xCars[i])){
     xCars[i] = posicaoInicial[i];
}
}
}
// aumenta a velocidade dos carros em + vCarsPlus //
function aumentaV(){
  for (let i = 0; i < Cars.length; i++){
    if (vCars[i] >= 0)
     vCars[i] += vCarsPlus;
    else {
      vCars[i] -= vCarsPlus;
    }
}
}
// para zerar os pontos, reiniciar as vidas e velocidade //
function reinicia(){
  if (lifes <= 0){
    points = 0;
    lifes = 3;
    vCars = [3, 3, 4, 3.5, 3.5, -3, -3, -4, -3.5, -3.5];
  } 
}
// para quando perde todas as vidas
function GameOver(){
  if (lifes <= 0){
    textSize(32);
  text("Game Over", width/2, height/3);
    text("Aperte ENTER", width/2, height/2);
  noLoop(); 
  }
}
// para reiniciar o jogo
  function keyPressed(){
    if (keyCode === ENTER){
       lifes = 3;
       points = 0;
       vCars = [3, 3, 4, 3.5, 3.5, -3, -3, -4, -3.5, -3.5];
   loop();
 } 
}