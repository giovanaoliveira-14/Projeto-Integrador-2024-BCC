if (localStorage.getItem("userLoggedIn") === "true") {
  const apiKey = "ceee946a10e4c4c391957c0d3f01150d";

  function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao obter dados do clima");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        updatePrecipitationData(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

  function updatePrecipitationData(data) {
    const elements = document.querySelectorAll('.precipitacao-elemento');
    const precipitationData = getDailyPrecipitation(data.list);
  
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Zerar as horas, minutos, segundos e milissegundos
  
    elements.forEach((element, index) => {
      if (index < 4) { // Exibir somente as próximas 4 previsões
        const precipitation = precipitationData[index];
        const progressElement = element.querySelector('.precipitacao-progresso');
        const percentageElement = element.querySelector('.precipitacao-porcentagem');
        const dateElement = element.querySelector('.precipitacao-data');
  
        const percentage = precipitation * 100;
  
        progressElement.style.width = `${percentage}%`;
        percentageElement.textContent = `${percentage.toFixed(0)}%`;
        
        // Obtendo a data correspondente
        const date = new Date(currentDate);
        date.setDate(date.getDate() + index); // Adicionando o index para obter os próximos dias
        dateElement.textContent = date.toLocaleDateString('pt-BR');
      }
    });
  }
  
  function getDailyPrecipitation(list) {
    const dailyData = {};
    list.forEach((item) => {
      const date = item.dt_txt.split(' ')[0];
      if (!dailyData[date]) {
        dailyData[date] = [];
      }
      dailyData[date].push(item.pop);
    });

    // Calcular a média de `pop` para cada dia
    const dailyAveragePop = Object.values(dailyData).map(dayData => {
      const sum = dayData.reduce((acc, pop) => acc + pop, 0);
      return sum / dayData.length;
    });

    return dailyAveragePop.slice(0, 4); // Apenas para os próximos 4 dias
  }

  getWeatherData("Marília");
} else {
  alert("Usuário não logado!");
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 500);
}
