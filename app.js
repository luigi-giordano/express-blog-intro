const express = require('express'); // Importazione di Express.js
const app = express(); // Applicazione Express
const path = require('path');

const port = 3000; // Imposta la porta su cui il server ascolta

// Array di post
const posts = [
  {
      titolo: "Introduzione a Express.js",
      contenuto: "Express.js è un framework minimalista per Node.js.",
      immagine: "",
      tags: ["Node.js", "Express", "Backend"]
  },
  {
      titolo: "JavaScript",
      contenuto: "Funzionalità del linguaggio JavaScript.",
      immagine: "",
      tags: ["JavaScript", "JS", "Frontend"]
  },
  {
      titolo: "API",
      contenuto: "API con Express.js.",
      immagine: "",
      tags: ["API", "URL", "Express"]
  },
  {
      titolo: "Database",
      contenuto: "Database NoSQL",
      immagine: "",
      tags: ["Database", "Librerie", "NoSQL"]
  },
  {
      titolo: "Bootstrap",
      contenuto: "Guida all'utilizzo di Bootstrap",
      immagine: "",
      tags: ["Bootstrap", "CSS", "Card"]
  }
];

// Rotta principale
app.get('/', (req, res) => {
    res.send('Server del mio blog'); // Risposta da inviare
});

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
