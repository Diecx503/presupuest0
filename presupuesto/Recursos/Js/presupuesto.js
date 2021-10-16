//Función para fecha del presupuesto
function mFecha(Fecha) {
    var fecha = new Date();
    var mes = fecha.getMonth();
    var year = fecha.getFullYear();

    var pMes = document.getElementById('mes'),//para acceder la ubicación del id
        pYear = document.getElementById('year');

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pMes.textContent = meses[mes]; //agregando el mes al parrafo

    pYear.textContent = year; //agregando el año al parrafo
}
mFecha();

<<<<<<< HEAD
// motrar ingreso en pantalla
var pIngreso= document.getElementById('ingresototal');
var contador_Ingreso=0;
pIngreso.innerHTML= "+"+ contador_Ingreso + 

// motrar ingreso en pantalla
var pEgreso= document.getElementById('egresototal');
var contador_Egreso=0;
pEgreso.innerHTML= "+"+ contador_Egreso + 
=======
//Mostrar total, total ingreso y total egreso
var pIngreso = document.getElementById('ingresototal');
var tIngreso = 0;
pIngreso.textContent = tIngreso;

