setupYoutubeVideo("video", "KeB1MIjkzR4");

const dataGastos = [
  {
    titulo: "Sin registros.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777233592/1-Sin_registros_afxtqi.jpg",
  },
  {
    titulo: "Registrando gasto.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777233585/2-Registrando_gasto_qsk86i.jpg",
  },
  {
    titulo: "Registro de multiples gastos.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777233637/3-Multiples_Gastos_jsiye3.jpg",
  },
  {
    titulo: "Eliminando un gasto.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777233611/4-Eliminando_un_gasto_shznep.jpg",
  },
  {
    titulo: "Gasto Eliminado.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777233649/5-Gasto_Eliminado_louvgx.jpg",
  },
  {
    titulo: "Actualizando un gasto.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777233672/6-Actualizando_un_Gasto_kcsoql.jpg",
  },
  {
    titulo: "Datos nuevos para la actualización.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777233606/7-Actualizando_un_Gasto_2_fpcgqe.jpg",
  },
  {
    titulo: "Gasto Actualizado.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777233644/8-Gasto_Actualizado_tllqje.jpg",
  },
];

ProyectoCarousel.init({
  proyectos: dataGastos,
  containerSelector: ".carousel-slides",
  prevBtnId: "prevBtn",
  nextBtnId: "nextBtn",
  autoDelay: 4000,
});
