class ProyectoCarousel {
  constructor(config) {
    this.proyectos = config.proyectos;
    this.container = document.querySelector(config.containerSelector);
    this.prevBtn = document.getElementById(config.prevBtnId);
    this.nextBtn = document.getElementById(config.nextBtnId);
    this.autoDelay = config.autoDelay || 3000;

    this.currentIndex = 0;
    this.totalSlides = this.proyectos.length;
    this.autoPlayInterval = null;
  }

  static init(config) {
    const instance = new ProyectoCarousel(config);
    instance.init();
    return instance;
  }

  init() {
    this.renderSlides();
    this.renderDots();
    this.addEventListeners();
    this.startAutoPlay();
  }

  renderSlides() {
    this.container.innerHTML = this.proyectos
      .map(
        (p) => `
        <div class="slide">
          <div class="box-image">
            <img src="${p.imagen}" alt="${p.titulo}">
            <div class="caption"><h3><span>${p.titulo}</span></h3></div>
          </div>
        </div>
      `,
      )
      .join("");
  }

  renderDots() {
    const carouselContainer = this.container.closest(".carousel-container");

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("carousel-dots");

    this.proyectos.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        this.currentIndex = i;
        this.updateCarousel();
        this.resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    });

    carouselContainer.insertAdjacentElement("afterend", dotsContainer);
  }

  updateDots() {
    document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === this.currentIndex);
    });
  }

  updateCarousel() {
    const offset = this.currentIndex * -100;
    this.container.style.transform = `translateX(${offset}%)`;
    this.updateDots();
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.totalSlides - 1 ? this.currentIndex + 1 : 0;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.totalSlides - 1;
    this.updateCarousel();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoDelay);
  }

  resetAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }

  addEventListeners() {
    this.prevBtn.addEventListener("click", () => {
      this.prevSlide();
      this.resetAutoPlay();
    });

    this.nextBtn.addEventListener("click", () => {
      this.nextSlide();
      this.resetAutoPlay();
    });
  }
}
