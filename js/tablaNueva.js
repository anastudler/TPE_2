document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
  "use strict";

  let formLibros = document.querySelector("#form_libros");
  formLibros.addEventListener("submit", agregarLibro);
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

  function agregarLibro(e) {
    e.preventDefault();

    let cargarLibro = new FormData(formLibros);
    let titulo = cargarLibro.get('titulo');
    let genero = cargarLibro.get('genero');
    let autor = cargarLibro.get('autor');

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
      tabla.innerHTML += "<tr>" + "<td>" + item.titulo + "</td>" + "<td>" + item.genero + "</td>" + "<td>" +
        item.autor + "</td>" + "</tr>";
     
    }
  }

  function agregar3(e) {
    e.preventDefault();
    let librosCargados = [
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
    for (let i = 0; i < 3; i++) {
      const agregar3Libros = librosCargados[i];
      console.table(agregar3Libros);

      libros.push(agregar3Libros);
      mostrar(libros);
    }
  }

  function vaciarTabla(e) {
    e.preventDefault();
    libros = [];
    mostrar();
    console.log(libros);
  }
}
