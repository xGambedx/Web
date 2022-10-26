$(function(){

    $("#videos").click(function(){
        fetch("paginas/about.html")
        .then(response => response.text())
        .then(data => {
            $("#main-content").html(data);
        });
    })

    // LEER SERVICIO WEB
    fetch("https://servicios.campus.pe/empleados.php")
    .then(response => response.json())
    .then(data => {
        llenarTablaEmpleados(data);
    });

    function llenarTablaEmpleados(data) {
        let contenidoTabla = "";
        data.map(item => {
            let fila = "<tr>";
            fila += "<td>" + item.idempleado + "</td>";
            fila += "<td>" + item.apellidos + "</td>";
            fila += "<td>" + item.nombres + "</td>";
            fila += "<td>" + item.cargo + "</td>";
            fila += "<td>" + item.tratamiento + "</td>";
            fila += "<td>" + item.fechanacimiento + "</td>";
            fila += "<td>" + item.fechacontratacion + "</td>";
            fila += "<td>" + item.direccion + "</td>";
            fila += "<td>" + item.ciudad + "</td>";
            fila += "<td>" + item.usuario + "</td>";
            fila += "<td>" + item.codigopostal + "</td>";
            fila += "<td>" + item.pais + "</td>";
            fila += "<td>" + item.telefono + "</td>";
            fila += "<td>" + item.clave + "</td>";
            fila += "<td>" + item.foto + "</td>";
            fila += "<td>" + item.jefe + "</td>";
            fila += "</tr>";
            contenidoTabla += fila;
        });
        $("#tbody-empleados").html(contenidoTabla);
    }
})