const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const { getWeatherData } = require('./controllers/weatherController');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/weather/:latitude/:longitude', getWeatherData);

app.listen(PORT, () => {
    console.log(`Server running`);
});
