
let eleccionJugador;
let eleccionCPU;
let  imgJugador = document.getElementById('imgJugador');
let  imgPc = document.getElementById('imagenPc');

var opcionesJuego ={
    0: "Piedra",
    1: "Papel",
    2: "Tijera",
    reglaJugador: {
        0:{0:"Empate", 1 :"¡Perdiste!", 2:"En hora buena ¡Ganaste!"},
        1:{0:"En hora buena ¡Ganaste!",1: "Empate", 2: "¡Perdiste!"},
        2:{0:"¡Perdiste!", 1:"En hora buena ¡Ganaste!", 2:"Empate"}
    },
    imagen:{
      juega: ["./img/piedraJugador.png", "./img/papelJugador.png" ,"./img/tijeraJuador.png"],
      pc:  ["./img/piedraPc.png","./img/papelPc.png","./img/tijeraPc.png"]
      }
  };


function mostrarimg(a, b){
  
  imgJugador.setAttribute("src", a);
  imgPc.setAttribute("src", b);
  console.log(a);
}
 
 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
 }

function jugador(seleccion){
  eleccionJugador = parseInt(seleccion);
  eleccionCPU = getRandomInt(3);
  // obtener lo calculado aleatorio de cpu y lo seleccionado por el usuario
  const p = document.getElementById("resultado");
  const ppc = document.getElementById("eleccionpc");
  const pj = document.getElementById("eleccionjugador");
  
  // mostrar imagen de acuerdo a la seleccion
  mostrarimg(opcionesJuego.imagen.juega[eleccionJugador],opcionesJuego.imagen.pc[eleccionCPU]) ;

  //mostrar los resultados 
  ppc.innerText =  "Computadora escogió "+  opcionesJuego[eleccionCPU];
  pj.innerText =  "Tu escogiste "+ opcionesJuego[eleccionJugador];
  p.innerText = opcionesJuego.reglaJugador[eleccionJugador][eleccionCPU];
   

}


