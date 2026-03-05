document.addEventListener("DOMContentLoaded", () => {
  // ===== NAVBAR / MOBILE MENU =====
  const navbar = document.querySelector(".navbar");
  const navLinks = document.getElementById("navLinks");
  const navToggle = document.getElementById("navToggle");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    });
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
      });
    });
  }

  // ===== SLIDER =====
  const slides = document.querySelectorAll(".slider .slide");
  const indicators = document.querySelectorAll(".slider .indicator");

  if (slides.length === 0) return; // agar slider nahi mila to seedha return

  let current = 0;
  let timer;

  const showSlide = (index) => {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    indicators.forEach((d, i) => d.classList.toggle("active", i === index));
    current = index;
  };

  const start = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      const next = (current + 1) % slides.length;
      showSlide(next);
    }, 5000);
  };

  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      start();
    });
  });

  showSlide(0);
  start();

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been received. We will contact you shortly.");
      contactForm.reset();
    });
  }
});
