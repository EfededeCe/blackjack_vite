import { puntosJugadores } from '../index.js';
/**
 * Compara ls puntos de los jugadores y determina un ganador
 * //@param {Array<Number>} puntosJugadores 
 */
export const determinarGanador = () => {

  let msj   = '';
  const [ puntosMinimos, ptsPc ] = puntosJugadores;

  if ( ((puntosMinimos > ptsPc) || (ptsPc > 21)) && (puntosMinimos <= 21) ){
    msj = `Felicidades, ganaste con ${ puntosMinimos } contra ${ ptsPc }`;
  } else if ( ((ptsPc > puntosMinimos) || (puntosMinimos > 21)) && (ptsPc <= 21) ){
    msj = `Lo siento, perdiste con ${ puntosMinimos } contra ${ ptsPc }`;
  } else {
    msj = `Lo siento, es un empate con ${ puntosMinimos }`;
  }
  setTimeout(() => {
    alert(msj);
  },500)

}

