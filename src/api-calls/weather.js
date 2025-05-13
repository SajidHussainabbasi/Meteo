/*
export async function fetchWeatherData(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}*/
export async function fetchWeatherData(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=10`;

  try {
    const response = await fetch(url);

    // Check for specific status codes
    if (response.status === 200) {
      const data = await response.json();
      console.log('Fetch successful');
      return data;
    } else if (response.status === 404) {
      console.error('Error 404: Not Found');
    } else if (response.status === 500) {
      console.error('Error 500: Internal Server Error');
    } else {
      console.error(`Unexpected error: ${response.status} ${response.statusText}`);
    }

    return null;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}