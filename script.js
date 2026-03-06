// Vaishno Tech main script

document.addEventListener("DOMContentLoaded", function () {
  // Hamesha page top se start karo (mobile par contact pe jump na ho)
  window.scrollTo(0, 0);

  // ===== NAVBAR SCROLL SHADOW =====
  var navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // ===== MOBILE MENU (3 lines) =====
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    // Menu link pe click hote hi band ho jaye
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
      });
    });
  }

  // ===== SLIDER =====
  var slides = document.querySelectorAll(".slider .slide");
  var indicators = document.querySelectorAll(".slider .indicator");

  if (slides.length > 0) {
    var current = 0;
    var timer = null;

    function showSlide(index) {
      slides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === index);
      });
      indicators.forEach(function (dot, i) {
        dot.classList.toggle("active", i === index);
      });
      current = index;
    }

    function startSlider() {
      clearInterval(timer);
      timer = setInterval(function () {
        var next = (current + 1) % slides.length;
        showSlide(next);
      }, 4000);
    }

    indicators.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        showSlide(index);
        startSlider();
      });
    });

    showSlide(0);
    startSlider();
  }

  // ===== CONTACT FORM =====
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your message has been received. We will contact you shortly.");
      contactForm.reset();
    });
  }

  // ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var offset = 80; // navbar ke niche space
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
});
