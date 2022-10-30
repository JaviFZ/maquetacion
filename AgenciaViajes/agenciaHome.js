

// let nombre = document.getElementById("nombre");

// let origen = document.getElementById("origen");

// let destino = document.getElementById("destino");

// let nViajeros = document.getElementById("nViajeros");

// let fecha = document.getElementById("fecha");

let solicitudes = [];


function solicitarInformacion() {

    let nombre = document.getElementById("nombre").value;

    let origen = document.getElementById("origen").value;

    let destino = document.getElementById("destino").value;

    let nViajeros = document.getElementById("nViajeros").value;

    let fecha = document.getElementById("fecha").value;

    let datos = {
        nombre,
        origen,
        destino,
        nViajeros,
        fecha,
    }

    solicitudes.push(datos);
    console.log(solicitudes);
}



function filtrar() {
    let arrayFlitrado = solicitudes.filter(
        function (solicitud) {
            if (solicitud.destino.toLowerCase() == "mallorca" || solicitud.destino.toLowerCase() == "galicia" || solicitud.destino.toLowerCase() == "canarias" ) {
                return true;
            }else{
                return false;
            }
        }
    )
    let lista = document.getElementById("solicitudes");

    arrayFlitrado.forEach(function (solicitud) {
        console.log(solicitud);
        lista.innerHTML += `<p>Nombre: ${solicitud.nombre} <br>
                            Origen: ${solicitud.origen}<br>
                            Destino: ${solicitud.destino}<br>
                            Numero de viajeros: ${solicitud.nViajeros}<br>
                            Fecha de salida: ${solicitud.fecha}<br><br>
                            </p>`
    })
}
