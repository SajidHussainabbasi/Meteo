import { loadWeather } from './handlers/weatherHandler.js';
import { setupListeners } from './listeners/setupListeners.js';

document.addEventListener('DOMContentLoaded', () => {
  loadWeather();
  setupListeners();
});


