// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Typing effect in the hero
(function typeEffect() {
  const el = document.getElementById("typed");
  if (!el) return;

  const phrases = [
    "Python developer.",
    "SQL & DBMS enthusiast.",
    "Learning C++.",
    "Diving into DSA.",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (deleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    el.textContent = current.slice(0, charIndex);

    let delay = deleting ? 45 : 90;

    if (!deleting && charIndex === current.length) {
      delay = 1600;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  tick();
})();

// Theme toggle with preference memory
(function themeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");

  if (stored) {
    root.setAttribute("data-theme", stored);
  }

  toggle.addEventListener("click", function () {
    const isLight = root.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();

// Scroll reveal + animated skill bars
(function scrollReveal() {
  const sections = document.querySelectorAll(".section, .hero");
  sections.forEach((s) => s.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          // Fill any skill bars inside this section
          entry.target.querySelectorAll(".bar__fill").forEach((fill) => {
            const level = fill.getAttribute("data-level");
            if (level) fill.style.width = level + "%";
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((s) => observer.observe(s));
})();
