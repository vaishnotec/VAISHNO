// ===== NAVBAR / MOBILE MENU =====
const navbar = document.querySelector(".navbar");
const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");
const yearEl = document.getElementById("year");

// Footer year
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Scroll style (only if navbar exists)
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Mobile nav toggle (only if button & links exist)
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  // Close menu on link click
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
    });
  });
}

// ===== SMOOTH SCROLL (internal links) =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// ===== IMAGE SLIDER =====
const slides = document.querySelectorAll(".slider .slide");
const indicators = document.querySelectorAll(".slider .indicator");
let currentSlide = 0;
let sliderInterval = null;

// Guard: if no slides, do nothing (avoids errors on other pages)
if (slides.length) {
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    indicators.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startSlider() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 5000);
  }

  // Indicator click (only if dots exist)
  indicators.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlider(); // restart timer
    });
  });

  // Initialize
  showSlide(0);
  startSlider();
}

// ===== CONTACT FORM (optional) =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received. We will contact you shortly.");
    contactForm.reset();
  });
}
