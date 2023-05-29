const axios = require('axios');

exports.handler = async (event) => {
  const { location } = JSON.parse(event.body);
  const apiUrl = `https://www.metaweather.com/api/location/search/?query=${encodeURIComponent(location)}`;

  try {
    const response = await axios.get(apiUrl);
    const woeid = response.data[0].woeid;
    const weatherUrl = `https://www.metaweather.com/api/location/${woeid}/`;

    const weatherResponse = await axios.get(weatherUrl);
    const weatherData = weatherResponse.data.consolidated_weather[0];

    // Extract the relevant weather information
    const { weather_state_name, weather_state_abbr, the_temp } = weatherData;

    const result = {
      location,
      weather: {
        main: weather_state_name,
        description: weather_state_abbr,
        temperature: the_temp,
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
