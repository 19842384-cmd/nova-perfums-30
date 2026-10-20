/*
  DICCIONARIO JSON:
  Cada clave tiene su traducción en español e inglés.
  Los textos de la página se actualizan con data-i18n.
*/
const translations = {
  es: {
    navHome: "Inicio",
    navProducts: "Perfumes",
    navAbout: "Nosotros",
    navTech: "Tecnologías",
    navQuiz: "Cuestionario",
    navContact: "Contacto",
    heroEyebrow: "La esencia de lo extraordinario",
    heroTitle: "Tu esencia.<br>Tu identidad.",
    heroText: "Descubre una colección de fragancias elegantes creadas para acompañar tus mejores momentos y expresar quién eres.",
    heroButton: "Explorar colección",
    aboutButton: "Conócenos",
    slide1Small: "Elegancia en cada detalle",
    slide1Title: "Una fragancia, mil recuerdos",
    slide2Small: "Descubre tu estilo",
    slide2Title: "Encuentra tu esencia",
    slide3Small: "Momentos inolvidables",
    slide3Title: "Deja tu propia huella",
    collectionEyebrow: "Nuestra selección",
    collectionTitle: "Perfumes destacados",
    collectionText: "Fragancias para cada personalidad, ocasión y momento especial.",
    tagPopular: "Popular",
    tagElegant: "Elegante",
    tagFresh: "Fresco",
    goldenDesc: "Una fragancia cálida con notas dulces y amaderadas, ideal para destacar.",
    midnightDesc: "Una combinación floral y sofisticada pensada para las noches especiales.",
    freshDesc: "Notas frescas y ligeras para acompañarte durante el día.",
    buyButton: "Consultar",
    demoNotice: "Productos y precios de ejemplo para el proyecto. Los botones permiten realizar consultas, no procesan pagos.",
    feature1Title: "Estilo único",
    feature1Text: "Aromas que expresan tu personalidad y acompañan tu estilo.",
    feature2Title: "Selección especial",
    feature2Text: "Una colección pensada para diferentes gustos y ocasiones.",
    feature3Title: "Atención cercana",
    feature3Text: "Queremos ayudarte a encontrar una fragancia para ti.",
    aboutEyebrow: "Nuestra identidad",
    aboutTitle: "Más que un perfume, una expresión de ti.",
    aboutText: "NOVA PERFUMS es una marca conceptual dedicada a la presentación de fragancias modernas y elegantes. Buscamos que cada persona encuentre un aroma que represente su estilo y sus recuerdos.",
    audienceText: "Público objetivo: jóvenes y adultos interesados en la perfumería, el cuidado personal y los detalles elegantes.",
    valueText: "Propuesta de valor: presentar diferentes estilos de fragancias en una experiencia de compra visual, sencilla y agradable.",
    missionTitle: "Misión",
    missionText: "Ofrecer una experiencia digital atractiva para descubrir fragancias que acompañen la personalidad de cada cliente.",
    visionTitle: "Visión",
    visionText: "Convertirnos en una marca reconocida por su identidad elegante, su creatividad y su atención al cliente.",
    colorsTitle: "Nuestra paleta de colores",
    colorsText: "Negro: elegancia y sofisticación. Dorado: lujo y exclusividad. Marfil: claridad, tranquilidad y sencillez.",
    techEyebrow: "Aprende mientras exploras",
    techTitle: "Tecnologías web",
    techIntro: "Estas tecnologías ayudan a construir y publicar nuestro sitio.",
    htmlText: "Define la estructura de una página: títulos, imágenes, botones y secciones.",
    cssText: "Controla los colores, tamaños, espacios, tipografías y el diseño visual.",
    jsText: "Agrega interactividad, responde a los clics y permite cambiar el idioma.",
    jqueryText: "Es una biblioteca de JavaScript que simplifica algunas tareas y animaciones.",
    jsonText: "Es un formato de texto para organizar e intercambiar datos. Aquí se usa para guardar las traducciones.",
    hostingTitle: "Hosting y dominios",
    hostingText: "El hosting permite publicar los archivos de la página. Un dominio es su dirección, por ejemplo, ejemplo.com.",
    dnsText: "DNS conecta el nombre del dominio con el servidor correspondiente. La actualización puede tardar un tiempo en reflejarse.",
    sourcesTitle: "Fuentes de consulta",
    quizEyebrow: "Pon a prueba tus conocimientos",
    quizTitle: "Cuestionario web",
    quizIntro: "Responde las preguntas sobre las tecnologías utilizadas en este proyecto.",
    checkAnswers: "Revisar respuestas",
    resetQuiz: "Repetir",
    contactEyebrow: "Estamos para ayudarte",
    contactTitle: "Hablemos de tu próxima fragancia.",
    contactText: "¿Quieres conocer más sobre nuestros perfumes? Completa el formulario y prepara tu consulta.",
    contactDemo: "Formulario de demostración: no envía datos a un servidor.",
    nameLabel: "Nombre (máximo 10 caracteres)",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@correo.com",
    messageLabel: "Mensaje (máximo 500 caracteres)",
    messagePlaceholder: "Escribe tu consulta",
    sendButton: "Enviar consulta",
    footerTagline: "Tu esencia, tu identidad.",
    footerRights: "Proyecto educativo.",
    lightButton: "☀ Claro",
    darkButton: "☾ Oscuro",
    purchaseMessage: "Has seleccionado {product}. Esta demostración no procesa compras.",
    emptyFields: "Completa todos los campos.",
    invalidEmail: "Escribe un correo electrónico válido que incluya @.",
    nameTooLong: "El nombre no puede superar los 10 caracteres.",
    messageTooLong: "El mensaje no puede superar los 500 caracteres.",
    formSuccess: "Formulario validado correctamente. Esta demostración no envió tus datos.",
    quizScore: "Tu resultado: {score} de {total} respuestas correctas.",
    quizCorrect: "¡Correcto!",
    quizWrong: "Incorrecto. ",
    quizExplanation: "Respuesta correcta: ",
    unanswered: "Selecciona una respuesta para cada pregunta.",
    questions: [
      {
        q: "¿Para qué se utiliza HTML?",
        a: ["Para definir la estructura de la página", "Para comprar dominios", "Para guardar contraseñas"],
        correct: 0,
        explanation: "HTML organiza el contenido y la estructura."
      },
      {
        q: "¿Cuál es la función principal de CSS?",
        a: ["Enviar correos", "Dar estilo a la página", "Registrar dominios"],
        correct: 1,
        explanation: "CSS controla la presentación visual."
      },
      {
        q: "¿Qué permite hacer JavaScript?",
        a: ["Agregar interactividad", "Fabricar perfumes", "Registrar una marca automáticamente"],
        correct: 0,
        explanation: "JavaScript permite responder a eventos y actualizar la página."
      },
      {
        q: "¿Qué significa JSON?",
        a: ["Java Source Online Network", "JavaScript Object Notation", "Joint System Open Name"],
        correct: 1,
        explanation: "JSON es un formato de texto para representar datos."
      },
      {
        q: "¿Qué es jQuery?",
        a: ["Una biblioteca de JavaScript", "Un tipo de dominio", "Un servidor físico"],
        correct: 0,
        explanation: "jQuery simplifica ciertas operaciones de JavaScript."
      },
      {
        q: "¿Para qué sirve el hosting?",
        a: ["Para diseñar un logotipo únicamente", "Para alojar archivos de un sitio web", "Para traducir idiomas automáticamente"],
        correct: 1,
        explanation: "El hosting permite que los archivos del sitio estén disponibles en internet."
      },
      {
        q: "¿Qué es un dominio?",
        a: ["La dirección con la que se identifica un sitio", "Una animación", "Un lenguaje de programación"],
        correct: 0,
        explanation: "El dominio es un nombre como ejemplo.com."
      },
      {
        q: "¿Qué significa DNS?",
        a: ["Digital Network Style", "Domain Name System", "Data Number Service"],
        correct: 1,
        explanation: "DNS ayuda a encontrar la dirección asociada a un dominio."
      }
    ]
  },

  en: {
    navHome: "Home",
    navProducts: "Perfumes",
    navAbout: "About Us",
    navTech: "Technologies",
    navQuiz: "Quiz",
    navContact: "Contact",
    heroEyebrow: "The essence of extraordinary",
    heroTitle: "Your essence.<br>Your identity.",
    heroText: "Discover a collection of elegant fragrances designed to accompany your best moments and express who you are.",
    heroButton: "Explore Collection",
    aboutButton: "About Us",
    slide1Small: "Elegance in every detail",
    slide1Title: "One fragrance, a thousand memories",
    slide2Small: "Discover your style",
    slide2Title: "Find your essence",
    slide3Small: "Unforgettable moments",
    slide3Title: "Leave your own mark",
    collectionEyebrow: "Our selection",
    collectionTitle: "Featured Perfumes",
    collectionText: "Fragrances for every personality, occasion, and special moment.",
    tagPopular: "Popular",
    tagElegant: "Elegant",
    tagFresh: "Fresh",
    goldenDesc: "A warm fragrance with sweet and woody notes, perfect for standing out.",
    midnightDesc: "A sophisticated floral combination designed for special evenings.",
    freshDesc: "Fresh, light notes to accompany you throughout the day.",
    buyButton: "Inquire",
    demoNotice: "Sample products and prices for this project. The buttons allow inquiries; they do not process payments.",
    feature1Title: "Unique Style",
    feature1Text: "Scents that express your personality and complement your style.",
    feature2Title: "Special Selection",
    feature2Text: "A collection designed for different tastes and occasions.",
    feature3Title: "Personal Attention",
    feature3Text: "We want to help you find a fragrance that suits you.",
    aboutEyebrow: "Our identity",
    aboutTitle: "More than a perfume, an expression of you.",
    aboutText: "NOVA PERFUMS is a conceptual brand dedicated to presenting modern and elegant fragrances. We want everyone to find a scent that represents their style and memories.",
    audienceText: "Target audience: young people and adults interested in fragrances, personal care, and elegant details.",
    valueText: "Value proposition: present different fragrance styles through a simple, attractive, and enjoyable shopping experience.",
    missionTitle: "Mission",
    missionText: "Offer an engaging digital experience for discovering fragrances that complement each customer's personality.",
    visionTitle: "Vision",
    visionText: "Become a brand recognized for its elegant identity, creativity, and customer service.",
    colorsTitle: "Our color palette",
    colorsText: "Black: elegance and sophistication. Gold: luxury and exclusivity. Ivory: clarity, calm, and simplicity.",
    techEyebrow: "Learn as you explore",
    techTitle: "Web Technologies",
    techIntro: "These technologies help us build and publish our website.",
    htmlText: "Defines a page's structure: headings, images, buttons, and sections.",
    cssText: "Controls colors, sizes, spacing, fonts, and visual design.",
    jsText: "Adds interactivity, responds to clicks, and allows the language to change.",
    jqueryText: "A JavaScript library that simplifies certain tasks and animations.",
    jsonText: "A text format for organizing and exchanging data. Here, it stores translations.",
    hostingTitle: "Hosting and Domains",
    hostingText: "Hosting stores and serves website files. A domain is the site's address, such as example.com.",
    dnsText: "DNS connects a domain name to the appropriate server. Updates may take time to appear everywhere.",
    sourcesTitle: "References",
    quizEyebrow: "Test your knowledge",
    quizTitle: "Web Quiz",
    quizIntro: "Answer questions about the technologies used in this project.",
    checkAnswers: "Check Answers",
    resetQuiz: "Try Again",
    contactEyebrow: "We are here to help",
    contactTitle: "Let's talk about your next fragrance.",
    contactText: "Want to learn more about our perfumes? Fill out the form to prepare your inquiry.",
    contactDemo: "Demo form: it does not send data to a server.",
    nameLabel: "Name (maximum 10 characters)",
    namePlaceholder: "Your name",
    emailLabel: "Email address",
    emailPlaceholder: "you@email.com",
    messageLabel: "Message (maximum 500 characters)",
    messagePlaceholder: "Write your inquiry",
    sendButton: "Send Inquiry",
    footerTagline: "Your essence, your identity.",
    footerRights: "Educational project.",
    lightButton: "☀ Light",
    darkButton: "☾ Dark",
    purchaseMessage: "You selected {product}. This demo does not process purchases.",
    emptyFields: "Please complete all fields.",
    invalidEmail: "Enter a valid email address containing @.",
    nameTooLong: "The name cannot exceed 10 characters.",
    messageTooLong: "The message cannot exceed 500 characters.",
    formSuccess: "Form validated successfully. This demo did not send your data.",
    quizScore: "Your score: {score} out of {total} correct answers.",
    quizCorrect: "Correct!",
    quizWrong: "Incorrect. ",
    quizExplanation: "Correct answer: ",
    unanswered: "Select an answer for every question.",
    questions: [
      {
        q: "What is HTML used for?",
        a: ["Defining the page structure", "Buying domains", "Storing passwords"],
        correct: 0,
        explanation: "HTML organizes content and structure."
      },
      {
        q: "What is the main purpose of CSS?",
        a: ["Sending emails", "Styling the page", "Registering domains"],
        correct: 1,
        explanation: "CSS controls the visual presentation."
      },
      {
        q: "What does JavaScript allow you to do?",
        a: ["Add interactivity", "Manufacture perfumes", "Automatically register a brand"],
        correct: 0,
        explanation: "JavaScript responds to events and updates the page."
      },
      {
        q: "What does JSON stand for?",
        a: ["Java Source Online Network", "JavaScript Object Notation", "Joint System Open Name"],
        correct: 1,
        explanation: "JSON is a text format for representing data."
      },
      {
        q: "What is jQuery?",
        a: ["A JavaScript library", "A domain type", "A physical server"],
        correct: 0,
        explanation: "jQuery simplifies certain JavaScript operations."
      },
      {
        q: "What is web hosting used for?",
        a: ["Only designing a logo", "Hosting website files", "Automatically translating languages"],
        correct: 1,
        explanation: "Hosting makes website files available on the internet."
      },
      {
        q: "What is a domain?",
        a: ["The address used to identify a website", "An animation", "A programming language"],
        correct: 0,
        explanation: "A domain is a name such as example.com."
      },
      {
        q: "What does DNS stand for?",
        a: ["Digital Network Style", "Domain Name System", "Data Number Service"],
        correct: 1,
        explanation: "DNS helps locate the address associated with a domain."
      }
    ]
  }
};

let currentLanguage = "es";
let quizSubmitted = false;
let selectedAnswers = {};

// Aplicar traducciones a todos los elementos data-i18n.
function translatePage() {
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined && typeof dictionary[key] === "string") {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });

  document.getElementById("languageButton").textContent =
    currentLanguage === "es" ? "EN" : "ES";

  updateThemeButton();
  renderQuiz();

  document.title = currentLanguage === "es"
    ? "NOVA PERFUMS | Tu esencia, tu identidad"
    : "NOVA PERFUMS | Your essence, your identity";
}

// Cambiar entre español e inglés.
document.getElementById("languageButton").addEventListener("click", () => {
  currentLanguage = currentLanguage === "es" ? "en" : "es";
  localStorage.setItem("novaLanguage", currentLanguage);
  translatePage();
});

// Cambiar modo claro y oscuro.
function updateThemeButton() {
  const light = document.body.classList.contains("light-mode");
  document.getElementById("themeButton").textContent =
    light ? translations[currentLanguage].darkButton
          : translations[currentLanguage].lightButton;
}

function setTheme(theme) {
  document.body.classList.toggle("light-mode", theme === "light");
  document.documentElement.setAttribute(
    "data-bs-theme",
    theme === "light" ? "light" : "dark"
  );

  localStorage.setItem("novaTheme", theme);
  updateThemeButton();
}

document.getElementById("themeButton").addEventListener("click", () => {
  const isLight = document.body.classList.contains("light-mode");
  setTheme(isLight ? "dark" : "light");
});

// Consultas de productos.
document.querySelectorAll(".buy-button").forEach(button => {
  button.addEventListener("click", () => {
    const message = translations[currentLanguage].purchaseMessage
      .replace("{product}", button.dataset.product);
    alert(message);
  });
});

// Validar formulario de contacto.
$("#message").on("input", function () {
  $("#charCount").text(this.value.length);
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const dictionary = translations[currentLanguage];
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const result = document.getElementById("contactResult");

  result.className = "form-message mt-3 text-danger";

  if (!name || !email || !message) {
    result.textContent = dictionary.emptyFields;
    return;
  }

  if (name.length > 10) {
    result.textContent = dictionary.nameTooLong;
    return;
  }

  if (!email.includes("@") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    result.textContent = dictionary.invalidEmail;
    return;
  }

  if (message.length > 500) {
    result.textContent = dictionary.messageTooLong;
    return;
  }

  result.className = "form-message mt-3 text-success";
  result.textContent = dictionary.formSuccess;
  event.target.reset();
  $("#charCount").text("0");
});

// Cuestionario dinámico traducido.
function renderQuiz() {
  const questions = translations[currentLanguage].questions;
  const container = document.getElementById("quizQuestions");

  container.innerHTML = questions.map((question, index) => `
    <div class="mb-4 quiz-question">
      <h3 class="h5">${index + 1}. ${question.q}</h3>
      ${question.a.map((answer, answerIndex) => `
        <button type="button"
          class="quiz-option ${selectedAnswers[index] === answerIndex ? "selected" : ""}"
          data-question="${index}" data-answer="${answerIndex}">
          ${String.fromCharCode(65 + answerIndex)}. ${answer}
        </button>
      `).join("")}
      <div class="small mt-2" aria-live="polite" id="feedback-${index}"></div>
    </div>
  `).join("");

  container.querySelectorAll(".quiz-option").forEach(button => {
    button.addEventListener("click", () => {
      if (quizSubmitted) return;

      const questionIndex = Number(button.dataset.question);
      const answerIndex = Number(button.dataset.answer);
      selectedAnswers[questionIndex] = answerIndex;

      container.querySelectorAll(
        `[data-question="${questionIndex}"]`
      ).forEach(option => option.classList.remove("selected"));

      button.classList.add("selected");
    });
  });
}

document.getElementById("quizForm").addEventListener("submit", event => {
  event.preventDefault();

  const dictionary = translations[currentLanguage];
  const questions = dictionary.questions;

  if (Object.keys(selectedAnswers).length !== questions.length) {
    document.getElementById("quizResult").textContent = dictionary.unanswered;
    return;
  }

  quizSubmitted = true;
  let score = 0;

  questions.forEach((question, index) => {
    const selected = selectedAnswers[index];
    const options = document.querySelectorAll(
      `[data-question="${index}"]`
    );

    options.forEach((option, answerIndex) => {
      option.disabled = true;

      if (answerIndex === question.correct) {
        option.classList.add("correct");
      }

      if (answerIndex === selected && selected !== question.correct) {
        option.classList.add("wrong");
      }
    });

    const feedback = document.getElementById(`feedback-${index}`);

    if (selected === question.correct) {
      score++;
      feedback.className = "small mt-2 text-success";
      feedback.textContent = dictionary.quizCorrect + " " + question.explanation;
    } else {
      feedback.className = "small mt-2 text-danger";
      feedback.textContent =
        dictionary.quizWrong + dictionary.quizExplanation +
        question.a[question.correct] + ". " + question.explanation;
    }
  });

  document.getElementById("quizResult").textContent =
    dictionary.quizScore
      .replace("{score}", score)
      .replace("{total}", questions.length);
});

document.getElementById("resetQuiz").addEventListener("click", () => {
  selectedAnswers = {};
  quizSubmitted = false;
  document.getElementById("quizResult").textContent = "";
  renderQuiz();
});

// Animaciones suaves al aparecer las secciones.
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".fade-up").forEach(element => observer.observe(element));

// Año automático.
document.getElementById("year").textContent = new Date().getFullYear();

// Recuperar preferencias guardadas.
const savedLanguage = localStorage.getItem("novaLanguage");
const savedTheme = localStorage.getItem("novaTheme");

if (savedLanguage === "en" || savedLanguage === "es") {
  currentLanguage = savedLanguage;
}

setTheme(savedTheme === "light" ? "light" : "dark");
translatePage();