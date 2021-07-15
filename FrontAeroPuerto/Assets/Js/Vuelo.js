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

    $("#txtNumVuelo").keypress(function (event) {
        validacion(this, event, "numero", 9);
    });
    $("#txtTiempoAtencion").keypress(function (event) {
        validacion(this, event, "numero", 1);
    });

});

function RegistrarVuelo() {
    var fechaSalida = $("#txtFechaSalida").val();
    var horaSalida = $("#txtHoraSalida").val();
    var numeroVuelo = $("#txtNumVuelo").val();
    var idAerolinea = $("#selAerolinea").val();
    var idEncargado = $("#selEncargado").val();
    var tiempoEstimado = $("#txtTiempoAtencion").val();
    var datos = {
        "fechaSalida": fechaSalida,
        "horaSalida": horaSalida,
        "numeroVuelo": numeroVuelo,
        "idAerolinea": idAerolinea,
        "idEncargado": idEncargado,
        "tiempoAtencion": tiempoEstimado,
    };

    $.ajax({
        url: 'http://localhost:10978/api/RegistroVuelo/RegistrarVuelo',
        type: 'POST',
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function (data) {
            //alert(data);
            location.href = "VerificacionVuelos.aspx";
        },
        error: function (data) {
            console.log(data);
            //alert(data)
        }
    });



}

