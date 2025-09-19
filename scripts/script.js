// JavaScript Document
console.log("hi");

// Selecteer de menu-toggle button en de nav-links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Event listener voor klikken op hamburger
menuToggle.addEventListener('click', () => {
  // Toggle actieve klasse op button (voor animatie)
  menuToggle.classList.toggle('active');

  // Toggle zichtbaar/verborgen menu
  navLinks.classList.toggle('active');
});

