const express = require('express');
const app = express();
app.use(express.json()); // Pour traiter les requêtes JSON

// Route pour extraire les horaires de début
app.post('/extract-start-times', (req, res) => {
    try {
        // Récupérer la donnée JSON envoyée par Make.com
        const inputJson = req.body;

        // Vérifiez la structure des données
        if (inputJson && inputJson.value && Array.isArray(inputJson.value)) {
            // Extraire les horaires de début de chaque créneau
            const startTimes = inputJson.value.map(slot => slot.start);

            // Convertir en JSON pour le retour
            const resultJson = { startTimes }; // Encapsuler dans un objet

            console.log("Extracted start times as JSON:", resultJson);

            // Envoyer la réponse avec le bon type de contenu
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(resultJson);
        } else {
            console.error("Invalid data structure:", inputJson);
            res.status(400).send({ error: "Invalid data structure" });
        }
    } catch (error) {
        console.error("Error processing the request:", error);
        res.status(500).send({ error: "Server error" });
    }
});

// Démarrer le serveur sur un port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
