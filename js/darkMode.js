document.querySelector(".darkMode").addEventListener("click", () => {
  document.querySelector(".moon-logo").classList.toggle("animate-moon");
  document.querySelector(".sun-logo").classList.toggle("animate-sun");
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".darkMode").classList.toggle("dark");
});
