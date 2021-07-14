<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RegistroVuelo.aspx.cs" Inherits="FrontAeroPuerto.Pages.RegistroVuelo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="../Assets/jquery-ui-1.10.4.custom/jquery-ui-1.10.4.custom/js/jquery-1.10.2.js"></script>

    <%--    Libreria DatePicker--%>
    <script src="../Assets/DatePicker/lib/picker.js"></script>
    <script src="../Assets/DatePicker/lib/picker.date.js"></script>
    <script src="../Assets/DatePicker/lib/picker.time.js"></script>
    <script src="../Assets/DatePicker/lib/legacy.js"></script>
    <script src="../Assets/DatePicker/lib/translations/es_ES.js"></script>


    <%--  Estilos DatePicker--%>
    <link href="../Assets/DatePicker/lib/themes/default.css" rel="stylesheet" />
    <link href="../Assets/DatePicker/lib/themes/default.date.css" rel="stylesheet" />
    <link href="../Assets/DatePicker/lib/themes/default.time.css" rel="stylesheet" />

    <script src="../Assets/Js/FuncionesGlobales.js"></script>
    <script src="../Assets/Js/Vuelo.js"></script>

    <title></title>
</head>
<body>
    <div class="container">
        <form>
            <div class="mb-3">
                <h1 class="h1 text-center">Registro vuelo</h1>
            </div>
            <div class="mb-3">
                <label for="lblfechaSalida" class="form-label">Fecha de salida</label>
                <input type='text' class="form-control datepicker" id="txtFechaSalida"/>

            </div>
            <div class="mb-3">
                <label for="lblHoraSalida" class="form-label">Hora Salida</label>
                <input type="time" class="form-control" id="txtHoraSalida" />
            </div>
            <div class="mb-3">
                <label for="lblNumeroVuelo" class="form-label">Número de vuelo</label>
                <input type="text" class="form-control" id="txtNumVuelo" />
            </div>
            <div class="mb-3">
                <label for="lblAerolinea" class="form-label">Aerolinea</label>
                <select class="form-control" id="selAerolinea">
                    <option value="1">AVIANCA</option>
                    <option value="2">LATAM</option>
                    <option value="3">VIVA AIR</option>
                    <option value="4">ADA</option>

                </select>

            </div>
            <div class="mb-3">
                <label for="lblEncargado" class="form-label">Encargado</label>
                <select class="form-control" id="selEncargado">
                    <option value="1">FERNANDO ESPINOSA</option>
                    <option value="2">FULANITO PEREZ</option>
                    <option value="3">ADRIAN HOOKER</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="lblTiempoAtencion" class="form-label">Tiempo de atencion</label>
                <input type="text" class="form-control" id="txtTiempoAtencion" />
            </div>
            <div class="d-flex justify-content-center" onclick="RegistrarVuelo()">
                <button type="button" class="btn btn-success">Acceder</button>
            </div>
        </form>
    </div>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
