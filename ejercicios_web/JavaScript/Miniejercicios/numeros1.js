function mayor(a, b) {
    if (a < b) {
        alert("El mayor es: " + b);
    } else {
        alert("El mayor es: " + a);
    }
}

function datos(x) {
    let par = 0;
    let divisible3 = 0;
    let divisible5 = 0;
    let divisible7 = 0;

    if (x % 2 == 0) {
        par = 1;
        alert("Es par")
    } else if (x % 3 == 0) {
        divisible3 = 1;
        alert("Divisble entre 3");
    } else if (x % 5 == 0) {
        divisible5 = 1;
        alert("Divisble entre 5");
    } else if (x % 7 == 0) {
        alert("Divisble entre 7");
        divisible7 = 1;
    }
    console.log(divisible5);

    if (par == 0) {
        alert("Es impar")
    } else if (divisible3 == 0) {
        alert("No es divisible entre 3");
    } else if (divisible5 == 0) {
        alert("No es divisible entre 5");
        console.log("Ha llegado");
    } else if (divisible7 == 0) {
        alert("No es divisible entre 7");
    }
}

function sumaValores() {
    let arr = [1,3,9,2,3]
    let suma = 0;
    for (var i = 0; arr.length > i; i++) {
        suma = arr[i] + suma;
    }
    alert("La suma es :" + suma);
}

function factorial(x) {
    let nFactorial = 1;
    for (var i = 2; i <= x; i++) {
        nFactorial = nFactorial * i;
    }
    alert("Factorial : " + nFactorial);
}

function primo(x) {
    let arrPrimos = [];
    for (var i = 2; i < x; i++) {

        if (x % i === 0) {
            console.log("No : " + i);
        } else {
            arrPrimos.push(i);
        }

    }
    alert("Primos :" + arrPrimos);
}

function fibonnaci(x) {
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i <= x + 1; i++) {
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i - 2] + fib[i - 1];
        alert(fib[i]);
    }
}

function primoCifras(x) {
    let arrPrimos = [];
    for (var i = 2; i < x; i++) {

        if (x % i === 0) {
            console.log("No : " + i);
        } else {
            arrPrimos.push(i);
        }

    }
    alert("Ultimo primo: "+arrPrimos[arrPrimos.length-1]);
}
