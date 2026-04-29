setupYoutubeVideo("video", "P3bMDgzG6mg");

const dataAuduxStudio = [
  {
    titulo: "Inicio de sesión",
    imagen: "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777333409/1-Inicio_de_sesion_mcpq7t.jpg",
  },
  {
    titulo: "Confirmar código de verificación",
    imagen: "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777333391/2-Confirmando_codigo_de_verificacion_i6ssu0.jpg",
  },
  {
    titulo: "Herramienta de Filtro y EQ",
    imagen: "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777333351/3-Seleccionando_Filtro_y_eq_snw6nu.jpg",
  },
  {
    titulo: "Filtros y EQ sin archivo que procesar",
    imagen: "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777333381/4-Sin_seleccionar_cancion_wdpbec.jpg",
  },
  {
    titulo: "Previsualización y escucha del archivo a procesar",
    imagen: "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777333375/5-Previsualizaci%C3%B3n_para_escuchar_los_cambios_en_tiempo_real_aaski1.jpg",
  },
  {
    titulo: "Sección de filtros y parámetros del EQ",
    imagen: "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777333343/6-Zona_de_filtros_y_eq_y_render_mhstnp.jpg",
  },
  {
    titulo: "Manejo de carga al servidor",
    imagen: "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777333308/7-Manejo_de_subida_al_servidor_bep9pm.jpg",
  },
  {
    titulo: "Muestra de progreso en el procesamiento del audio",
    imagen: "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777333325/8-Notificacion_de_proceso_v29n6z.jpg",
  },
  {
    titulo: "Notificación de proceso terminado",
    imagen: "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777333313/9-Aviso_de_conclusion_qrc0cu.jpg",
  },
  {
    titulo: "Sección donde se muestra el resultado del proceso",
    imagen: "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777333368/10-Fin_del_render_vjrk8h.jpg",
  }
];

ProyectoCarousel.init({
  proyectos: dataAuduxStudio,
  containerSelector: ".carousel-slides",
  prevBtnId: "prevBtn",
  nextBtnId: "nextBtn",
  autoDelay: 4000,
});