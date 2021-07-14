$(document).ready(function () {
    // procesos de carga del portal
    $('.datepicker').pickadate(
        {
            format: 'yyyy/mm/dd',
            hiddenName: true,
            closeOnSelect: true,
            editable: false
        }
    );
});

function RegistrarVuelo() {
    var fechaSalida = $("txtFechaSalida").val();
    var horaSalida = $("txtHoraSalida").val();
    var numeroVuelo = $("txtNumVuelo").val();
    var idAerolinea = $("selAerolinea").val();
    var idEncargado = $("selEncargado").val();
    var tiempoEstimado = $("txtTiempoAtencion").val();

    $.ajax({
        url: 'https://localhost:10978/api/RegistroVuelo/RegistrarVuelo',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: {
            fechaSalida: fechaSalida,
            horaSalida: horaSalida,
            numeroVuelo: numeroVuelo,
            idAerolinea: idAerolinea,
            idEncargado: idEncargado,
            tiempoAtencion: tiempoEstimado,

        },
        success: function (data) {
            alert(data);
            console.log(data);
            location.href = "VerificacionVuelos.aspx";
        },
        error: function (data) {
            console.log(data);
            alert(data)
        }
    });



}

