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