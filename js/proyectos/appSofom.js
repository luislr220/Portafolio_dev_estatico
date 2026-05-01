const data = [
  {
    titulo: "Inicio de sesión",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777618369/Pantalla_1_sonlzb.jpg",
  },
  {
    titulo: "Recuperación de contraseña",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777618370/Pantalla_2_recuperar_contrase%C3%B1a_if4uwb.jpg",
  },
  {
    titulo: "Registro de cuenta movil del cliente",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777618369/Pantalla_3_registro_cuenta_registro_cliente_h1pscb.jpg",
  },
  {
    titulo: "Registro de datos personales del cliente",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777618370/Pantalla_4_registro_cuenta_part_2_c5h5ei.jpg",
  },
  {
    titulo: "Registro exitoso",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777618369/pantalla_5_termino_de_registro_s7g2mh.jpg",
  },
];

ProyectoCarousel.init({
  proyectos: data,
  containerSelector: ".carousel-slides",
  prevBtnId: "prevBtn",
  nextBtnId: "nextBtn",
  autoDelay: 4000,
});
