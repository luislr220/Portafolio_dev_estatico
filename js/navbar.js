document.addEventListener("DOMContentLoaded", () => {
  // ── Resaltado del enlace de la página actual ──
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("header nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const linkPage = href.split("/").pop();
    if (currentPage === linkPage) link.classList.add("active");
  });

  // ── Menú móvil (hamburguesa) ──
  const header = document.querySelector("header");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!header || !toggle || !menu) return;

  const isOpen = () => header.classList.contains("nav-open");

  const setOpen = (open) => {
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
  };

  toggle.addEventListener("click", () => setOpen(!isOpen()));

  // Al elegir un enlace, el menú se cierra y el ancla navega normal.
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  // Cerrar con Escape y devolver el foco al botón.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Cerrar al tocar fuera del header.
  document.addEventListener("click", (event) => {
    if (isOpen() && !header.contains(event.target)) setOpen(false);
  });

  // Si se pasa a escritorio, restaurar el estado.
  const desktop = window.matchMedia("(min-width: 861px)");
  const onChange = (event) => {
    if (event.matches) setOpen(false);
  };
  if (desktop.addEventListener) desktop.addEventListener("change", onChange);
  else desktop.addListener(onChange);
});
