const express = require('express'); // Importazione di Express.js
const app = express(); // Applicazione Express
const path = require('path');

const port = 3000; // Imposta la porta su cui il server ascolta


// Rotta principale
app.get('/', (req, res) => {
    res.send('Server del mio blog'); // Risposta da inviare
});

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
