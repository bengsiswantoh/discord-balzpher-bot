const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { getPrice } = require('./endpoints/yahoo.js');

app.get('/', async (req, res) => res.send(await getPrice()));

app.listen(port, () => console.log(`App started`));
