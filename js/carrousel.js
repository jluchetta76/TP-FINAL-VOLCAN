const carousel = document.querySelector('.carousel');
const inner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
let currentIndex = 0;
let isAnimating = false;

function goToSlide(index) {
  if (isAnimating) return;
  isAnimating = true;
  currentIndex = (index + items.length) % items.length;
  const offset = -currentIndex * 100;
  inner.style.transform = `translateX(${offset}%)`;

  setTimeout(() => {
    isAnimating = false;
  }, 500); // Duración de la transición CSS
}

prevButton.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});

// Opcional: Agregar desplazamiento automático

setInterval(() => {

   goToSlide(currentIndex + 1);

 }, 4000);