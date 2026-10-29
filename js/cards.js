const proyectos = [
  {
    titulo: "Audux Studio",
    rol: "Desarrollo, seguridad y DevOps",
    descripcion:
      "Automatiza la creación de pistas de karaoke —separación de voz e instrumental, extracción de letras y video— que antes exigía software especializado y equipos de alto rendimiento.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777164524/AuduxStudio_vcaa0d.png",
    tags: ["React", "Node.js", "Docker", "FFmpeg"],
    linkPage: "./pages/proyectos/auduxStudio.html",
    demo: "https://auduxstudio.com/",
    demoLabel: "App en vivo ↗",
  },
  {
    titulo: "SOFOM Mobile",
    rol: "Front-End · equipo de 3",
    descripcion:
      "App móvil para otorgar créditos SOFOM sin ir a sucursal: onboarding con biometría, geolocalización y firma digital.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777618369/Pantalla_1_sonlzb.jpg",
    tags: ["Ionic", "Angular", "Capacitor"],
    linkPage: "./pages/proyectos/appSofom.html",
  },
  {
    titulo: "Gastos Claros",
    rol: "FullStack",
    descripcion:
      "Registra gastos, se categorizan automáticamente y se visualizan en una gráfica por categoría.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777165234/Gastos_Claros_z2pkhv.png",
    tags: ["Angular", "Node.js", "Express", "Chart.js"],
    linkPage: "./pages/proyectos/gastosClaros.html",
  },
  {
    titulo: "MusicLinks",
    rol: "Front-End",
    descripcion:
      "Micrositio link-in-bio Mobile-First para centralizar la presencia digital de un proyecto musical.",
    imagen:
      "https://res.cloudinary.com/dzsalq5g6/image/upload/v1777428124/MusicLinks_nxoqiv.jpg",
    tags: ["HTML5", "CSS3", "Vercel"],
    linkPage: "./pages/proyectos/musicLinks.html",
    demo: "https://feelthatpain.vercel.app/pages/promocion-page/promocion-page.html",
  },
];

const grid = document.querySelector(".proyectos-grid");

grid.innerHTML = proyectos
  .map(
    (p) => `
      <article class="proyecto-card">
        <a class="card-img" href="${p.linkPage}" tabindex="-1" aria-hidden="true">
          <img src="${p.imagen}" alt="Captura de ${p.titulo}" loading="lazy" />
        </a>
        <div class="card-body">
          <span class="card-rol">${p.rol}</span>
          <h3 class="card-titulo">${p.titulo}</h3>
          <p class="card-desc">${p.descripcion}</p>
          <div class="card-tags">
            ${p.tags.map((t) => `<span class="card-tag">${t}</span>`).join("")}
          </div>
        </div>
        <div class="card-actions">
          <a class="card-btn" href="${p.linkPage}">Ver proyecto</a>
          ${
            p.demo
              ? `<a class="card-btn sec" href="${p.demo}" target="_blank" rel="noopener noreferrer">${p.demoLabel ?? "Demo en vivo ↗"}</a>`
              : ""
          }
        </div>
      </article>`,
  )
  .join("");
