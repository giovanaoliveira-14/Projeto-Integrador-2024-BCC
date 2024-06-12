if (localStorage.getItem("userLoggedIn") === "true") {
  // Substitua pelo seu próprio API Key da OpenWeather
  function getWeatherData(city) {
    const apiKey = "ceee946a10e4c4c391957c0d3f01150d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao obter dados do clima");
        }
        return response.json();
      })
      .then((data) => {
        // Manipular os dados recebidos e atualizar o HTML
        console.log(data);

        // Atualizar a temperatura atual
        document.querySelector(
          ".informacoes-temperatura h3"
        ).textContent = `${data.main.temp}°`;

        // Atualizar a temperatura mínima
        document.getElementById(
          "temperaturaMin"
        ).textContent = `${data.main.temp_min}° Celsius`;

        // Atualizar a umidade
        document.getElementById(
          "umidade"
        ).textContent = `${data.main.humidity}%`;

        // Atualizar outras informações conforme necessário
        // ...

        // Calcular e atualizar o índice UV (exemplo)
        const intensity = data.current.uvi;
        const uvIndex = calculateUVIndex(intensity);
        document.getElementById("luzUV").textContent = uvIndex;

        const weatherDescription = translateWeatherDescription(
          data.weather[0].description
        );
        document.getElementById("descricaoClima").textContent =
          weatherDescription;
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

  // Função para calcular o índice UV (exemplo)
  function calculateUVIndex(intensity) {
    if (intensity < 3) {
      return "Baixo";
    } else if (intensity < 6) {
      return "Moderado";
    } else if (intensity < 8) {
      return "Alto";
    } else if (intensity < 11) {
      return "Muito Alto";
    } else {
      return "Extremo";
    }
  }

  // Função para traduzir as descrições do clima (exemplo)
  function translateWeatherDescription(description) {
    switch (description) {
      case "clear sky":
        return "Céu Limpo";
      case "few clouds":
        return "Poucas Nuvens";
      // Adicione mais traduções conforme necessário
      default:
        return description;
    }
  }

  // Exemplo de uso: Chamando a função com o nome da cidade desejada
  getWeatherData("Marília");
} else {
  alert("Usuário não logado!");
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 500);
}
