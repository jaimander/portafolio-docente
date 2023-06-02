
//Musica


let musiConejoGordo;
let musiConejoMuere;
let musiConejoCorrupto;
let musiConejoMamado;

let ConejoInicio = true;
let imgConejoInicio;
let musiIntro;
let musiOpcionesBuenoMalo;
let musiOpcionesBueno;
let musiOpcionesMalo;



let Bueno = 0;
let Bando = 0;


let Malo = 0;

//Conejo Bueno

let ConejoBuenoMalo = false;
let imgConejoBuenoMalo;


// Opciones y consecuencias Conejo bueno

let OpcionesBueno = false;
let imgOpcionesBueno;

//let OpcionBuenoA = false;
let ConejoGordo = false;
let imgConejoGordo;

//let OpcionBuenoB = false;
let ConejoMuere = false;
let imgConejoMuere;



// Opciones y consecuencias Conejo malo

let OpcionesMalo = false;
let imgOpcionesMalo;
//let OpcionMaloA = false;
let ConejoCorrupto = false;
let imgConejoCorrupto;


//let OpcionMaloB = false;
let ConejoMamado = false;
let imgConejoMamado;

//let imagenDelMomento;

function setup() {
  createCanvas(1280, 720);

  musiIntro.setVolume(0.5);
  musiIntro.play();

}

function draw() {
  //background(200, 240, 255);





  if (ConejoInicio == true) {
    image(imgConejoInicio, 0, 0, width, height);
  }
  if (ConejoBuenoMalo == true) {
    image(imgConejoBuenoMalo, 0, 0, width, height);
  }
  if (OpcionesBueno == true) {
    image(imgOpcionesBueno, 0, 0, width, height);
  }
  if (ConejoGordo == true) {
    image(imgConejoGordo, 0, 0, width, height);
  }
  if (ConejoMuere == true) {
    image(imgConejoMuere, 0, 0, width, height);
  }
  if (OpcionesMalo == true) {
    image(imgOpcionesMalo, 0, 0, width, height);
  }
  if (ConejoCorrupto == true) {
    image(imgConejoCorrupto, 0, 0, width, height);
  }
  if (ConejoMamado == true) {
    image(imgConejoMamado, 0, 0, width, height);
  }
}
function keyPressed() {
  if (ConejoInicio == true) {
    if (keyCode === ENTER) {
      musiIntro.stop();
      ConejoBuenoMalo = true;
      ConejoInicio = false;
      musiOpcionesBuenoMalo.play();
    }
  }

  if (ConejoBuenoMalo == true) {
    if (keyCode === UP_ARROW) {
      OpcionesBueno = true;
      ConejoBuenoMalo = false;
      musiOpcionesBueno.play();
      musiOpcionesBuenoMalo.stop();
      console.log(Bueno + "Bueno");
    }
  }

  if (OpcionesBueno == true) {
    if (keyCode === LEFT_ARROW) {
      ConejoGordo = true;
      OpcionesBueno = false;
      musiConejoGordo.setVolume(1);
      musiConejoGordo.play();
      musiOpcionesBueno.stop();

    }
  }

  if (OpcionesBueno == true) {
    if (keyCode === RIGHT_ARROW) {
      ConejoMuere = true;
      OpcionesBueno = false;
      musiOpcionesBueno.stop();
      musiConejoMuere.play();

    }
  }
  if (ConejoBuenoMalo == true) {
    if (keyCode === DOWN_ARROW) {
      OpcionesMalo = true;
      ConejoBuenoMalo = false;
      musiOpcionesMalo.play();
      musiOpcionesBuenoMalo.stop();
    }
  }
  if (OpcionesMalo == true) {
    if (keyCode === LEFT_ARROW) {
      ConejoMamado = true;
      OpcionesMalo = false;
      musiConejoMamado.play();
      musiOpcionesMalo.stop();

    }
  }
  if (OpcionesMalo == true) {
    if (keyCode === RIGHT_ARROW) {
      ConejoCorrupto = true;
      OpcionesMalo = false;
      musiConejoCorrupto.play();
      musiOpcionesMalo.stop();

    }
  }
}


//Conejo Bueno
/*

    if ((keyCode === LEFT_ARROW)) {
      OpcionBueno = true;
      Bueno = 1;



    }
    if ((OpcionBueno == true) && (Bueno == 1)) {
      image(OpcionesBueno, 0, 0, width, height);
    }
    if ((keyCode === LEFT_ARROW) && (Bueno == 1)) {
      OpcionBuenoA = true;
      Bueno = 2;
    }
    if ((OpcionBuenoA == true) && (Bueno == 2)) {
      image(ConejoGordo, 0, 0, width, height);
    }
    if ((keyCode === RIGHT_ARROW) && (Bueno == 1)) {
      OpcionBuenoB = true;
      Bueno = 2;
    }
    if ((OpcionBuenoB == true) && (Bueno == 2)) {
      image(ConejoMuere, 0, 0, width, height);
    }
    //Conejo Malo
    if ((keyCode === RIGHT_ARROW)) {
      OpcionMalo = true;
      Malo = 1;
    }
    if ((OpcionMalo == true) && (Malo == 1)) {
      image(OpcionesMalo, 0, 0, width, height);
    }
    if ((keyCode === LEFT_ARROW) && (Malo == 1)) {
      OpcionMaloA = true;
    }
    if ((OpcionMaloA == true) && (Malo == 1)) {
      image(ConejoCorrupto, 0, 0, width, height);
    }
    if ((keyCode === RIGHT_ARROW) && (Malo == 1)) {
      OpcionMaloB = true;
    }
    if ((OpcionMaloB == true) && (Malo == 1)) {
      image(ConejoMamado, 0, 0, width, height);
    }

  }
*/

function preload() {

  //imagenes

  imgConejoInicio = loadImage('a/INTRO.png');

  imgConejoBuenoMalo = loadImage('a/BuenoMaloOPCIONES.png');

  imgOpcionesBueno = loadImage('a/BuenoOPCIONES.png');

  imgConejoGordo = loadImage('a/GORDO.png');

  imgConejoMuere = loadImage('a/MUERTO.png');

  imgOpcionesMalo = loadImage('a/MaloOPCIONES.png');

  imgConejoCorrupto = loadImage('a/CORRUPTO.png');

  imgConejoMamado = loadImage('a/MAMADO.png');

  //musica

  musiIntro = loadSound('musica/intro.mp3');

  musiOpcionesBuenoMalo = loadSound('musica/OpcionesBuenoMalo.mp3');

  musiOpcionesBueno = loadSound('musica/OpcionesBueno.mp3');

  musiOpcionesMalo = loadSound('musica/OpcionesMalo.mp3');

  musiConejoGordo = loadSound('musica/ComeZanahorias.mp3');

  musiConejoMuere = loadSound('musica/y2mate.com - Deltarune Chapter 2 OST 25  Bluebird of Misfortune.mp3');

  musiConejoCorrupto = loadSound('musica/ElPadrino.mp3');

  musiConejoMamado = loadSound('musica/y2mate.com - Tu no metes cabra  Baki Meme 3.mp3');






}

