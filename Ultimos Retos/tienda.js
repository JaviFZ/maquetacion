let carrito = [];         


// function solicitarInformacion(n, p) {       
//     let n = $("#card_title.n").text();       
//     let p = $("#price.p").text();
//     let datos = {                                              
//         n,
//         p,
//     }
//     carrito.push(datos);
//     console.log(carrito);
// }


// let prenda1 = document.getElementById("#card_title");
// console.log(prenda1);






function solicitarInformacion1() {       
     let nombre1 = $("#card_title1").text();       
     let precio1 = $("#price1").text();
     let datos1 = {                                              
        nombre : nombre1,
        precio : precio1,
    }
    carrito.push(datos1);
    console.log(carrito);  
}

function solicitarInformacion2() {  
    let nombre2 = $("#card_title2").text();       
    let precio2 = $("#price2").text();
    let datos2 = {                                              
        nombre : nombre2,
        precio : precio2,
    }
    carrito.push(datos2);  
    console.log(carrito);  
}

function solicitarInformacion3() {
     let nombre3 = $("#card_title3").text();       
     let precio3 = $("#price3").text();
     let datos3 = {                                              
        nombre : nombre3,
        precio : precio3,
    }
    carrito.push(datos3);  
    console.log(carrito);  
}

function solicitarInformacion4() {
    let nombre4 = $("#card_title4").text();       
    let precio4 = $("#price4").text();
    let datos4 = {                                              
        nombre : nombre4,
        precio : precio4,
   }
   carrito.push(datos4);
   console.log(carrito);    
}

function solicitarInformacion5() {
     let nombre5 = $("#card_title5").text();       
     let precio5 = $("#price5").text();
     let datos5 = {                                              
        nombre :  nombre5,
        precio : precio5,
    }
    carrito.push(datos5); 
    console.log(carrito);  
}

function solicitarInformacion6() {
     let nombre6 = $("#card_title6").text();       
     let precio6 = $("#price6").text();
     let datos6 = {                                              
        nombre : nombre6,
        precio : precio6,
    }
    carrito.push(datos6); 
    console.log(carrito);  
}

function solicitarInformacion7() {
     let nombre7 = $("#card_title7").text();       
     let precio7 = $("#price7").text();
     let datos7 = {                                              
        nombre : nombre7,
        precio : precio7,
    }
    carrito.push(datos7);
    console.log(carrito);  
}

function solicitarInformacion8() { 
     let nombre8 = $("#card_title8").text();       
     let precio8 = $("#price8").text();
     let datos8 = {                                              
        nombre : nombre8,
        precio : precio8,
    }
    carrito.push(datos8); 
    console.log(carrito);  
}


// function carrito(){
//     let total = 0;
//     carrito.forEach(element => {
//         $('#modal').append(`<p>${element[i].nombre} : ${element[i].precio}€</p>`);
//         total += parseInt(carrito[i].precio);
//     });
//     $("#modal").append(`<h4> Total: ${total}€</h4>`);

// }

function showCarrito(){
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
    $("#modal").append(`<p>${carrito[i].nombre}: ${carrito[i].precio}€</p>`);
        total += parseInt(carrito[i].precio);
    }
    $("#modal").append(`<h4> Total : ${total}€</h4>`);
}





//     console.log(carrito);                        
  

