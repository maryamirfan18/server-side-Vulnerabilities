// ssrf-example.js
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// ⚠️ Vulnerable to SSRF
app.post('/product/stock', async (req, res) => {
  const apiUrl = req.body.stockApi;

  try {
    const response = await fetch(apiUrl);
    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.status(500).send('Error fetching stock data');
  }
});

app.listen(3000, () => {
  console.log('SSRF Example app listening on port 3000');
});
