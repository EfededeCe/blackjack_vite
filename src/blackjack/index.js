import { acumularPuntos } from './usecases/acumular_puntos';
import { crearDeck, pedirCarta, valorCarta } from './usecases';
import { turnoComputadora } from './usecases/turno_computadora.js';
import $ from './constantes/constantes.js';
import { crearCarta } from './usecases/crear_carta.js';

// Minimizador de JS usado => https://www.toptal.com/developers/javascript-minifier
export let puntosJugadores = [];

const modulo = (() => {
  'use strict'

  let deck  = [];
  
  const inicializarJuego = ( numJugadores = 2 ) => {
    puntosJugadores = [];
    for( let div of $.$divCartasJugadores ){
      div.innerHTML = '';
    }
    for ( let sm of $.$ptsJyPC ){
      sm.textContent = '0'
    };
    
    $.$btnPedir.disabled = false;
    $.$btnDetener.disabled = false;

    for(let i = 0; i < numJugadores; i++){
      puntosJugadores.push(0)
    }
    
    deck = crearDeck($.tipos, $.especiales);
    }


  console.log($.$btnPedir);
  
  $.$btnPedir.addEventListener('click', () => {
    const carta = pedirCarta( deck );
  
    const ptsJugador = acumularPuntos(carta, 0);

    console.log(carta);
    console.log(ptsJugador);
    
    crearCarta(carta, 0);
  
    if ( ptsJugador > 21 ) {
      console.warn('Perdiste todo para siempre!!');
      $.$btnPedir.disabled = true;
      $.$btnDetener.disabled = true;
      turnoComputadora(ptsJugador, deck);
    } else if( ptsJugador === 21 ) {
      console.warn('21 Ganaste!!!');
      $.$btnPedir.disabled = true;
      $.$btnDetener.disabled = true;
      turnoComputadora(ptsJugador, deck); 
    }
  
  })
  
  const detener = () => {
    $.$btnPedir.disabled = true;
    $.$btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], deck);
  }
  
  $.$btnDetener.addEventListener('click', detener);
  
  const nuevoJuego = () => {
    inicializarJuego();
  }
  
  $.$btnNuevo.addEventListener('click', nuevoJuego);
  
  return {
    nuevoJuego: inicializarJuego
  }  

})()


