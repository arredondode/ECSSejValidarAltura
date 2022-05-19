/*Estructura de Control – Selección Simple

Ejercicio – Validar Altura

•Desarrolle un algoritmo que, de acuerdo a la
altura de una persona, decida si puede entrar a
un juego en un parque de diversiones
•Para poder subirse a la montaña rusa la
persona debe medir 1.30 mts. o más*/

let altura: number = Number(prompt("indique su altrura"));
let alturaMinima: number = 1.3;
if (altura >= alturaMinima) {
  console.log("Usted puede ingresar al juego.");
} else {
  console.log("Usted no puede ingrear al juego.");
}
