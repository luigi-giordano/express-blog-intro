const express = require('express'); // Importazione di Express.js
const app = express(); // Applicazione Express
const path = require('path');

const port = 3000; // Imposta la porta su cui il server ascolta

// Array di post
const posts = [
  {
      titolo: "Introduzione a Express.js",
      contenuto: "Express.js è un framework minimalista per Node.js.",
      immagine: "/public/ciambeellone.jpeg",
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

// Rendo publici i file statici
app.use(express.static('public'));

// Rotta principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Risposta da inviare
});

// Rotta bacheca
app.get('/bacheca', (req, res) => {
  const post = {
    conteggioPost: posts.length,
    listaPost: posts
  };
  res.json(post);
})


// app.get('/ciambellone', (req, res) => {
//   res.send('<img src="/ciambellone.jpeg" alt="">')
// } )


// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
