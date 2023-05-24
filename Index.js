/*let ConjuntoNumeros=[5,7,3,9]
let Contador=1

console.log ("El primer número es", ConjuntoNumeros[0])
while (Contador < ConjuntoNumeros.length){
    console.log ("El siguiente número es", ConjuntoNumeros[Contador])
    Contador++
}*/
function RestaNatural (num1,num2){
    if (num1<num2){
        return num2-num1;
    } else if (num1==num2){
        return 0;
    }else return num1-num2
}
console.log ("la resta natural es", RestaNatural(90,30))

/*const ParImpar= (elemento) => {
   if (elemento % 2 === 0) {
       return "El elemento ${elemento} es par";
   } else {
       return 'El elemento ${elemento} es impar';
   }
}
let Conjunto2= [7,14,21,28]
console.log (Conjunto2.map(ParImpar)) */

const Promediar = (event) => {
    event.preventDefault()
  const ArrayDef = document.getElementById('Numeros').value.split(",");
  let posicion = 0;
  let promedio = 0;
  for (posicion; posicion < ArrayDef.length; posicion++) {
    promedio += parseInt(ArrayDef[posicion]) / ArrayDef.length;
  }
  return alert (`El promedio es: ${promedio}`)
};
/* Cabe recalcar que esta funcion solo sirve con strings y con nada más,
la misma funcion transforma ese string en un array de strings y posteriormente transforma cada elemento del array en un número*/

const Factorial = (event) =>{
    event.preventDefault()
    num= parseInt(document.getElementById('facto').value)
    let FactorialResultante=1
    while (num>0) {
        FactorialResultante *=num
        num--
    } return alert (`El factorial es: ${FactorialResultante}`)
}
/*Esta funcion al igual que la anterior solo sirve con strings*/

const ContarCaracteres = (event) => {
    event.preventDefault()
    let stringmedir= document.getElementById('Contar_caracteres').value
    document.getElementById("div_contar").innerHTML= `<span>La cantidad de caracteres (incluyendo espacios) es: ${stringmedir.length}</span>`
}

const InvertirString = (event) =>{
    event.preventDefault()
    const string= document.getElementById('TextoInvertir').value
    let posicion=string.length
    Inverso= ""
    while(posicion>0){
        let ParteString=string.slice(posicion-1,posicion)
        Inverso= Inverso + ParteString
        posicion --
    } document.getElementById("div_invertir").innerHTML= `<span>Su texto invertido se ve asi: ${Inverso}<span>`
}
const ContarVocales =(event)=>{
    event.preventDefault()
    const string=document.getElementById('Contar_vocales').value
    let posicion=string.length
    let ContadorVocales=0
    while (posicion>0) {
        let ParteString=string.slice(posicion-1,posicion)
        if(ParteString == "a" || ParteString == "e" || ParteString== "i" || ParteString== "o" || ParteString== "u") {
            ContadorVocales++
        }
        posicion--
    } document.getElementById('Div_vocales').innerHTML= `<span> La cantidad de vocales es: ${ContadorVocales} <span>`
}