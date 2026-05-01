const proyectos = [
  {
    titulo: "Audux Studio",
    descripcion:
      "Separador de audio, aplicación de EQ, extractor de letras y Karaoke con video.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777164524/AuduxStudio_vcaa0d.png",
    linkPage: "./pages/proyectos/auduxStudio.html",
  },
  {
    titulo: "SOFOM Mobile | Aplicación de Gestión Financiera",
    descripcion:
      "Plataforma híbrida para el otorgamiento de créditos y gestión de clientes SOFOM.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777618369/Pantalla_1_sonlzb.jpg",
    linkPage: "./pages/proyectos/appSofom.html",
  },
  {
    titulo: "Gastos Claros",
    descripcion:
      "Registra gastos y se categorizan automaticamente, observa tus gastos de forma grafica.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777165234/Gastos_Claros_z2pkhv.png",
    linkPage: "./pages/proyectos/gastosClaros.html",
  },
  {
    titulo: "MusicLinks",
    descripcion: "Unificación de links para promoción musical",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777428124/MusicLinks_nxoqiv.jpg",
    linkPage: "./pages/proyectos/musicLinks.html",
  },
];

const container = document.querySelector(".carousel-slides");
let currentIndex = 0;
const slidesContainer = document.querySelector(".carousel-slides");
const totalSlides = proyectos.length;

/* Logica del boton prev */
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }

  updateCarousel();
});

/* Lógica del boton next */
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateCarousel();
});

function updateCarousel() {
  const offset = currentIndex * -100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

function renderSlides(data) {
  const slidesHTML = data
    .map(
      (proyecto) => `
        <div class="slide">
          <div class="box-image">
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            <div class="caption">
              <h3><span>${proyecto.titulo}</span></h3>
              <p>${proyecto.descripcion}</p>
              <a href="${proyecto.linkPage}" class="btn-link">Ver proyecto completo</a>
            </div>
          </div>
        </div>
      `,
    )
    .join("");

  container.innerHTML = slidesHTML;
}

renderSlides(proyectos);
