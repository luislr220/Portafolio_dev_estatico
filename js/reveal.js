// ── Reveal sutil al hacer scroll (solo index.html) ──
// Anima la entrada de secciones y tarjetas de la landing, que es una
// página larga. Respeta la preferencia de movimiento reducido del
// usuario y degrada sin JS (contenido siempre visible).
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const showAll = () =>
    reveals.forEach((el) => el.classList.add("is-visible"));

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    showAll();
    return;
  }

  // Escalonar las tarjetas que comparten rejilla (proyectos / certificaciones).
  document.querySelectorAll(".proyectos-grid, .cert-grid").forEach((grid) => {
    grid.querySelectorAll(".reveal").forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${i * 90}ms`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
});
