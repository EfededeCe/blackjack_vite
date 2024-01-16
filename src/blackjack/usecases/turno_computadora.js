import { acumularPuntos } from './acumular_puntos.js';
import { determinarGanador } from './determinar_ganador.js';
import { pedirCarta } from './pedirCarta.js';
import { puntosJugadores } from '../index.js';
import { crearCarta } from './crear_carta.js';
// Rutina de la computadora

/**
 * Realiza las acciones de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que debe superar para ganar, o empatar (de otro jugador)
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, deck ) => {
  if( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
  if( !deck ) throw new Error('El deck es necesario');
  let ptsPc;
  do {
  const carta = pedirCarta( deck );
  ptsPc = acumularPuntos(carta, puntosJugadores.length - 1);
  crearCarta( carta, puntosJugadores.length - 1 );
  } while( (ptsPc < puntosMinimos) && (puntosMinimos <= 21) );

  determinarGanador();
}
