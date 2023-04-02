const express = require('express');
const app = express();
const database = require('./connexion')



app.get('/', (req, res) => {
    database.query('SELECT * FROM sniff', (err, data) => {
        if (err) throw err;

        let tableHtml = `
  <div class="tabla">
    <table>
      <tr>
        <th style="background-color: rgb(144, 149, 147)">msc_src</th>
        <th >mac_des</th>
        <th style="background-color: rgb(144, 149, 147)">ip_src</th>
        <th >tam_src</th>
        <th style="background-color: rgb(144, 149, 147)">op_des</th>
        <th >tam_des</th>
      </tr>
`;

        data.forEach(result => {
            tableHtml += `
    <tr>
      <td>${result.mac_src}</td>
      <td>${result.mac_des}</td>
      <td>${result.ip_src}</td>
      <td>${result.tam_src}</td>
      <td>${result.ip_des}</td>
      <td>${result.tam_des}</td>
    </tr>
  `;
        });

        tableHtml += `
    </table>
  </div>
`;

        // Envía la tabla como respuesta a la solicitud HTTP
        res.send(tableHtml);
    })
});

// Inicia el servidor y escucha las solicitudes entrantes en el puerto especificado
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});