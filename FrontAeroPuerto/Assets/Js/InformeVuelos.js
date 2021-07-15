$(document).ready(function () {
    cargarLista();
});

function cargarLista() {
    $("#grid").empty();
    var $grid = $("#grid");
    var encabezado = $("<tr></tr>");
    encabezado.append("<td>  Fecha de salida </td>");
    encabezado.append("<td>  Hora de vuelo </td>");
    encabezado.append("<td>  Número de vuelo </td>");
    encabezado.append("<td>  Aerolinea </td>");
    encabezado.append("<td>  Encargado </td>");
    encabezado.append("<td>  Tiempo de atencion </td>");

    $grid.append(encabezado);
    $.ajax({
        url: 'http://localhost:10978/api/informacionvuelos/informaconvuelo',
        type: 'GET',
        success: function (data) {
            
            $.each(data, function (idx, item) {
                var $tr = $("<tr></tr>");
                $tr.append("<td>" + item.fechaSalida + "</td>");
                $tr.append("<td>" + item.horaVuelo + "</td>");
                $tr.append("<td>" + item.numeroVuelo + "</td>");
                $tr.append("<td>" + item.aerolinea + "</td>");
                $tr.append("<td>" + item.encargado + "</td>");
                $tr.append("<td>" + item.tiempoAtencion + "</td>");


                $grid.append($tr);
            });
        },
        
    });

  


}