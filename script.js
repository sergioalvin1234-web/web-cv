const themeToggle = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const body = document.body;

function setTheme(darkMode) {
  body.classList.toggle("dark-mode", darkMode);
  themeToggle.textContent = darkMode ? "Mode Terang" : "Mode Gelap";
  localStorage.setItem("cvTheme", darkMode ? "dark" : "light");
}

function loadTheme() {
  const savedTheme = localStorage.getItem("cvTheme");

  if (savedTheme) {
    setTheme(savedTheme === "dark");
  } else {
    setTheme(prefersDark.matches);
  }
}

function handleReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("visible");
    }
  });
}

function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.
