const { fetchWeatherData, processWeatherData } = require('./weatherDataProvider');

const getWeatherData = async (req, res) => {
    try {
        const { latitude, longitude } = req.params;

        const rawWeatherData = await fetchWeatherData(latitude, longitude);
        const formattedData = processWeatherData(rawWeatherData);

        res.json(formattedData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Error fetching weather data');
    }
};

module.exports = { getWeatherData };
