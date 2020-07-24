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

 let puntosJugador=0,
     puntosComputadora=0;

 //Referencias de HTML
 const btnPedir = document.querySelector('#btnPedir');
 const btnDetener = document.querySelector('#btnDetener');
 const btnNuevo = document.querySelector('#btnNuevo');
 const puntoHTML = document.querySelectorAll('small');
 const divCartasJugador = document.querySelector('#jugador-cartas');
 const divCartasComputadora = document.querySelector('#computadora-cartas');

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
return deck;
 }

 crearDeck();

 //Esta funcion me permite tomar una carta

 const pedirCarta =()=>{

    if(deck.length===0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
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


 //TURNO COMPUTADORA

 const turnoComputadora = (puntosMinimos)=>{

    do{
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntoHTML[1].innerText= puntosComputadora;
        
    //<img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src= `assets/cartas/${ carta}.png`
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21){
            break;
        }
    }while( (puntosComputadora < puntosMinimos) && puntosMinimos <= 21) ;

    setTimeout(()=>{

    
    if (puntosComputadora===puntosMinimos){
        alert('Juego empatado :s');
    }else if(puntosMinimos >21){
        alert('Has perdido :( ');
    }else if ( puntosComputadora > 21){
        alert('Has ganado :)');
    }else{
        alert('Computadora gana');
    }
},10);
 }

 const valor=valorCarta(pedirCarta());

 //Eventos
 btnPedir.addEventListener('click',()=>{
 
        const carta = pedirCarta();

        puntosJugador = puntosJugador + valorCarta(carta);
        puntoHTML[0].innerText= puntosJugador;
        
    //<img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src= `assets/cartas/${ carta}.png`
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if ( puntosJugador > 21){        
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    }else if ( puntosJugador === 21){        
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
       
    }
 });

 btnDetener.addEventListener('click',()=>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
 });

 btnNuevo.addEventListener('click',()=>{
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    deck=[];
    crearDeck();
    puntosJugador=0;
    puntosComputadora=0;
    puntoHTML[0].innerText=0;
    puntoHTML[1].innerText=0;

    divCartasJugador.innerHTML='';
    divCartasComputadora.innerHTML='';
 });