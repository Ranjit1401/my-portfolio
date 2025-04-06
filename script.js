// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
const langToggle = document.getElementById("language-toggle");

let currentLang = "en"; // default

const translations = {
  en: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
    achievements: "Achievements",
  },
  hi: {
    about: "परिचय",
    skills: "कौशल",
    projects: "प्रोजेक्ट्स",
    contact: "संपर्क करें",
    resume: "रिज़्यूमे",
    achievements: "उपलब्धियाँ",
  }
};

function updateLanguage() {
  document.getElementById("nav-about").textContent = translations[currentLang].about;
  document.getElementById("nav-skills").textContent = translations[currentLang].skills;
  document.getElementById("nav-projects").textContent = translations[currentLang].projects;
  document.getElementById("nav-contact").textContent = translations[currentLang].contact;
  document.getElementById("nav-resume").textContent = translations[currentLang].resume;
  document.getElementById("nav-achievements").textContent = translations[currentLang].achievements;

  // Update toggle button text
  langToggle.textContent = currentLang === "en" ? "🌐 EN" : "🌐 HI";
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "hi" : "en";
  updateLanguage();
});

// Set initial language
updateLanguage();
