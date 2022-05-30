
1.// solicitar 3 numeros ( entre el 1 y el 100) y definir cual es el mayor


//let numeromayor = prompt("Cual es el numero mayor de los 3?");
//declaracion de variables
alert("Escribe 3 numeros del 1 al 100");
const num1 = parseFloat(prompt("Escribe el primer número: "));
const num2 = parseFloat(prompt("Escribe el segundo número: "));
const num3 = parseFloat(prompt("Escribe el tercero número: "));

console.log("Los numeros son:", num1, num2, num3);

let Mayor;
if (num1>=num2 && num1 >= num3){
    Mayor = num1;
}
else if(num2>=num1 && num2 >= num1){
    Mayor = num2;
}
else {
    Mayor = num3;
}
console.log("el numero mayor es:" + Mayor);




//2.

let Menor;
if (num1 <= num2 && num1 <= num3){
    Menor = num1;
}
else if(num2 <= num1 && num2 <= num1){
    Menor = num2;
}
else {
    Menor = num3;
}
console.log("el numero menor es:" + Menor);


//3 
solucion

