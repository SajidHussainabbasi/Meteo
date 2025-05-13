export function renderWeather(data) {
  const container = document.getElementById('weather-container');
  container.innerHTML = '';

  if (!data || !data.hourly) {
    container.textContent = 'Weather data unavailable.';
    return;
  }

  const hourlyTemps = data.hourly.temperature_2m;
  const dates = data.hourly.time;

  for (let i = 0; i < dates.length; i += 24) { // daily summaries
    const card = document.createElement('div');
    card.className = 'weather-card';

    const date = new Date(dates[i]).toLocaleDateString();

    let hourlyDetails = '';
    for (let j = 0; j < 24 && i + j < dates.length; j++) {
      const hour = new Date(dates[i + j]).getHours().toString().padStart(2, '0');
      const temp = hourlyTemps[i + j].toFixed(1);
      hourlyDetails += `<li>${hour}:00 - ${temp}°C</li>`;
    }

    card.innerHTML = `
      <strong>${date}</strong>
      <ul>${hourlyDetails}</ul>
    `;
    container.appendChild(card);
  }
}