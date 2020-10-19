function analiza(array){
    alert("Numero valores: "array.length);
    let sumaValores = 0;
    for(var i = 0; i<array.length;i++){
        sumaValores = sumaValores + array[i];
    }
    alert("Suma valores: "+ sumaValores);
    alert("Mayor: "+ Math.max(array));
    alert("Mayor: "+ Math.min(array));
}