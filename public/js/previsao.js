$(document).ready(function() {
  const apiKey = 'ceee946a10e4c4c391957c0d3f01150d';
  const city = 'Sao Paulo';
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const forecastList = data.list;
      const container = $('#previsoes-container');
      container.empty();

      forecastList.forEach((forecast, index) => {
        if (index % 8 === 0) { 
          const card = `
            <div class="previsoes-futuras-card">
              <div class="previsoes-futuras-informacoes">
                <div class="previsoes-futuas-temperatura">
                  <span>${Math.round(forecast.main.temp)}°</span>
                  <div class="previsoes-futuas-temperatura-linha"></div>
                  <span>${Math.round(forecast.main.temp_max)}°/${Math.round(forecast.main.temp_min)}°</span>
                </div>
                <div class="previsoes-futuras-infos">
                  <span class="previsao-precipitacao">Precipitação: ${forecast.pop * 100}%</span>
                  <span class="previsao-sensacao">Sensação térmica: ${Math.round(forecast.main.feels_like)}°</span>
                  <span class="previsao-vento">Velocidade do vento: ${forecast.wind.speed} KM/H</span>
                  <span class="previsao-lua-sol">${new Date(forecast.dt_txt).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
              <figure class="previsoes-futuras-icone">
                <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="${forecast.weather[0].description}" />
              </figure>
            </div>
          `;
          container.append(card);
        }
      });
    })
    .catch(error => {
      console.error('Error fetching the weather data', error);
    });
});
