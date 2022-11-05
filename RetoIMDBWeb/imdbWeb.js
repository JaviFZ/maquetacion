// PROFESIONALS////////////////////////////////////////////////////////////

// class Professional {
   
//     constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession){
//         this.name = name;
//         this.age = age;
//         this.weight = weight;
//         this.height = height;
//         this.isRetired = isRetired;
//         this.nationality = nationality;
//         this.oscarsNumber = oscarsNumber;
//         this.profession = profession;
//     }

//     showAtribs(){
//         console.log(this);

//     }

//     // //  ASI MOSTRARIA SÓLO EL VALOR DE LOS ATRIBUTOS
//     // public showAtribs(){
//     //     console.log(this.name, this.age, this.weight, this.isRetired, this.nationality, this.oscarsNumber, this.profession);

//     // }
// }

// let OwenWilson = new Professional("Owen Wilson", 53, 80, 180, false, "estadounidense", 1, "actor");
// let CateBlanchett = new Professional("Cate Blanchett", 53, 70, 174, false, "australiana", 2, "actor");
// let BillMurray = new Professional("Bill Murray", 72, 87, 188, false, "estadounidense", 0, "actor");
// let WesAnderson = new Professional("Wes Anderson", 53, 75, 180, false, "estadounidense", 0, "director");
// let JimJarmusch = new Professional("Jim Jarmusch", 69, 80, 188, false, "estadounidense", 1, "director");




// MOVIES////////////////////////////////////////////////////////////////////////////////////////////////////


class Movie{

    constructor(title,releaseYear,nationality,genre){

        this.title = title;
        this.releaseYear = releaseYear;
        // this.actors;
        this.nationality = nationality;
        this.director;
        // this.writer;
        this.language;
        this.plataforma;
        this.nisMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;
    }

    movieData(){
        console.log(this);
        
    }
}

let TheLifeAquatic = new Movie("The Life Aquatic with Steve Zissou",2004,"Estados Unidos","comedia, aventuras");
// console.log(pelicula1);

TheLifeAquatic.director = "WesAnderson";
// TheLifeAquatic.writer = "WesAnderson";
// TheLifeAquatic.actors = [CateBlanchett, OwenWilson, BillMurray]
TheLifeAquatic.language = "Inglés";
TheLifeAquatic.plataforma = "Disney+";
TheLifeAquatic.nisMCU = false;
TheLifeAquatic.mainCharacterName = "Steve Zissou";
TheLifeAquatic.producer = "Wes Anderson, Barry Mendel, Scott Rudin";
TheLifeAquatic.distributor = "Buena Vista Pictures";


let TheRoyalTenenbaums = new Movie("The Royal Tenenbaums", 2001,"Estados Unidos", "comedia");
// console.log(pelicula2);

TheRoyalTenenbaums.director = "WesAnderson";
// TheRoyalTenenbaums.writer = "WesAnderson";
// TheRoyalTenenbaums.actors = [OwenWilson, BillMurray]
TheRoyalTenenbaums.language = "Inglés";
TheRoyalTenenbaums.plataforma = "Prime video";
TheRoyalTenenbaums.nisMCU = false;
TheRoyalTenenbaums.mainCharacterName = "Royal Tenenbaum"
TheRoyalTenenbaums.producer = "Wes Anderson, Barry Mendel, Scott Rudin";
TheRoyalTenenbaums.distributor = "Buena Vista Pictures";

let TheDarjeelingLimited = new Movie("The Darjeeling Limited",2007,"Estados Unidos","comedia, aventuras, drama");
// console.log(pelicula3);

TheDarjeelingLimited.director = "WesAnderson";
// TheDarjeelingLimited.writer = "WesAnderson";
// TheDarjeelingLimited.actors = [OwenWilson, BillMurray]
TheDarjeelingLimited.language = "Inglés";
TheDarjeelingLimited.plataforma = "Prime video";
TheDarjeelingLimited.nisMCU = false;
TheDarjeelingLimited.mainCharacterName = "Hermanos Whitman";
TheDarjeelingLimited.producer = "Wes Anderson, Alice Bamford, Roman Coppola, Jason Schwartzman";
TheDarjeelingLimited.distributor = "Walt Disney, Studios Motion Pictures";

let CoffeeAndCigarettes = new Movie("Coffee and Cigarettes", 2003, "United States, Japan, Italy", "comedia, drama, independiente");
// console.log(pelicula4);

CoffeeAndCigarettes.director = "JimJarmusch";
// CoffeeAndCigarettes.writer = "JimJarmusch";
// CoffeeAndCigarettes.actors = [BillMurray, CateBlanchett]
CoffeeAndCigarettes.language = "Inglés";
CoffeeAndCigarettes.plataforma = "Disney+";
CoffeeAndCigarettes.nisMCU = false;
CoffeeAndCigarettes.mainCharacterName = "Cate, Shelly";
CoffeeAndCigarettes.producer = "Wes Anderson, Barry Mendel, Scott Rudin";
CoffeeAndCigarettes.distributor = "Buena Vista Pictures";

// pelicula4.movieData();



// IMDB ////////////////////////////////////////////////////////////////////////////////////


class IMDB {
    

    constructor(peliculas){
        this.peliculas = peliculas;
    }

    // // METODOS

    escribirEnFicheroJSON(nuevaEntrada) {    
        let stringnuevaEntrada = JSON.stringify(this);
        fs.writeFileSync(nuevaEntrada, stringnuevaEntrada)
    }

    obtenerInstancialIMDB(nombreFichero){
        let newObjet = JSON.parse(fs.readFileSync(nombreFichero)); // // JSON.parse nos lo cambia a objeto
        return newObjet;
    }
}

let imdb = new IMDB([TheLifeAquatic, TheRoyalTenenbaums, TheDarjeelingLimited, CoffeeAndCigarettes ]);


export let stringify = JSON.stringify(imdb); 









function tarjeta(){
    document.getElementById ("main").innerHTML = `<div class="card" style="width: 18rem;">
    <img src="./img/TIENDA ONLINE/cardigan_largo_rayas.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" id="card_title1">Abrigo a rayas</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
      content.</p>
    <p class="card-text"><span id="price1" >20</span><span>€</span></p>
    
  </div>`
}