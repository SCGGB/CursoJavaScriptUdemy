//*
/*
/** C representa a los treboles
 * H corazones
 * D diamantes
 * S espadas
 */

 let deck = [];
 const tipos=['C','D','H','S'];
 const especiales=['A','J','Q','K'];

 //Esta funcion crea una nueva baraja
 const crearDeck=()=>{

    for(let i=2;i<=10; i++){
        for (let tipo of tipos){
            deck.push(i+tipo);
        }
    }

    for (let tipo of tipos){
        for( let esp of especiales){
            deck.push(esp + tipo);
        }
    }

deck = _.shuffle(deck);
console.log(deck);
return deck;
 }

 crearDeck();

 //Esta funcion me permite tomar una carta

 const pedirCarta =()=>{

    if(deck.length===0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    console.log(deck);
    console.log(carta);
    return carta;
 }
 //pedirCarta();


 const valorCarta =(carta)=>{

    const valor = carta.substring(0,carta.length-1);
    return ( isNaN( valor )) ?
            ( valor==='A') ? 11 : 10
            : valor * 1;

  /*  let puntos=0;
    if( isNaN( valor)){
        //Si regresa verdadero no e snumero
        puntos = (valor === 'A') ? 11 : 10;
    }
    else{
        puntos=valor *1;//se transforma el valor de la carta de string a numero

    }
    console.log(puntos);
*/

 }

 const valor=valorCarta(pedirCarta());
 console.log(valor);