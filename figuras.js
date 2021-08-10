// CODIGO DEL CUADRADO
console.group("Cuadrado");

//CODIGO CUADRADO SIN FUNCIONES

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + "cm2");
 */

//CODIGO CUADRADO CON FUNCIONES

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//LLAMADA A LAS FUNCIONES
perimetroCuadrado(5);
areaCuadrado(5);

console.groupEnd();

//CODIGO DEL TRIANGULO
console.group("Triangulo");

//CODIGO TRIANGULO SIN FUNCIONES

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del cuadrado miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"
);
const alturaTringulo = 5.5;
console.log("La altura del tringulo es de: " + alturaTringulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del tringulo mide: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTringulo) / 2;
console.log("El area del tringulo es: " + areaTriangulo); */

//CODIGO TRIANGULO CON FUNCIONES

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//LLAMADA A LAS FUNCIONES
perimetroTriangulo(5, 5, 4);
areaTriangulo(4, 5.5);

console.groupEnd();

//CODIGO CIRCULO
console.group("Circulo");

//CODIGO CIRCULO SIN FUNCIONES

/* const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo);

const diametroCirculo = radioCirculo * 2;
console.log("EL diametro del circulo es: " + diametroCirculo);
const PI = Math.PI;
console.log("PI es: " + PI);
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo);
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El area del circulo es: " + areaCirculo + "cm2"); */

//CODIGO CIRCULO CON FUCIONES

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
}

function areaCirculo(radio) {
  return radio * radio * Math.PI;
}

//LLAMADA A LAS FUNCIONES
perimetroCirculo(10);
areaCirculo(5);

console.groupEnd();

//INTERACTUAMOS CON HTML
function calcularPerimetroCUadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);

  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);

  alert(area);
}

function calcularPerimetroTringulo() {
  const input1 = document.getElementById("inputTringuloLado1");
  const value1 = parseInt(input1.value);
  

  const input2 = document.getElementById("inputTrianguloLado2");
  const value2 = parseInt(input2.value);

  const input3 = document.getElementById("inputTrianguloBase");
  const value3 = parseInt(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTringulo() {
  const input1 = document.getElementById("inputTrianguloBase");
  const value1 = input1.value;

  const input2 = document.getElementById("inputTrianguloAltura");
  const value2 = input2.value;
 
  const area = areaTriangulo(value1, value2);
  alert(area);
}
