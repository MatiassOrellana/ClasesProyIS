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
//agregando a los arreglos
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

//nota la fecha no soporta el ambito disk
function Persona(name){
    this.name = name;
}

let matias = new Persona("Matias");
 // Output: "Matias"

//Promesas en JavaScript son un objeto que representa el resultado de una operacion asincrona
//nota, que sea asincronica significa que se pueden hacer varias cosas en la función
const desplegarNumero = async (numero) => {

    setTimeout(() => {
        console.log("Desplagar Número", numero);
    }, 3000);

}

desplegarNumero(7);
console.log(matias.name);


