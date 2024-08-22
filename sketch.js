let palavra;

function setup() {
  createCanvas(500, 400);
  
  
  let palavras = ["Avatar", "Mangá", "marvel"];
  
  palavra = random(palavras);
}

function inicializaCores() {
  
  background("rgb(20,20,20)");
  fill("rgb(139,131,6)");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function draw() {
  
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 250, 200);
  
}
