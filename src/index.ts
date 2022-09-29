/*
Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
• Tenga en cuenta que la clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje
indicándonos que hemos agotado todas las oportunidades
• Si acertamos la clave, saldremos directamente del programa
*/

let InpPasword: string;
let Pasword: string = "eureka";
let i: number = 1;

while (i <= 3 && InpPasword !== Pasword) {
  InpPasword = prompt(`Tiene ${4 - i} para ingresar su clave`);
  i++;
}

if (InpPasword === Pasword) {
  console.log("contraseña correcta");
} else {
  console.log("contraseña incorrecta");
}
