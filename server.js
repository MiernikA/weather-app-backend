const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const pow_of_instalation = 2.5
const panel_efficiency = 0.2

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running`);
});

app.get('/weather/:latitude/:longitude', async (req, res) => {
    try {

        const { latitude, longitude } = req.params;

        if (!latitude || !longitude || isNaN(Number(latitude)) || isNaN(Number(longitude)))
            return res.status(400).send('Invalid latitude or longitude. Both should be numbers.');

        if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180)
            return res.status(400).send('Invalid latitude or longitude. Latitude must be between -90 and 90. Longitude must be between -180 and 180.');


        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunshine_duration`;
        const response = await axios.get(apiUrl);

        const energy_generated = []
        const weatherData = response.data;
        weatherData.daily.sunshine_duration.forEach(sunshine_time_in_sec => {

            const equation = Math.round(pow_of_instalation * panel_efficiency * (sunshine_time_in_sec / 3600) * 100) / 100
            energy_generated.push(equation)
        });

        const data = {
            date: weatherData.daily.time,
            weather_code: weatherData.daily.weather_code,
            max_temp: weatherData.daily.temperature_2m_max,
            min_temp: weatherData.daily.temperature_2m_min,
            estimated_energy: energy_generated
        }
        res.json(data);

    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Error fetching weather data');
    }
});