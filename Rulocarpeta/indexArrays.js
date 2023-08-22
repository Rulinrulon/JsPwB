//Actividad 1 Respuesta: [10,2,30,4,5]
//const numbers = [1, 2, 3, 4, 5];
//numbers[0] = 10;
//numbers[2] = 30;
//console.log(numbers);

//Actividad 2
//const array = ["nombre", "hamburguesa", "cokucha"];

//function procesarPedido(pedidos) {
// const nombre = pedidos.shift();
// pedidos.unshift("bebida");
// pedidos.push(nombre);
// console.log(pedidos);
// return pedidos
//}

// console.log(procesarPedido(array));

//Actividad 3
//let numero = [1, 2, 3, 4, 5, 6, 7];

//function sumarPares(numeros) {
//  let suma = 0;
//  for (let i = 0; i < numeros.length; i++) {
//    if (numeros[i] % 2 === 0) {
//      suma = suma + numeros[i];
//    }
//  }
//  console.log(suma); // imprime el elemento en la posición i
//}

//sumarPares(numero);

//Actividad 4
//let palabras = ["computadora", "casa", "tenga", "marica"];
//
//function terminanEnA(palabras) {
//  const terminaEnA = palabras.every((palabra) => palabra.endsWith("a"));
//  console.log(terminaEnA);
//}
//
//terminanEnA(palabras);

//Actividad 5
//let numeros = [5, -10, -2, -25, -7];
//
//function ordenarValorAbsoluto(numbers) {
//  let valores = [];
//  for (let number of numbers) {
//    const numeroAbsoluto = Math.abs(number);
//    valores.push(numeroAbsoluto);
//  }
//
//  return valores.sort(function (a, b) {
//    return a - b;
//  });
//}
//
//console.log(ordenarValorAbsoluto(numeros));

//Actividad 6
//let palabras = ["hola", "uno", "Buenos Aires"];
//let palabra = "Buenos Aires";
//
//function buscaPalabras(palabras, palabra) {
//  const indice = palabras.indexOf(palabra);
//  let array = [];
//  for (let palabra of palabras) {
//    if (palabra.length > indice) {
//      array.push(palabra);
//    }
//  }
//
//  console.log(array);
//}
//
//buscaPalabras(palabras, palabra);