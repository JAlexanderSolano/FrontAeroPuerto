// Funciones para validar expresiones regulares en los campos de texto
function validacion(InputBox, e, tipo, MaxLenght) {
    if (tipo == "texto") {
        var regex = new RegExp("^[A-Za-z]");
    }
    if (tipo == "numero") {
        var regex = new RegExp("^[0-9 ]+$");
    }
    if (tipo == "placa") {
        //var regex = new RegExp("^[A-Za-z0-9- ]+$");
        var regex = new RegExp("[A-Za-z0-9-]");

    }
    if (tipo == "textoynumero") {
        var regex = new RegExp("^[A-Za-z0-9]");
    }

    if (tipo == "cuentabancaria") {
        var regex = new RegExp("^[0-9 -_ ]+$");
    }

    if (tipo == "fecha") {
        var regex = new RegExp("^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$");
    }


    if (tipo == "fechas") {
        //var regex = new RegExp("^[0-9]{2}(\/)([0-9]){2}(\/)([0-9]){4}+$");
        //var regex = new RegExp("^[0-9][0-9](\/){1}([0-9][0-9])(\/){1}([0-9][0-9][0-9][0-9]){4}+$");
        var regex = new RegExp("^[0-9 \/]+$");
    }


    var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (((!regex.test(key)) && (e.charCode != 32) && (e.charCode != " ") && (key != "\u0008")) || ((InputBox.value.length > MaxLenght) && (key != "\u0008"))) {
        e.preventDefault();
        return false;
    }


}



function postvalidacion(cadena, tipo, MaxLenght) {

    var string = cadena.toUpperCase();

    if (tipo == "placa") {
        var regex = new RegExp("^[A-Z]{3}[0-9]{3}$");
    }

    if (tipo == "placamoto") {
        var regex = new RegExp("^[A-Z]{3}[0-9]{2}[A-Z]{1}$");
    }


    if (tipo == "email") {
        var regex = new RegExp("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/");
    }

    if (tipo == "fecha") {
        var regex = new RegExp("^([0-3][0-9]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$");
    }

    if (!regex.test(string)) {
        //alert("Error en la placa");
        return false;
    }
    else {
        return true;
    }


}