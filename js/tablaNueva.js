document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
  "use strict";

  document
    .querySelector("#btn_agregar")
    .addEventListener("click", agregarLibro);
  document.querySelector("#btn_agregar3").addEventListener("click", agregar3);
  document.querySelector("#btn_vaciar").addEventListener("click", vaciarTabla);

  let libros = [];

  libros = [
    {
      titulo: "El Psicoanalista",
      genero: "Thriller",
      autor: "John Katzenbach",
    },
    {
      titulo: "Harry Potter y la Piedra Filosofal",
      genero: "Fantasia",
      autor: "J.K. Rowling",
    },
    {
        titulo: "Asesinato en el Orient Express",
        genero: "Policial",
        autor: "Agatha Christie",
    },
  ];

  mostrar(libros);

  function agregarLibro() {
    let titulo = document.querySelector("#titulo").value;
    let genero = document.querySelector("#genero").value;
    let autor = document.querySelector("#autor").value;

    let libroNuevo = {
      titulo: titulo,
      genero: genero,
      autor: autor,
    };

    libros.push(libroNuevo);

    console.table(libros);

    mostrar();
  }

  function mostrar() {
    let tabla = document.querySelector("#tabla_libros");
    tabla.innerHTML = "";

    for (const item of libros) {
      tabla.innerHTML +=
        "<tr>" +
        "<td>" +
        item.titulo +
        "</td>" +
        "<td>" +
        item.genero +
        "</td>" +
        "<td>" +
        item.autor +
        "</td>" +
        "</tr>";
    }
  }

  function agregar3() {}

  function vaciarTabla() {
    libros = [];
    mostrar();
    console.log(libros);
  }
}
