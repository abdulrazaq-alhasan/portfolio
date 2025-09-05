const translations = {
  en: {
    home: "Home",
    about: "About",
    hire: "Hire me",
    contact: "Contact us",
    name: "I'm Abdulrazaq Alhasan",
    job: "Front-end Developer",
    details:
      "This is my official portfolio website to showcase my all work related to web development and UI design",
    cv: "Download CV",
    english: "English",
    arabic: "Arabic",
    swedish: "swedish",
  },
  sv: {
    home: "Hem",
    about: "Om",
    hire: "anställ mig",
    contact: "Kontakta oss",
    name: "Jag heter Abdulrazaq Alhasan",
    job: "Front-end Utvecklare",
    details:
      "Det här är min officiella portföljwebbplats för att visa upp mitt arbete relaterat till webbutveckling och UI-design",
    cv: "Ladda ner CV",
    english: "Engelsk",
    arabic: "Arabiska",
    swedish: "Svanska",
  },
};

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // If there is no language use the English
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = "ltr";
  document.querySelector('.img-box').style.marginRight = '8%'

};
