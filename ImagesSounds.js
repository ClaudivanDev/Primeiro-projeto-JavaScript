// carros , vaca e estrada //
let car1;
let car2;
let car3;
let cow;
let road;
// sons //
let trilha;
let pontos;
let colidiu;

// carrega imagens // 
function preload(){
  road = loadImage("Images/estrada.png");
  cow = loadImage("Images/ator-1.png");
  car1 = loadImage("Images/carro-1.png");
  car2 = loadImage("Images/carro-2.png");
  car3 = loadImage("Images/carro-3.png");
  Cars = [car1, car2, car3, car1, car2, car3, car1, car2, car3];
// carrega sons //
  trilha = loadSound("sons/trilha.mp3");
  pontos = loadSound("sons/pontos.wav");
  colidiu = loadSound("sons/colidiu.mp3");
}