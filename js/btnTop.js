// ── Botón flotante "volver arriba" ──
// Aparece después de scrollear y regresa al inicio con un desplazamiento
// suave. Si el usuario prefiere movimiento reducido, el regreso es directo.
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnTop");
  if (!btn) return;

  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const toggle = () => {
    btn.classList.toggle("btn-top--visible", window.scrollY > 420);
  };

  toggle();
  window.addEventListener("scroll", toggle, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  });
});
