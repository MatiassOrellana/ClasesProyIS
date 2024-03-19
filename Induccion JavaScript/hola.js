console.log("hola mundo");

//las variables
//let, const, var

const name = "Matias";
//java script no tiene etipado string es una desventaja enorme
//las comilas dobles para evitar los problemas de concatenacion
let lastname = "orellana";

console.log(name, lastname);


//arreglos
let arrayLetters = ["Matias", "A"];
arrayLetters.push("B");
arrayLetters.push("C");
arrayLetters.push("c");

//funcion
const miFuncion = () => {

}
//callback es una funcion que e pasa por otro argumento otra funcion
arrayLetters.forEach((name, index) => {
    console.log(name, "Su posicion en el array es: ", index);
});

//nota: si hay mas de una linea de lógica, se debe usar llaves

//filters
const arrayFiltered = arrayLetters.filter((name) => name != "Matias");
    console.log(arrayFiltered);



