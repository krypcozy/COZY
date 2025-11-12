// =====================
// Smooth Scroll for Navbar Links
// =====================
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// =====================
// Active Menu Highlight on Scroll
// =====================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 150;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(link => link.classList.remove("active"));
      document
        .querySelector(nav ul li a[href="#${sec.id}"])
        ?.classList.add("active");
    }
  });
});

// =====================
// Fade-in Animation for Sections (Immediate + Scroll-triggered)
// =====================
const revealElements = document.querySelectorAll('.section');

// Make all sections visible immediately
document.addEventListener("DOMContentLoaded", () => {
  revealElements.forEach(elem => elem.classList.add("visible"));
});

// Animate sections when scrolling into view
function revealOnScroll() {
  revealElements.forEach(elem => {
    const elemTop = elem.getBoundingClientRect().top;
    if (elemTop < window.innerHeight - 100) {
      elem.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// =====================
// Scroll to Top Button
// =====================
const topBtn = document.createElement("button");
topBtn.innerText = "▲";
topBtn.id = "scrollTopBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.padding = "12px 16px";
topBtn.style.fontSize = "20px";
topBtn.style.background = "#00f0ff";
topBtn.style.color = "#000";
topBtn.style.border = "none";
topBtn.style.borderRadius = "10px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.transition = "0.3s";

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =====================
// Crypto icon hover effect
// =====================
document.querySelectorAll(".crypto-icons img").forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.25)";
    icon.style.transition = "0.25s";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
  });
});

// =====================
// Future-proof: Mobile menu toggle
// =====================
const menuIcon = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}