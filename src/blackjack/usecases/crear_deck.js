
/**
 * Crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: [ 'A', 'J', 'Q', 'K' ]
 * @param {Array<String>} tiposEspeciales Ejemplo: [ 'co', 'pi', 'tr', 'di' ]
 * @returns {Array<String>} retorna nuevo deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  if( !tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
  if( !tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

  let deck = [];
  
  for( let i = 2; i <= 10; i++ ){
    for( let tipo of tiposDeCarta ){
      deck.push(i + '_' + tipo)
    }
  }

  for( let esp of tiposEspeciales ) {
    for( let tipo of tiposDeCarta ) {
      deck.push(esp + '_' + tipo)
    }
  }

  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i --){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }
  console.time('shuffle');
  deck = shuffle(deck);
  console.timeEnd('shuffle');
  return deck;
}



