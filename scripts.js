// Function to add event listeners for dropdowns
function addDropdownListeners() {
  document.querySelectorAll('.bottom-header ul li').forEach(item => {
    item.addEventListener('mouseover', () => {
      let dropdown = item.querySelector('.dropdown-content');
      if (dropdown) {
        dropdown.style.display = 'block';
      }
    });
    item.addEventListener('mouseleave', () => {
      let dropdown = item.querySelector('.dropdown-content');
      if (dropdown) {
        dropdown.style.display = 'none';
      }
    });
  });
}

// Basic Carousel Slide Function (adjusts transform)
function slideCarousel(offset) {
  const carousel = document.getElementById('carousel');
  let style = window.getComputedStyle(carousel);
  let matrix = new WebKitCSSMatrix(style.transform);
  let currentX = matrix.m41;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(${currentX + offset}px)`;
  setTimeout(() => {
    carousel.style.transition = 'none';
  }, 500);
}

// Ensure the dropdown listeners are added after the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  addDropdownListeners();
});


//single Photo Slider in HOmepage
        let index = 0;
        let interval;
        function moveSlide(step) {
            const slides = document.querySelector('.slides');
            const totalSlides = document.querySelectorAll('.slide').length;
            index = (index + step + totalSlides) % totalSlides;
            slides.style.transform = `translateX(${-index * 100}%)`;
        }
        function startSlide() {
            interval = setInterval(() => moveSlide(1), 3000);
        }
        function pauseSlide() {
            clearInterval(interval);
        }
        function resumeSlide() {
            startSlide();
        }
        function enlargeImage(img) {
            let modal = document.createElement("div");
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.backgroundColor = "rgba(0,0,0,0.8)";
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            modal.onclick = () => document.body.removeChild(modal);
            let enlargedImg = document.createElement("img");
            enlargedImg.src = img.src;
            enlargedImg.style.maxWidth = "90%";
            enlargedImg.style.maxHeight = "90%";
            modal.appendChild(enlargedImg);
            document.body.appendChild(modal);
        }
        startSlide();
