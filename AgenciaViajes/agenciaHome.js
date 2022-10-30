

// let nombre = document.getElementById("nombre");

// let origen = document.getElementById("origen");

// let destino = document.getElementById("destino");

// let nViajeros = document.getElementById("nViajeros");

// let fecha = document.getElementById("fecha");

let solicitudes = [];          // // creamos array vacío


function solicitarInformacion() {       //// funcion para guardar la info de cada elemento por su Id, 

    let nombre = document.getElementById("nombre").value;       //// primero en variables 

    let origen = document.getElementById("origen").value;

    let destino = document.getElementById("destino").value;

    let nViajeros = document.getElementById("nViajeros").value;

    let fecha = document.getElementById("fecha").value;

    let datos = {                                              //// y luego creamos un objeto literal JSON con todas las variables
        nombre,
        origen,
        destino,
        nViajeros,
        fecha,
    }

    solicitudes.push(datos);                                   //// introducimos el objeto creado en el array vacío y lo mostramos por consola.
    console.log(solicitudes);
}



function filtrar() {                                            ////funcion para filtrar las solicitudes.
    let arrayFlitrado = solicitudes.filter(                     ////creamos una variable, que va a ser igual al array anterior filtrado con el metodo .filter de los arrays
        function (solicitud) {                                  ////en los parametros de filter hacemos otra función que va a comparar el valor de cada solicitud de destino
            if (solicitud.destino.toLowerCase() == "mallorca" || solicitud.destino.toLowerCase() == "galicia" || solicitud.destino.toLowerCase() == "canarias" ) {
                return true;
            }else{
                return false;                                  ////en caso false descartará la solicitud en el array
            }
        }
    )
    let lista = document.getElementById("solicitudes");         //// en la variable guardamos el resultado de solicitudes recogido del document(pagina completa).

    arrayFlitrado.forEach(function (solicitud) {                //// por ultimo recorremos el arrayFiltrado en el que se encuentran las solicitudes 
        console.log(solicitud);                                 ////en los parametros ponemos una funcion que primero nos muestra por consola las solicitudes
        lista.innerHTML += `<p>Nombre: ${solicitud.nombre} <br>  
                            Origen: ${solicitud.origen}<br>
                            Destino: ${solicitud.destino}<br>
                            Numero de viajeros: ${solicitud.nViajeros}<br>
                            Fecha de salida: ${solicitud.fecha}<br><br>
                            </p>`
    })                                                          ////con innerHTML introducimos en la pagina el codigo html con la información recogida en la variable lista
}
