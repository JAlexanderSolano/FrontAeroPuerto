$(document).ready(function () {
    cargarLista();
});

function cargarLista() {
    $("#grid").empty();
    var $grid = $("#grid");
    var $tr = $("<tr></tr>");
    $.ajax({
        url: 'http://localhost:10978/api/InformacionVuelos/InformaconVuelo',
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (data) {
            $.each(data, function (idx, item) {
                $tr.append("<td>" + item.fechaSalida + "</td>");
                $tr.append("<td>" + item.horaVuelo + "</td>");
                $tr.append("<td>" + item.numeroVuelo + "</td>");
                $tr.append("<td>" + item.aerolinea + "</td>");
                $tr.append("<td>" + item.encargado + "</td>");
                $tr.append("<td>" + item.tiempoAtencion + "</td>");


                $grid.append($tr);
            });
        },
        error: function (request, msg, error) {
            alert("error");
        }
    });
}