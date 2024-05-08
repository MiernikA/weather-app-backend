const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const { getWeatherData } = require('./utils/weatherController');
const validateCoords = require('./utils/validateCoords');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/weather/:latitude/:longitude', validateCoords, getWeatherData);

app.listen(PORT, () => {
    console.log(`Server running`);
});
