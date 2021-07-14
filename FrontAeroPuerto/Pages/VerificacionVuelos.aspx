<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="VerificacionVuelos.aspx.cs" Inherits="FrontAeroPuerto.Pages.VerificacionVuelos" %>

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
    <script src="../Assets/Js/InformeVuelos.js"></script>
    <title></title>
</head>
<body>
    <div class="card-body">
        <div class="col-md-12">
            <table id="grid" class="table table-bordered"></table>
        </div>
    </div>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
