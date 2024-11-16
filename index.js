const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Définir une route POST
app.post('/', (req, res) => {
  const requestData = req.body;
  // Effectuez vos traitements ici...
  console.log(requestData);
  
  // Répondez à la requête avec une confirmation
  res.status(200).send({ message: "Données reçues avec succès", data: requestData });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
