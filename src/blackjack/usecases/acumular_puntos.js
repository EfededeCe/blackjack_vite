import { puntosJugadores} from '../index.js';
import { valorCarta } from "./valorCarta.js";
import $ from '../constantes/constantes.js'
/**
 * Suma el puntaje en el html
 * @param {String} carta Carta del jugador
 * @param {Number} turno Número del turno que corresponde
 * @returns {Number} Retorna el total de puntos del jugador de turno
 */
export const acumularPuntos = ( carta, turno ) => {
  puntosJugadores[ turno ] = puntosJugadores[ turno ] + valorCarta(carta);
  $.$ptsJyPC[ turno ].innerText = puntosJugadores[ turno ];

  return puntosJugadores[ turno ]
}
