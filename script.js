document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active'); // Toggle animation
    });
  
    const scrollDown = document.querySelector('.scroll-down');
    scrollDown.addEventListener('click', () => {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    });
  });
  