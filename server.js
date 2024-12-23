const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 

const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Received POST data:', data);
  res.send(`Received your POST request! Name: ${data.name}, Message: ${data.message}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
