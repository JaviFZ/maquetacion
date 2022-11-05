
// MOVIES////////////////////////////////////////////////////////////////////////////////////////////////////


class Movie {

    constructor(title, releaseYear, image, nationality, genre, director, language, plataforma, isMCU, mainCharacterName, producer, distributor) {

        this.title = title;
        this.releaseYear = releaseYear;
        this.image = image;
        this.nationality = nationality;
        this.director = director;
        this.language = language;
        this.plataforma = plataforma;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.genre = genre;
    }

    movieData() {
        console.log(this);

    }
}

let TheLifeAquatic = new Movie("The Life Aquatic with Steve Zissou", 2004,"./img/Life_Aquatic.jpg", "Estados Unidos", "comedia, aventuras", "Wes Anderson", "Inglés", "Disney+", "NO", "Steve Zissou", "Wes Anderson, Barry Mendel and Scot Rudi", "Buena Vista Pictures");
// console.log(pelicula1);



let TheRoyalTenenbaums = new Movie("The Royal Tenenbaums", 2001,"./img/trt.jpg", "Estados Unidos", "comedia", "Wes Anderson", "Inglés", "Prime Video", "NO","Royal Tenenbaum", "Wes Anderson, Barry mendel and Scott Rudin", "Buena Vista Pictures");
// console.log(pelicula2);


let TheDarjeelingLimited = new Movie("The Darjeeling Limited", 2007,"./img/tdj.jpg", "Estados Unidos", "comedia, aventuras, drama", "Wes Anderson", "Inglés", "Prime Video", "NO", "Hermanos Whitman", "Wes Anderson and Alice Bamford", "Walt Disney Studios");
// console.log(pelicula3);


let CoffeeAndCigarettes = new Movie("Coffee and Cigarettes", 2003, "./img/coff.jpg", "United States, Japan, Italy", "comedia, drama, independiente", "Jim Jarmusch", "Inglés", "Disney+", "NO", "Cate, Shelly", "Wes Anderson and Barry Mendel", "Buena Vista Pictures");
// console.log(pelicula4);



// pelicula4.movieData();


let movies = [TheRoyalTenenbaums ,TheDarjeelingLimited, TheLifeAquatic, CoffeeAndCigarettes];



// IMDB ////////////////////////////////////////////////////////////////////////////////////




function tarjeta() {
    console.log(movies);
    document.getElementById("movies").innerHTML= '';
    movies.forEach(function (movie) {
        document.getElementById("movies").innerHTML += `
        <div class="card" style="width: 18rem;">
                <img src="${movie.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title" id="card_title1">${movie.title}<br>(${movie.releaseYear})</h5>
                <p class="card-text"> 
                Director : ${movie.director}<br>
                Lugar de rodaje : ${movie.nationality}<br>
                Idioma : ${movie.language}<br>
                Personajes : ${movie.mainCharacterName}<br>
                Género : ${movie.genre}<br>



                </p>
                
                </div>
            </div>
            `
    })
}
window.onload = (event) => {
    tarjeta();
};






function introducirPeli() {
    let title = document.getElementById("title").value;
    let releaseYear = document.getElementById("releaseYear").value;
    let image = document.getElementById("image").value;
    let nationality = document.getElementById("nationality").value;
    let director = document.getElementById("director").value;
    let language = document.getElementById("language").value;
    let plataforma = document.getElementById("plataforma").value;
    let isMCU = document.getElementById("isMCU").value;
    let mainCharacterName = document.getElementById("mainCharacterName").value;
    let producer = document.getElementById("producer").value;
    let distributor = document.getElementById("distribuitor").value;
    let genre = document.getElementById("genre").value;



    let pelicula = {
        title,
        releaseYear,
        image,
        nationality,
        director,
        language,
        plataforma,
        isMCU,
        mainCharacterName,
        producer,
        distributor,
        genre,
    }

    movies.push(pelicula);
    
    tarjeta();
}