import $ from '../constantes/constantes.js';
/**
 * Crea la carta y la muestra en el html
 * @param {String} carta 
 * @param {Number} turno 
 */
export const crearCarta = ( carta, turno ) => {
  if ( !carta ) throw new Error('La carta es un argumento obligatorio');
  const imgCarta = document.createElement('img');
  imgCarta.src = `./assets/mazo_poker/${ carta }.png`;
  imgCarta.classList.add('carta');
  $.$divCartasJugadores[ turno ].append( imgCarta );
}

