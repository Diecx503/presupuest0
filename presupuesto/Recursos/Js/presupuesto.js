//función para fecha del presupuesto
(function () {
    var fecha = new Date();
    var mes = fecha.getMonth();
    var year = fecha.getFullYear();

var pMes = document.getElementById('mes');
        pYear = document.getElementById('year');

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pMes.textContent = meses[mes];

    pYear.textContent = year;
}())
