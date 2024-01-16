  /**
   * Saca una carta del mazo
   * @param {Array<String>} deck 
   * @returns {String} Devuelve una carta
   */
export const pedirCarta = (deck) => {
  if ( deck.length === 0 ){
    throw 'No hay cartas en el mazo';
  }
  const carta = deck.pop()
  return carta
}
