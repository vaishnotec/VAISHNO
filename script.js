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

// Simple contact form handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received. We will contact you shortly.");
    contactForm.reset();
  });


  
}
fetch("offers.json")
.then(res => res.json())
.then(data => {

let container = document.getElementById("offersContainer");

let today = new Date();

data.offers.forEach(offer => {

let validDate = new Date(offer.valid);

if(validDate >= today){

let div = document.createElement("div");

div.classList.add("offer-card");

div.innerHTML = `
<h3>${offer.title}</h3>
<p>${offer.description}</p>
<span class="valid">Valid till: ${offer.valid}</span>

<a href="https://wa.me/919681281691" target="_blank" class="offer-btn">
Get Offer
</a>
`;

container.appendChild(div);

}

});

});
