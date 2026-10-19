# 🌐 Portafolio de Proyecto Web: NOVA PERFUMS

**Estudiante:** [FLOR NAHOMY HERNÁNDEZ BOLAÑOS]
**Fecha:** 19 de octubre de 2026
**Enlace al Sitio Web (Vercel):** https://vercel.com/flor-afbc/nova-perfums-30
**Repositorio GitHub:** https://github.com/19842384-cmd/nova-perfums-30

---

## 1. Identidad de Marca y Producto

### 🧴 Ficha del Producto

* **Nombre Comercial:** NOVA PERFUMS
* **Descripción:** NOVA PERFUMS es una marca conceptual dedicada a la presentación de fragancias modernas y elegantes. El sitio muestra una colección de perfumes (Golden Aura, Midnight Bloom y Fresh Essence) en una experiencia visual, sencilla y agradable. **Propuesta de valor:** presentar diferentes estilos de fragancias para que cada persona encuentre un aroma que represente su estilo y sus recuerdos.
* **Público Objetivo:** Jóvenes y adultos interesados en la perfumería, el cuidado personal y los detalles elegantes.

### 🎨 Diseño Visual

* **Logotipo:**

![Logotipo de la Marca](assets/logo.png)

* **Paleta de Colores:**

| Color | Código HEX | Uso en el Sitio |
| :--- | :--- | :--- |
| Dominante (Negro) | `#101010` | Fondo general, navegación y pie de página. Transmite elegancia y sofisticación. |
| Secundario (Dorado) | `#C9A45C` | Logotipo, títulos destacados, botones, precios y bordes al pasar el cursor. Transmite lujo y exclusividad. |
| Acento (Marfil) | `#F7F4EE` | Texto sobre fondo oscuro y fondo del modo claro. Transmite claridad, tranquilidad y sencillez. |

* **Demostración del Carousel (Bootstrap):**

![Carousel de Productos](assets/carousel-demo.png)

El carousel de Bootstrap 5 muestra tres diapositivas con imágenes de perfumes, cambio automático cada 4 segundos, indicadores y botones de anterior y siguiente.

---

## 2. Investigación Técnica

Resumen informativo de las subpáginas creadas:

1. **JavaScript (Vanilla):** Es el lenguaje que da interactividad a una página. HTML define la estructura, CSS define el estilo y JavaScript define el comportamiento. Los conceptos clave son las *variables* (guardan datos), las *funciones* (bloques de código reutilizables) y los *eventos* (reacciones a acciones del usuario, como un clic). En este proyecto se usa para el cambio de idioma, el modo claro/oscuro, la validación del formulario y el cuestionario.

   ```javascript
   button.addEventListener("click", () => {
     alert("¡Bienvenido a NOVA!");
   });
   ```

2. **jQuery:** Es una biblioteca de JavaScript creada en 2006 por John Resig para simplificar el manejo del DOM, los eventos y las animaciones, y para resolver diferencias entre navegadores. Su sintaxis básica usa el símbolo `$`. Ventaja: código más corto. Desventaja: hoy JavaScript moderno cubre casi todo lo que antes solo jQuery hacía fácil.

   | Tarea | JavaScript Vanilla | jQuery |
   | :--- | :--- | :--- |
   | Seleccionar un elemento | `document.getElementById("mensaje")` | `$("#mensaje")` |
   | Evento de clic | `el.addEventListener("click", fn)` | `$("#el").on("click", fn)` |
   | Mostrar con efecto | Requiere CSS o código adicional | `$("#mensaje").fadeIn()` |

3. **JSON:** (JavaScript Object Notation) es un formato de texto para organizar e intercambiar datos mediante pares **clave-valor**. Es ligero, fácil de leer y es el formato más usado para consumir APIs. En este proyecto guarda las traducciones al español e inglés y las preguntas del cuestionario.

   ```json
   {
     "marca": "NOVA PERFUMS",
     "precio": 45
   }
   ```

4. **Web Hosting y Dominios:** El *hosting* es el servicio que aloja los archivos del sitio en un servidor para que estén disponibles en internet. *Vercel* es una plataforma que despliega sitios estáticos de forma automática desde GitHub y entrega una URL pública con HTTPS. Un *dominio* es la dirección legible del sitio (por ejemplo, `ejemplo.com`) y termina en un TLD como `.com`, `.org` o `.sv`. El *DNS* (Domain Name System) traduce el nombre del dominio a la dirección del servidor; los cambios pueden tardar un tiempo en propagarse.

---

## 3. Integraciones Especiales

### 💬 Formulario de Contacto + Webhook de Discord

Explicación técnica del funcionamiento:

1. El usuario completa el formulario en la web (nombre, correo y mensaje) y se validan los campos.
2. Se ejecuta una petición asíncrona (`fetch` con método `POST`) hacia la URL del Webhook de Discord, enviando los datos en formato JSON.
3. La notificación se despliega inmediatamente en el canal de Discord designado.

```javascript
fetch(WEBHOOK_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    content: `**Nombre:** ${name}\n**Correo:** ${email}\n**Mensaje:** ${message}`
  })
});
```

---

## 4. Anexos y Evidencias Gráficas

### 📎 Anexo 1: Integración con Discord (Formulario vs. Recepción)

![Formulario y notificación en Discord](assets/discord-webhook.png)

### 📎 Anexo 2: Despliegue Exitoso en Vercel

![Despliegue en Vercel con estado Ready](assets/vercel-status.png)

### 📎 Anexo 3: Diseño Responsive y Bootstrap

![Vista móvil desde DevTools](assets/responsive-mobile.png)

### 📎 Anexo 4: Cuestionario Interactivo en Funcionamiento

![Quiz de Conocimientos Web](assets/quiz-funcionando.png)

### 📎 Anexo 5: Estructura del Repositorio en GitHub

![Estructura del repositorio](assets/github-repo.png)

---

## 5. Conclusiones y Autoevaluación

* **Desafíos enfrentados:** Integrar el envío asíncrono al webhook de Discord sin exponer datos sensibles, mantener el sitio adaptable a pantallas móviles y organizar las traducciones en un diccionario JSON para cambiar de idioma sin recargar la página.
* **Aprendizajes clave:** Uso de componentes de Bootstrap 5 (navbar, carousel, rejilla y formularios), manipulación del DOM con JavaScript y jQuery, validación de formularios, consumo de peticiones con `fetch`, despliegue en Vercel con control de versiones en GitHub y documentación técnica en Markdown.