const axios = require('axios');

exports.handler = async (event) => {
  const { location } = JSON.parse(event.body);
  const apiKey = '06798b63f699ae29550e1ef7a10e48d7';
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    // Extract the relevant weather information
    const { main, description } = weatherData.weather[0];
    const temperature = weatherData.main.temp;

    const result = {
      location,
      weather: {
        main,
        description,
        temperature: temperature - 273.15, // Convert temperature from Kelvin to Celsius
      },
    };

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error('Error retrieving weather data:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to retrieve weather data' }),
    };
  }
};
