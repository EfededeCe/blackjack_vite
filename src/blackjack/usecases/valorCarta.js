/**
 * Calcula el valor numérico de la carta
 * @param {String} carta Carta a analizar
 * @returns {Number} Puntaje de la carta
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 3)
  if ( isNaN( valor ) ){
    return (valor === 'A') ? 11 : 10;
  } else {
    return Number(valor);
  }
}

