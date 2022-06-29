// Toggle hamburgar
const hamburgar = document.querySelector(".fa-bars");
const navUl = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li");

hamburgar.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navUl.classList.toggle("active");
  });
});

// Dark mood
const moon = document.getElementById("moon");
const cvBtn = document.getElementById("cv-btn");

moon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    moon.src = "img/sun.png";
  } else {
    moon.src = "img/moon.png";
  }
});

cvBtn.addEventListener("click", function () {
  window.location(
    "https://www.mediafire.com/file/i3a401nrjv9925m/CV_1.docx/file",
    "blank"
  );
});
