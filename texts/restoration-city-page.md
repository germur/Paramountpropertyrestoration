\# 📦 Documentación de Componentes Programáticos para Restauración (versión simplificada)

Esta guía está pensada para ayudar al desarrollador a entender de forma rápida y clara qué hace cada componente, cómo se alimenta y cuándo aparece. La estructura responde a páginas como:

\`/restoration/{service}/{subcategory}/{city}/\`

\---

\#\# 🧱 RestorationPage

\*\*Qué hace:\*\* Arma toda la página según el tipo de servicio, subcategoría y ciudad.   
\*\*Cómo funciona:\*\* Recibe un objeto \`data\` y reparte la info a los módulos internos.   
\*\*Origen del contenido:\*\* JSON local o CMS. 

\---

\#\# 🟦 HeroSolution

\*\*Qué hace:\*\* Encabezado con título, subtítulo y CTA. Responde de inmediato: ¿Qué hacemos? ¿Dónde? ¿Cómo ayudamos?  
\*\*Qué muestra:\*\*  
\- Título dinámico (ej. "Flood Damage in Orlando")  
\- Subtítulo corto  
\- Botón de contacto o acción inmediata

\*\*Cuándo aparece:\*\* Siempre arriba de la página.

\---

\#\# 🟨 QuickRelief

\*\*Qué hace:\*\* Muestra en 3 a 5 pasos cómo resolvemos el problema.  
\*\*Qué muestra:\*\*  
\- Lista tipo "paso 1, paso 2..."  
\- Tiempo estimado (opcional)

\*\*Ejemplo:\*\* "Inspection \> Drying \> Dehumidification \> Sanitization \> Restoration"

\---

\#\# 🟩 FAQSimple

\*\*Qué hace:\*\* Sección de preguntas frecuentes.  
\*\*Qué muestra:\*\*  
\- Lista de preguntas y respuestas típicas de ese servicio o ciudad.

\*\*Contenido:\*\* Puede generarse automáticamente o cargarse desde el CMS/JSON.

\---

\#\# 🟫 TrustSignals

\*\*Qué hace:\*\* Muestra elementos que generan confianza.  
\*\*Qué muestra:\*\*  
\- Insignias (ej. "24/7", "Licensed & Insured")  
\- Ciudades cercanas atendidas

\*\*Dónde se ubica:\*\* Al final o antes del último CTA.

\---

\#\# 🖼️ MiniGallery (opcional)

\*\*Qué hace:\*\* Galería con fotos de antes y después (si existen).  
\*\*Qué muestra:\*\*  
\- 2 o 3 imágenes máximo  
\- Etiqueta corta si se desea

\*\*Cuándo se usa:\*\* Si hay material visual disponible.

\---

\#\# 📂 Ejemplo de archivo JSON por ruta

Este archivo alimenta dinámicamente todos los componentes anteriores para una URL tipo \`/restoration/water-damage/flood-damage/orlando/\`

\`\`\`json  
{  
  "service": "water-damage",  
  "subcategory": "flood-damage",  
  "city": "orlando",

  "hero": {  
    "title": "Flood Damage Restoration in Orlando",  
    "subtitle": "Fast, certified help for flooded homes and businesses.",  
    "cta": "Request Immediate Help"  
  },

  "process": {  
    "steps": \[  
      "Initial inspection and assessment",  
      "Water extraction and removal",  
      "Drying and dehumidification",  
      "Sanitization and odor removal",  
      "Full restoration and rebuild"  
    \],  
    "estimatedTime": "Completed within 24 hours"  
  },

  "faqs": \[  
    {  
      "q": "How quickly can you respond to a flood emergency?",  
      "a": "We respond within 60 minutes, 24/7, in the Orlando area."  
    },  
    {  
      "q": "Is water damage covered by insurance?",  
      "a": "It depends on your policy, but we help you with documentation and claims."  
    }  
  \],

  "trust": {  
    "badges": \[  
      "24/7 Emergency Response",  
      "Licensed & Insured",  
      "Certified Restoration Experts"  
    \],  
    "coverageArea": \[  
      "Orlando", "Kissimmee", "Winter Park"  
    \]  
  },

  "gallery": \[  
    {  
      "src": "/images/orlando/flood-before.jpg",  
      "label": "Before restoration"  
    },  
    {  
      "src": "/images/orlando/flood-after.jpg",  
      "label": "After restoration"  
    }  
  \]  
}  
\`\`\`

\---

\*\*Notas finales para el desarrollador:\*\*  
\- Todos los textos y datos provienen del objeto \`data\`, estructurado por \`{service}/{subcategory}/{city}\`.  
\- No es necesario tener todos los componentes en cada página.  
\- Usa lógica condicional para mostrar solo lo que esté disponible.

¿Listo para conectar los datos o generar rutas dinámicas? Te puedo ayudar con eso también. 🚀

