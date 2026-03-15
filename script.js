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
.then(response => response.json())
.then(data => {

let container = document.getElementById("offersContainer");

data.offers.forEach((offer,index)=>{

let div=document.createElement("div");

div.innerHTML=`
<h3>${offer.title}</h3>
<p>${offer.description}</p>
<small>Valid till: ${offer.valid}</small>
`;

container.appendChild(div);

if(index===0){

document.getElementById("popupTitle").innerText=offer.title;
document.getElementById("popupText").innerText=offer.description;

}

});

});

document.getElementById("closePopup").onclick=function(){

document.getElementById("offerPopup").style.display="none";

};


