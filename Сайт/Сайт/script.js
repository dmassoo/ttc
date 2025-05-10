
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.review-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  
  // Функция показа слайда
  function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      currentSlide = index;
  }
  
  // Обработчики для точек
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
  });
  
  // Автопереключение
  setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }, 5000);
});

