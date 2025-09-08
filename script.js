// ========================
// Mobile menu toggle
// ========================
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// ========================
// Scroll animations with stagger (Projects, Skills, Testimonials)
// ========================
const animatedElements = document.querySelectorAll(
  ".fade-in-left, .fade-in-right, .fade-up"
);

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    // Add visible + stagger effect
    const children = entry.target.parentElement.querySelectorAll(
      ".fade-up, .fade-in-left, .fade-in-right"
    );

    children.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add("visible");
      }, index * 150); // stagger delay (150ms between items)
    });

    observer.unobserve(entry.target);
  });
}, appearOptions);

// Observe each element
animatedElements.forEach((el) => {
  appearOnScroll.observe(el);
});
