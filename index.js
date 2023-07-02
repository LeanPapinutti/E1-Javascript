// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

let numero;
numero = prompt("Introducir número")

if(numero % 2 == 0){
    document.write("El número" + numero + " es Par")
}

else{
    document.write("El numero" + numero + " es Impar")
}

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log($`{num1} es mayor que ${num2}`);
    }
    else if(num2 > num1) {
        console.log(`${num2} es mayor que ${num1}`);
    }
    else{
        console.log("Los números son iguales")
    }
}

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function esMultiplodecinco(num) {
    if(num % 5 == 0) {
        console.log(`${num} es multiplo de 5`);
    }
    else{
        console.log(`${num} NO es multiplo de 5`)
    }
}

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirNumeros(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabra(palabra, number) {
    for (let i = 0; i < number; i++) {
        console.log(palabra)
    }
}

imprimirPalabra("hola", 3);

// 6 - Crear una función que reciba un array por parámetros e imprima para consolar todos los valores de ese array.



// 7 - Crear una función que reciba una matriz con 10 números e imprima por consola todos los valores de esa matriz, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de una matriz es "0". 



// 8 - Crea una función que recibe un array de números y un número por parámetro e imprime por consola cada número del array multiplicado por el número pasado por parámetro.

