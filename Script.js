// Waitlist interaction
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Access request received. Welcome to Lumetrax CX 🚀");
});

// Smooth scroll for nav links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple scroll animation trigger
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card, .step").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  observer.observe(el);
});
