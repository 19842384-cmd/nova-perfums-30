/* FORMULARIO DE CONTACTO Y ENVÍO A DISCORD */
(() => {
  "use strict";

  // Sustituye este texto por la URL completa de tu webhook de Discord.
  const WEBHOOK_URL = "https://discord.com/api/webhooks/1557797442685108307/QG9qa1MjJCVO4gwV-UQ7O72mia28PEFImbSE2ZvlEj4gkQn6QsO7xhnBJ6qlQJaZwbzg";10
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const result = document.getElementById("contactResult");
  const submitButton = form.querySelector('button[type="submit"]');
  const charCount = document.getElementById("charCount");

  const messages = {
    es: {
      name: "Escribe tu nombre.",
      nameLength: "El nombre no puede superar los 10 caracteres.",
      email: "Escribe un correo válido que incluya @.",
      message: "Escribe un mensaje.",
      messageLength: "El mensaje no puede superar los 500 caracteres.",
      config: "Falta configurar la URL del webhook de Discord.",
      sending: "Enviando consulta...",
      success: "¡Tu consulta se envió correctamente a Discord!",
      error: "No se pudo enviar el mensaje. Revisa la URL del webhook y la conexión."
    },
    en: {
      name: "Enter your name.",
      nameLength: "Your name cannot exceed 10 characters.",
      email: "Enter a valid email address that includes @.",
      message: "Enter a message.",
      messageLength: "The message cannot exceed 500 characters.",
      config: "The Discord webhook URL has not been configured.",
      sending: "Sending inquiry...",
      success: "Your inquiry was sent to Discord successfully!",
      error: "The message could not be sent. Check the webhook URL and connection."
    }
  };

  const getMessages = () => messages[document.documentElement.lang === "en" ? "en" : "es"];
  const showResult = (text, success = false) => {
    result.textContent = text;
    result.style.color = success ? "#218838" : "#dc3545";
  };

  messageInput.addEventListener("input", () => {
    if (charCount) charCount.textContent = messageInput.value.length;
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = getMessages();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name) return showResult(text.name);
    if (name.length > 10) return showResult(text.nameLength);
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return showResult(text.email);
    if (!message) return showResult(text.message);
    if (message.length > 500) return showResult(text.messageLength);
    if (!WEBHOOK_URL.startsWith("https://discord.com/api/webhooks/")) return showResult(text.config);

    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = text.sending;
    showResult(text.sending, true);

    const payload = {
      allowed_mentions: { parse: [] },
      embeds: [{
        title: "Nueva consulta — NOVA PERFUMS",
        color: 13226588,
        fields: [
          { name: "Nombre", value: name, inline: true },
          { name: "Correo electrónico", value: email, inline: true },
          { name: "Mensaje", value: message }
        ],
        footer: { text: "Formulario web de NOVA PERFUMS" },
        timestamp: new Date().toISOString()
      }]
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`Discord respondió con estado ${response.status}`);
      showResult(text.success, true);
      form.reset();
      if (charCount) charCount.textContent = "0";
    } catch (error) {
      console.error("Error al enviar la consulta a Discord:", error);
      showResult(text.error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
})();
