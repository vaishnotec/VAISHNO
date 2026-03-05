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
 document.addEventListener("DOMContentLoaded", () => {
  // ===== SLIDER =====
  const slides = document.querySelectorAll(".slider .slide");
  const indicators = document.querySelectorAll(".slider .indicator");

  if (!slides.length) return; // safety

  let current = 0;
  let timer = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    indicators.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    current = index;
  }

  function startSlider() {
    clearInterval(timer);
    timer = setInterval(() => {
      const next = (current + 1) % slides.length;
      showSlide(next);
    }, 4000);
  }

  indicators.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlider();
    });
  });

  showSlide(0);
  startSlider();
});

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

