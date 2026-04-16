// ===== HAMBURGER MENU =====
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if(btn && nav){
  btn.onclick = () => {
    nav.classList.toggle("show");
  };
}

// ===== SCROLL ANIMATION =====
const elements = document.querySelectorAll('.card, .about p, .contact');

// Initial state
elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
});

// Scroll animation
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease";
    }
  });
});