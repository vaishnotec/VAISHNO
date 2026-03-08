// Navbar scroll style
const navbar = document.querySelector(".navbar");
const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");
const yearEl = document.getElementById("year");

// Set footer year
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Scroll behavior for navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile nav toggle
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });
}

// Close mobile nav on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("active");
  });
});

// Simple smooth scroll for internal links (fallback)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  });
});

// Auto slider
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;
let sliderInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  indicators.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function startSlider() {
  if (!slides.length) return;
  sliderInterval = setInterval(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }, 5000);
}

function resetSlider() {
  if (!slides.length) return;
  clearInterval(sliderInterval);
  startSlider();
}

// Indicator click
indicators.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetSlider();
  });
});

startSlider();

// Simple contact form handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received. We will contact you shortly.");
    contactForm.reset();
  });
}
