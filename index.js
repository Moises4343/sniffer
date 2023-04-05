const express = require('express');
const app = express();
const database = require('./connexion')
const cors = require("cors")



app.get("/get-address", cors(), (req, res) => {
    database.query('SELECT * FROM sniff', (err, data) => {
        if (err) throw err;
        // Envía la tabla como respuesta a la solicitud HTTP
        res.json({data: data});
    })
});

// Inicia el servidor y escucha las solicitudes entrantes en el puerto especificado
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});