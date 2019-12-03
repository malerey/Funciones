// 1. Cuando la funcion recibe solo un parametro, los parentesis son opcionales
// (En la declaracion de la funcion, no en su invocacion.)

// 2. Las llaves y la palabra "return" quedan implicitas en funciones de una sola linea 

// 3. El return corta la ejecucion de la funcion (incluso dentro de un for, o un if, o un switch)

// 4. Puedo tener mas de un return en una funcion si y solo si estos estan en una estructura
// condicional (if, switch)

const suma = (array) => {

  if (typeof array[0] == "number") {
    let acc = 0;
    for (let i = 0; i < array.length; i++) {
      acc += array[i];
    }
    return acc;
  }
  else {
    return "No se enviaron parametros numericos a la funcion"
  }
}

console.log(suma([1, 2, 3, 4]))




// 3. Crear la funcion obtenerResto(a, b) que retorne el resto de dividir a y b.

const obtenerResto = (a, b) => a % b;

// console.log(obtenerResto(10, 2));

// 4. Crear la funcion esPar(num) que retorne true si el numero es par, y false si es impar.
// Dentro de esa funcion debe utilizarse lo retornado por la funcion obtenerResto creada en 2.3.

const esPar = num => obtenerResto(num, 2) === 0;

// es exactamente equivalente a esta manera: 
// const esPar = num => {
//   if (obtenerResto(num, 2) === 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
// };


// 5. Declarar la siguiente variable:
// const listaDeNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
// Crear una funcion llamada encontrarImpares() que recorre el array recibido por parametros
// y retorna un nuevo array compuesto solo por los numeros impares.
// Para saber si un número es par debe utilizarse la funcion esPar() creada en 2.4.

const listaDeNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

const encontrarImpares = arr => {
  let numerosImpares = [];
  for (let i = 0; i < arr.length; i++) {
    if (!esPar(arr[i])) {
      // equivalente a escribir
      // if (esPar(arr[i]) === false) {
      numerosImpares.push(arr[i])
    }
  }
  return numerosImpares
};

console.log(encontrarImpares(listaDeNumeros));

const sumar = (num1, num2) => {
  return num1 + num2
};






