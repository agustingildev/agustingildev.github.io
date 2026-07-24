// Animación suave al aparecer elementos al hacer scroll
const elements = document.querySelectorAll(
  ".section, .card, .project, .steps div, .hero-image, .hero-text"
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});
elements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Efecto de movimiento leve del mouse sobre la foto
const photo = document.querySelector(".image-wrapper");
document.addEventListener("mousemove", (e) => {
  if (!photo) return;
  const x = (window.innerWidth / 2 - e.clientX) / 80;
  const y = (window.innerHeight / 2 - e.clientY) / 80;
  photo.style.transform = `translate(${x}px, ${y}px)`;
});

// Menú hamburguesa (mobile)
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}
// Acordeón de preguntas frecuentes
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(open => {
      if (open !== item) {
        open.classList.remove('open');
        open.querySelector('.faq-a').style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.classList.remove('open');
      answer.style.maxHeight = null;
    } else {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
