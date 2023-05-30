// Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por la pantalla del navegador y la consola.

var numero = 1;

var string = "Cadena de texto";

var booleano = true;

console.log(numero);
document.write(numero);

document.write("<br>");

console.log(string);
document.write(string);

document.write("<br>");

console.log(booleano);
document.write(booleano);
document.write("<br>");

// De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).Deberás imprimir el resultado por la pantalla del navegador y la consola.

//numero = 1

resultado = numero + 1;
console.log("1 + 1 = ", resultado);
document.write("1 + 1 = ", resultado);
document.write("<br>");

resultado = numero - 1;
console.log("1 - 1 = " + resultado);
document.write("1 - 1 = " + resultado);
document.write("<br>");

resultado = numero * 5;
console.log("1 * 5 = ", resultado);
document.write("1 * 5 = " + resultado);
document.write("<br>");

resultado = numero / 3;
console.log("1 / 3 = ", resultado);
document.write("1 / 3 = ", resultado);
document.write("<br>");

//Esta operacion seria la misma de dos formas diferentes
//numero *=2
//numero = numero * 2

//De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.

var string1 = "texto1";
var string2 = "texto2";

console.log(string1 + " y " + string2);
document.write(
  "concatenacion de string1 y string2 = " + string1 + " y " + string2
);
document.write("<br>");

//FUNCIONES

//Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]" con un parámetro para el nombre.

var nombre = "Alex";
function saludo() {
  console.log(`Hola, ${nombre}`);
  document.write(`Hola, ${nombre}`);
}
saludo(); //con esto ejecuto la funcion
document.write("<br>");

//Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás imprimir el resultado por la pantalla del navegador y la consola.

function sumaNumeros(num1, num2) {
  var resultado = num1 + num2;

  document.write("La suma es: " + resultado + "<br>");

  console.log("La suma es: " + resultado);
}
sumaNumeros(5, 7);

//Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla del navegador y la consola.

function determinarParidad(numero) {
  if (numero % 2 === 0) {
    // El número es par
    var mensaje = "El número " + numero + " es par.";

    document.write(mensaje + "<br>");

    console.log(mensaje);
  } else {
    // El número es impar
    var mensaje = "El número " + numero + " es impar.";

    document.write(mensaje + "<br>");

    console.log(mensaje);
  }
}

determinarParidad(6);

//OBJETOS

//● Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
//● Crear una función que devuelva la marca del carro.
//● Crear una función que devuelva la cantidad de puertas que tiene el carro.
//● Crear una función que devuelva un atributo del objeto anidado.

var carro = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  color: "Rojo",
  motor: {
    tipo: "V6",
    cilindraje: 3000,
    combustible: "Gasolina",
  },
  puertas: 4,
};

function obtenerMarcaCarro(carro) {
  return carro.marca;
}

function obtenerCantidadPuertas(carro) {
  return carro.puertas;
}

function obtenerAtributoMotor(carro, atributo) {
  return carro.motor[atributo];
}

console.log("Marca del carro:", obtenerMarcaCarro(carro));
document.write("Marca del carro:", obtenerMarcaCarro(carro) + "<br>");
console.log("Cantidad de puertas:", obtenerCantidadPuertas(carro));
document.write("Cantidad de puertas:", obtenerCantidadPuertas(carro) + "<br>");
console.log("Tipo de motor:", obtenerAtributoMotor(carro, "tipo"));
document.write("Tipo de motor:", obtenerAtributoMotor(carro, "tipo") + "<br>");
console.log("Cilindraje del motor:", obtenerAtributoMotor(carro, "cilindraje"));
document.write(
  "Cilindraje del motor:",
  obtenerAtributoMotor(carro, "cilindraje") + "<br>"
);
console.log("Tipo de combustible:", obtenerAtributoMotor(carro, "combustible"));
document.write(
  "Tipo de combustible:",
  obtenerAtributoMotor(carro, "combustible") + "<br>"
);

//ARRAYS

//Crear un array de 10 números
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)

function imprimirNumerosArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    document.write(array[i] + "<br>");
  }
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirNumerosArray(numeros);

//Crear una función que añada un número al array

function agregarNumeroAlArray(array, numero) {
  array.push(numero);
}

var numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);
document.write("Array original:", numeros + "<br>");

agregarNumeroAlArray(numeros, 6);
console.log("Array modificado:", numeros);
document.write("Array modificado:", numeros + "<br>");

//Crear una función que elimine los números pares de ese array.

function eliminarNumerosPares(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArray.push(array[i]);
    }
  }

  array.length = 0;
  Array.prototype.push.apply(array, newArray);
}
eliminarNumerosPares(numeros);
console.log("Array modificado - números pares eliminados:", numeros);
document.write("Array modificado - números pares eliminados:", numeros + "<br>");


//Crear una función que devuelva el número mayor de un array.

function encontrarNumeroMayor(array) {
  var mayor = array[0];
  
  for (var i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  
  return mayor;
}

var numeros = [4, 2, 9, 5, 1, 8, 6, 3, 7];
var numeroMayor = encontrarNumeroMayor(numeros);
console.log("El número mayor es:", numeroMayor );
document.write("El número mayor es:", numeroMayor + "<br>");

//Crear una función que devuelva el número menor de un array.

function encontrarNumeroMenor(array) {
  var menor = array[0];
  
  for (var i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
  }
  
  return menor;
}

var numeros = [4, 2, 9, 5, 1, 8, 6, 3, 7];
var numeroMenor = encontrarNumeroMenor(numeros);
console.log("El número menor es:", numeroMenor);
document.write("El número menor es:", numeroMenor + "<br>");

//Crear un función que convierta en minúsculas todas las letras de un texto.

function convertirMinusculas(texto) {
  return texto.toLowerCase();
}

var textoOriginal = "Hola Mundo";
var textoMinusculas = convertirMinusculas(textoOriginal);
console.log("Texto en minúsculas:", textoMinusculas);
document.write("Texto en minúsculas:", textoMinusculas + "<br>");


//Crear una función que convierta en mayúsculas todas las letras de un texto.

function convertirMayusculas(texto) {
  return texto.toUpperCase();
}

var textoOriginal = "Hola Mundo";
var textoMayusculas = convertirMayusculas(textoOriginal);
console.log("Texto en mayúsculas:", textoMayusculas);
document.write("Texto en mayúsculas:", textoMayusculas + "<br>");

//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.

function capitalizarPrimerasLetras(nombres) {
  var nombresCapitalizados = [];
  
  for (var i = 0; i < nombres.length; i++) {
    var nombre = nombres[i];
    var nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    nombresCapitalizados.push(nombreCapitalizado);
  }
  
  return nombresCapitalizados;
}

var nombresOriginales = ["juan", "maría", "pedro", "laura"];
var nombresCapitalizados = capitalizarPrimerasLetras(nombresOriginales);
console.log("Nombres capitalizados:", nombresCapitalizados);
document.write("Nombres capitalizados:", nombresCapitalizados + "<br>");


//MANIPULACIÓN DEL DOM

//Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.

var boton = document.getElementById("miBoton");

// Agregar un event listener al botón para detectar el clic
boton.addEventListener("click", function() {
  alert("Factoria F5 manda");
});


//Cambiar el contenido de un elemento HTML mediante JavaScript.

var parrafo = document.getElementById("miParrafo");

parrafo.textContent = "Este es un nuevo contenido para el párrafo.";

//Ocultar y mostrar elementos HTML utilizando JavaScript.

var parrafo = document.getElementById("otroParrafo");
var botonMostrar = document.getElementById("botonMostrar");
var botonOcultar = document.getElementById("botonOcultar");

botonMostrar.addEventListener("click", function() {
  parrafo.style.display = "block";
});

botonOcultar.addEventListener("click", function() {
  parrafo.style.display = "none";
});

//Crear un array de 10 nombres 
//Crear una función que imprima en pantalla una lista con los nombres del array de nombres.

var nombres = ["Juan", "María", "Pedro", "Laura", "Carlos", "Ana", "Miguel", "Sofía", "Luis", "Elena"];

function imprimirNombres() {
  var lista = document.getElementById("listaNombres");
  
  for (var i = 0; i < nombres.length; i++) {
    var nombre = nombres[i];
    var elementoLista = document.createElement("li");
    elementoLista.textContent = nombre;
    lista.appendChild(elementoLista);
  }
}

// Llamar a la función para imprimir la lista de nombres
imprimirNombres();

//Crear un array de números.
//Crear una función que pinte en pantalla cuántos números tiene el array de números.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarCantidadNumeros() {
  var cantidad = numeros.length;
  var mensaje = "El array tiene " + cantidad + " números.";
  document.getElementById("resultado").textContent = mensaje;
}
mostrarCantidadNumeros();

//Crea los nodos necesarios para imprimir un formulario.

