function hoy() {

    let dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    fecha = new Date();
    fecha = fecha.getDay();
    alert("Hoy es " + dias[fecha]);
    
}

function navidad() {
    let fecha = new Date();
    let navidad = new Date("12-24-2020");

    let dias = navidad.getTime() - fecha.getTime();
    dias = Math.round(dias / (1000 * 60 * 60 * 24));

    alert("Faltan "+dias+" dias para Navidad");
}
