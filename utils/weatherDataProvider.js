const axios = require('axios');

const pow_of_instalation = 2.5;
const panel_efficiency = 0.2;

const fetchWeatherData = async (latitude, longitude) => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunshine_duration`;
    const response = await axios.get(apiUrl);
    return response.data;
};

const processWeatherData = (weatherData) => {
    const energy_generated = [];
    weatherData.daily.sunshine_duration.forEach(sunshine_time_in_sec => {
        const equation = Math.round(pow_of_instalation * panel_efficiency * (sunshine_time_in_sec / 3600) * 100) / 100;
        energy_generated.push(equation);
    });

    return {
        date: weatherData.daily.time,
        weather_code: weatherData.daily.weather_code,
        max_temp: weatherData.daily.temperature_2m_max,
        min_temp: weatherData.daily.temperature_2m_min,
        estimated_energy: energy_generated
    };
};

module.exports = { fetchWeatherData, processWeatherData };
