// Definición de un objeto de forma implícita
let pelicula = {
  title: "Django",
  year: 2012,
};
console.log(pelicula);
pelicula.title = "Pulp Fiction";
//pelicula.year = "1990";

// Sobre-escribe el objeto
pelicula = {
  title: "Inglorious Basterds",
  year: 2009,
};

// Al asignar un nuevo valor al objeto, se debe cumplir
// con la estructura exacta del objeto: no deben faltar propiedades,
// no debe existir propiedades adicionales
pelicula = {
  title: "Kill Bill",
  year: 2013,
  //director: "Quentin",
};

let movie: {
  title: string;
  year: number;
};

// Modificación del objeto completo
movie = { title: "Rocky", year: 1978 };
// Modificación de los atributos/propiedades del objeto
movie.title = "Rocky II";
movie.year = 1980;
