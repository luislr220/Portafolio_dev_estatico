setupYoutubeVideo("video", "g2AYC95i9nc");

const data = [
  {
    titulo: "Vista web en PC",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777428124/MusicLinks_nxoqiv.jpg",
  },
  {
    titulo: "Vista web en pantallas móviles",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777428695/2-Vista_pantallas_moviles_ucnxop.jpg",
  },
  {
    titulo: "Vista web en tablets",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777428759/3-Vista_en_tablets_w7rpn8.jpg",
  },
];

ProyectoCarousel.init({
  proyectos: data,
  containerSelector: ".carousel-slides",
  prevBtnId: "prevBtn",
  nextBtnId: "nextBtn",
  autoDelay: 4000,
});
