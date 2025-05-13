import { fetchWeatherData } from '../api-calls/weather.js';
import { renderWeather } from '../components/renderWeather.js';
import { config } from '../config.js';

export async function loadWeather() {
  const data = await fetchWeatherData(config.latitude, config.longitude);
  renderWeather(data);
}