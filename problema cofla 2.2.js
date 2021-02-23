const comprar = (roberto)=>{
  if (roberto >= 0.6 && roberto <1  ) {
      alert("comprate el helado de arroz");
  }
  else if(roberto >= 1 && roberto <2  ) {
      alert("comprate el helado de mora");
  }
  else if(roberto >= 2 && roberto <2.5  ) {
      alert("comprate el helado de leche");
  }
  else if (roberto >= 2.5) {
      alert("comprate el helado de leche y mora");
  }
  else{
      alert("comprate el helado de los venezolanos pa");
  }
}
const dinero1 = (prompt("cuanto dinero tienes"))
comprar(dinero1);
const dinero2 = (prompt("cuanto dinero tienes"))
comprar(dinero2);
const dinero3 = (prompt("cuanto dinero tienes"))
comprar(dinero3);

let cantidadAlumnos = prompt("cuantos alumnos asistieron hoy");
let alumnosTotales = [];

for (let i = 0; i < cantidadAlumnos; i++) {
   alumnosTotales[i] = [prompt("nombre del alumno " +(i+1)),0]
}
const tomarAsistencia = (nombre,p,a)=>{
    let precesencia = prompt(nombre);
    if(precesencia == "p" || precesencia == "P"){
        alumnosTotales[p][1]++;
    }
  
}
for (let i = 0; i < 30; i++) {
     for(alumno in alumnosTotales){
         tomarAsistencia(alumnosTotales[alumno][0],alumno)
     }
}
for (alumno in alumnosTotales){
    let res = `${alumnosTotales[alumno][0]}:<br>
    _________ Precesencias: ${alumnosTotales[alumno][1]}:<br>
    _________ Ausencias: ${30 - alumnosTotales[alumno][1]}`;
if(30 - alumnosTotales[alumno][1]> 18){
    res+= `REPROBADO POR INACISTENCIAS <br>`
}
else{
    res+="<br>"
}
document.write(res);
}


class calculadora{
   constructor(){
   }
  suma (num1,num2){
      return  parseInt(num1) + parseInt(num2);
   }
  resta(num1,num2){
      return  parseInt(num1) - parseInt(num2);
   }
   multiplicacion(num1,num2){
      return  parseInt(num1) * parseInt(num2);
   }
   division(num1,num2){
      return  parseInt(num1) / parseInt(num2);
   }
   potenciar(num,exp){
       return parseInt(num)** parseInt(exp)
   }
   raizCuadrada(num){
       return Math.sqrt(num);
   }
   raizCubica(num){
        return Math.cbrt(num)
   }
}
const Calculadora = new calculadora();

alert("Que operacion deseas realizar");
let eleccion = prompt("suma:1 resta:2 multiplicacion:3 division:4 potenciacion:5 raiz cuadrada:6 raiz cubica:7");
if(eleccion==1){
  let num1 = prompt("pon el primer numero");
  let num2 = prompt("pon el segundo numero ");
  res = Calculadora.suma(num1,num2)
  alert(`Tu resultado es ${res}`);
}
else if(eleccion==2){
  num1 = prompt("pon el primer numero");
  num2 = prompt("pon el segundo numero");
  res = Calculadora.resta(num1,num2)
  alert(`Tu resultado es ${res}`)
}
else if(eleccion==3){
  num1 = prompt("pon el primer numero");
  num2 = prompt("pon el segundo numero");
  res = Calculadora.multiplicacion(num1,num2)
  alert(`Tu resultado es ${res}`)
}
else if(eleccion==4){
  num1 = prompt("pon el primer numero");
  num2 = prompt("pon el segundo numero");
  res = Calculadora.division(num1,num2)
  alert(`Tu resultado es ${res}`)
}
else if(eleccion==5){
  num1 = prompt("pon el numero");
  num2 = prompt("pon el exponente");
  res = Calculadora.potenciar(num1,num2)
  alert(`Tu resultado es ${res}`)}
else if(eleccion==6){
      num1 = prompt("pon el numero");
      res = Calculadora.raizCuadrada(num1)
      alert(`Tu resultado es ${res}`)} 
else if(eleccion==7){
          num1 = prompt("pon el numero");
          res = Calculadora.raizCubica(num1)
          alert(`Tu resultado es ${res}`)}
else{
  alert("no se ha encontrado la operacion")
}
const obtenerDatos = (materia)=> {
  materias = {
   matematicas:["jesus romero","manuel","leonardo","celeste","mariangel"],
   geografia:["isabel roa","javier","leonardo","celeste","salome","mariangel"],
   computacion:["jhon gonzalez","manuel","javier","leonardo","celeste","salome","mariangel"],
   castellano:[ "gerzon daza","manuel","javier","salome","mariangel"],
   fisica:["wiliam chacon","manuel","leonardo","celeste","salome",]
  }

  if (materias[materia] !== undefined) {
      return [materias[materia],materia,materias];
  }
  else{
      return materias;
  }
}
const mostrasDatos = (materia)=>{
let informacion = obtenerDatos(materia);
if (informacion !== false) {
   let profesor = informacion[0][0]
   let alumnos = informacion[0];
   alumnos.shift()
   document.write(`El profesor de ${informacion[1]}:es ${profesor} <br> y sus estudiantes son:
    ${alumnos}<br><br>`)
}
}
const cantidadDeClases = (alumno)=>{
let informacion = obtenerDatos();
let cantidad = 0;
for (info in informacion) {
   if (informacion[info].includes(alumno)) {
       cantidad++;
   }
}
document.write(`${alumno} esta en ${cantidad} de clases`)
}



mostrasDatos("matematicas")
cantidadDeClases("manuel")
const roberto = (prompt("pon tu dinero roberto"))


const obtenerDatos = (materia)=> {
  materias = {
   matematicas:["jesus romero","manuel","leonardo","celeste","mariangel"],
   geografia:["isabel roa","javier","leonardo","celeste","salome","mariangel"],
   computacion:["jhon gonzalez","manuel","javier","leonardo","celeste","salome","mariangel"],
   castellano:[ "gerzon daza","manuel","javier","salome","mariangel"],
   fisica:["wiliam chacon","manuel","leonardo","celeste","salome",]
  }

  if (materias[materia] !== undefined) {
      return [materias[materia],materia,materias];
  }
  else{
      return materias;
  }
}

const mostrasDatos = (materia)=>{
let informacion = obtenerDatos(materia);
if (informacion !== false) {
   let profesor = informacion[0][0]
   let alumnos = informacion[0];
   alumnos.shift()
   document.write(`El profesor de ${informacion[1]}: es ${profesor} <br> y sus estudiantes son:
    ${alumnos} <br><br>`)
}
}
const cantidadDeClases = (alumno)=>{
let informacion = obtenerDatos();
let clasesPresentes = [];
let cantidad = 0;
for (info in informacion) {
   if (informacion[info].includes(alumno)) {
       cantidad++;
       clasesPresentes.push("" + info)
   }
}
return `${alumno} esta en ${cantidad} de clases estas son:<br>
${clasesPresentes}`
}
mostrasDatos("fisica")
mostrasDatos("matematicas")
mostrasDatos("geografia")
mostrasDatos("computacion")
mostrasDatos("castellano")
document.write(cantidadDeClases("manuel"))


let materias = {
    matematicas:["jesus romero","manuel","leonardo","celeste","mariangel"],
    geografia:["isabel roa","javier","leonardo","celeste","salome","mariangel"],
    computacion:["jhon gonzalez","manuel","javier","leonardo","celeste","salome","mariangel"],
    castellano:[ "gerzon daza","manuel","javier","salome","mariangel"]
}

  const enroll =(alumno,materia)=>{
    let personas = materias[materia];
    if(personas.length>=7){
        document.write(`sorry ${alumno} you can enroll in ${materia} <br>`)}
    
     else{
      personas.push(alumno);
    if(materia == "matematicas"){
        materias={
            matematicas: personas,
            geografia: materias["geografia"],
            computacion:materias["computacion"],
            castellano:materias["castellano"]
        }
    }
    else if(materia == "geografia"){
        materias={
            matematicas: materias["matematicas"],
            geografia: personas,
            computacion:materias["computacion"],
            castellano:materias["castellano"]
        }
    }
    else if(materia=="computacion"){
        materias={
            matematicas: materias["matematicas"],
            geografia: materias["geografia"],
            computacion:personas,
            castellano:materias["castellano"]
        }
    }
    else if(materia=="castellano"){
        materias={
            matematicas: materias["matematicas"],
            geografia: materias["geografia"],
            computacion:materias["computacion"],
            castellano:personas
        }
    }
    
    document.write(`Congratulations ${alumno}, you have inrolled in ${materia} <br>`)
}
}

document.write(materias["matematicas"])
enroll("emmanuel","matematicas")
enroll("emmarobertouel","matematicas")
enroll("samuel","matematicas")
enroll("javier","matematicas")
enroll("p","matematicas")
enroll("jun","matematicas")
enroll("jan","matematicas")
enroll("juan","matematicas")
document.write(materias["matematicas"])

let trabajo = "240 minutos";
let estudio ="100 minutos";
let tp = "100 minutos";
let housework = "30 minutos";
let descanso = "10 minutos";

for (let i = 0;  i< 14; i++) {
if (i == 0) {
    console.groupCollapsed("semana 1")
}
if (i == 7) {
    console.groupEnd()
    console.groupCollapsed("semana2")
}
console.groupCollapsed("dia "+ (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(housework);
console.groupEnd();
}
console.groupEnd();
console.groupEnd();

let titulo = document.querySelector(".titulo");
titulo.style.color="#005000"
titulo.classList.toggle("grandeee");
titulo.title = "xd"
let res1 = titulo.textContent;
let res2 = titulo.innerHTML;
let res3 = titulo.outerHTML;
alert(res1)
alert(res2)
alert(res3)
titulo.setAttribute("tabindex","0")

let input = document.querySelector(".text")
input.required = " "
input.type = "file"
input.accept = "audio/*"
let clases = document.write(input.className )

let submit = document.querySelector(".submit")
submit.value = "envia cum"

let footer = document.querySelector("#footer");
footer.style.color = "#eb7f9f"
