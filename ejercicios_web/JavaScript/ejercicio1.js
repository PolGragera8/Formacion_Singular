// Generamos número aleatorio
let numeroAleatorio = Math.floor(Math.random() * (100 - 0));
console.log(numeroAleatorio);
// Variable de true false acertar
let acierto = 0;
// Variable de fallos
let fallos = 0;
// Bucle
do{

    // Recogemos respuesta
    let respuesta = prompt("Introduce el valor entre 0 y 100");
    // Comparacion
    if(respuesta==numeroAleatorio){
        
        acierto = 1;
        alert("Has acertado!");
        
    }else{
        
        // Comparacion de alto bajo
        if(numeroAleatorio>respuesta){
            alert("Demasiado bajo, vuelve a intentar");
        }else{
            alert("Demasiado alto, vuelve a intentar");
        }
        
    }
    // Contador de fallos
    fallos++;
    
}while(acierto==0);
// Alert de fallos
alert("Número de intentos: "+fallos);