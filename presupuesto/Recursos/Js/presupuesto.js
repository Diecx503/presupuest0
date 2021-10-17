//Función para fecha del presupuesto
function mFecha(Fecha) {
    var fecha = new Date();
    var mes = fecha.getMonth();
    var year = fecha.getFullYear();

    var pMes = document.getElementById('mes'), //para acceder la ubicación del id
        pYear = document.getElementById('year');

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pMes.textContent = meses[mes]; //agregando el mes al parrafo

    pYear.textContent = year; //agregando el año al parrafo
}
mFecha();

//Mostrar total, total ingreso y total egreso
var pIngreso = document.getElementById('ingresototal');
var tIngreso = 0;
pIngreso.innerHTML = "+" + tIngreso.toFixed(2)

var pEgreso = document.getElementById('egresototal');
var tEgreso = 0;
pEgreso.innerHTML = "-" + tIngreso.toFixed(2)

//Mostrar Total
var pTotal = document.getElementById('montoTotal');
var totalMonto = 0;
pTotal.innerHTML = "$" + totalMonto.toFixed(2)

//Mostrar porcentaje%
var porcentajetotal = document.getElementById('porcentajetotal');
var portotal = 0;
porcentajetotal.innerHTML = portotal + "%"


function opcion(selected) {
    var selecionInEgre = document.getElementById('selecionInEgre');
    var selected = selecionInEgre.options[selecionInEgre.selectedIndex].text;
    return selected;
}

var contenedor_Ingreso=document.getElementById('contenedor_Ingreso');
var contenedor_Egreso=document.getElementById('contenedor_Egreso');
var vIngreso=[];
var vEgreso=[];

//Funcion para boton agregar
function botonagregar(){
    if (opcion() == "Ingreso") {
        contenedor_Ingreso.innerHTML = "";
    let descripcion=document.getElementById('descripcion').value;
    let monto=document.getElementById('monto').value;
    let suma=(parseFloat(tIngreso) +  parseFloat(monto));
    tIngreso= suma;
    pIngreso.innerHTML= "+"  +  tIngreso.toFixed(2)
    //Creacion de cadena par crear Array Ingreso
    let tabla="<tr> <th>" +  descripcion + "</th> <th>"  + monto  + "</th> </tr>";      
        vIngreso.push(tabla);
        console.log(vIngreso);

        //Bucle para escribir datos en el array Ingreso
        for (let i = 0; i < vIngreso.length; i++) {
            contenedor_Ingreso.innerHTML = vIngreso.join("");
    };

        
    }
    


if(opcion()=="Egreso"){
contenedor_Egreso.innerHTML="";
  let descripcion= document.getElementById('descripcion').value;
    let monto= document.getElementById('monto').value;
    let suma= (parseFloat(tEgreso) + parseFloat(monto));
    tEgreso=suma;
    pEgreso.innerHTML="-" + tEgreso.toFixed(2)
    
    //Calculando porcentaje
    portotal= (tEgreso *100)/tIngreso;
    porcentajetotal.innerHTML= Math.ceil(portotal) + " % " 
    
    // Calcular porcentaje por cada egreso
    var porcentaje_Egreso= (monto * 100)/ tIngreso;
    // Creacion de cadena para array Egreso
    let tabla="<tr> <th>" + descripcion + "</th> <th>" + monto + "</th> <td class='text-white bg-dark'>" + Math.ceil(porcentaje_Egreso) + " % </td> </tr>";
    vEgreso.push(tabla);
    
    //Bucle para escribir datos en el array de Egresos
    for(let i=0; i <vEgreso.length; i++){
    contenedor_Egreso.innerHTML= vEgreso.join("");
    };
}
 //dinero total calculados
    pTotal=document.getElementById('montoTotal');
totalMonto=(parseFloat(tIngreso)-parseFloat(tEgreso));
    pTotal.innerHTML= "$" + totalMonto.toFixed(2)
}
// funcion de validacion 
function validacion(){
if (document.getElementById('descripcion').value== ""){
alert('ERROR DEBE DE COMPLETAR FORMULARIO DESCRIPCION');
    return false;
 }
 else if (document.getElementById('monto').value == ""){
 alert ('ERROR DEBE COMPLETAR EL FORMULARIO DE MONTO');
        return false;
 }
  botonagregar();
    
}
 //Funcion para limpiar formulario
function limpiar(){
document.getElementById('descripcion').value="";
document.getElementById('monto').value="";    
}