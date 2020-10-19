function capitaliza(x) {
    alert(x[0].toUpperCase() + x.slice(1).toLowerCase());
}

function palabra(x) {
    alert("Longitud : " + x.length);
    // Vocales
    let contVocales = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] == 'a' || x[i] == 'e' || x[i] == 'i' || x[i] == 'o' || x[i] == 'u') {
            contVocales++;
        }
    }
    alert("Vocales :" + contVocales);
    // Consonantes
    let nConsonantes = 0;
    nConsonantes = x.length - contVocales;
    alert("Consonantes : " + nConsonantes);
}
