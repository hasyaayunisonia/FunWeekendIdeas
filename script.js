const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

showSlide(currentIndex);

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

prevButton.addEventListener("click", () => {
  stopAutoSlide();
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  startAutoSlide();
});

nextButton.addEventListener("click", () => {
  stopAutoSlide();
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  startAutoSlide();
});

startAutoSlide();
