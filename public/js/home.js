import { tabelaUmidadeTemperatura, tabelaUVChuva } from './base/base-dados.js';

if (localStorage.getItem("userLoggedIn") === "true") {
  const firebaseConfig = {
    apiKey: "AIzaSyAQNunOvOyP6Z3hShU3BV8KazyNwEjd_0c",
    authDomain: "projeto-estacao-meteorologica.firebaseapp.com",
    databaseURL:
      "https://projeto-estacao-meteorologica-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projeto-estacao-meteorologica",
    storageBucket: "projeto-estacao-meteorologica.appspot.com",
    messagingSenderId: "1031346489742",
    appId: "1:1031346489742:web:53be9814f15dc27a837cdf",
    measurementId: "G-X68BBJH2WT",
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const apiKey = "ceee946a10e4c4c391957c0d3f01150d";

  const userDataString = localStorage.getItem("userData");
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    const userID = userData.userId;
    const userRef = firebase.database().ref("Usuario/" + userID);

    userRef
      .once("value")
      .then((snapshot) => {
        const user = snapshot.val();
        let cidadeUser = user.cidade;
        $(".informacoes-cidade").text(
          user.cidade + " - " + user.estado + " - Brasil"
        );
        getWeatherData(cidadeUser);
      })
      .catch((error) => {
        console.log(
          "Não foi possível resgatar informações de senha do usuário!"
        );
      });
    function getLastPlantioData() {
      const plantioRef = firebase
        .database()
        .ref("Usuario/" + userID + "/leituras");
      plantioRef
        .orderByKey()
        .limitToLast(1)
        .once("value")
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const lastEntryKey = Object.keys(data)[0];
            const lastEntryData = data[lastEntryKey];
            console.log("Último registro:", lastEntryData);
            getSugestaoPlantio(lastEntryData);
          } else {
            console.log("Nenhum dado encontrado no nó Plantio.");
          }
        })
        .catch((error) => {
          console.error("Erro ao resgatar dados:", error);
        });
    }

    // Função para obter sugestão de plantio com base na umidade e temperatura ou UV e chuva
    function getSugestaoPlantio(tipo, leituraUmidade, leituraTemperaturaOuChuva) {
      let tabela;
      let faixaTipo;
      let faixaTemperaturaChuva;
    
      if (tipo === 'umidade') {
        tabela = tabelaUmidadeTemperatura.umidade;
        faixaTipo = 'temperatura'; // Para umidade, procuramos na faixa de temperatura
      } else if (tipo === 'uv') {
        tabela = tabelaUVChuva.uv;
        faixaTipo = 'chuva'; // Para UV, procuramos na faixa de chuva
      } else {
        return { aviso: '', dica: '' }; // Retorna vazio se tipo não for reconhecido
      }
    
      // Encontra a faixa de umidade ou UV
      let faixa;
      if (tipo === 'umidade') {
        // Encontra a faixa de umidade baseada em números
        faixa = Object.keys(tabela).find(faixa => {
          let [min, max] = faixa.split('-').map(Number);
          return leituraUmidade >= min && leituraUmidade <= max;
        });
      } else if (tipo === 'uv') {
        // Encontra a faixa de UV baseada em strings
        faixa = Object.keys(tabela).find(faixa => {
          return leituraUmidade === faixa; // Comparação direta da leitura de UV com a faixa atual
        });
      }
    
      if (!faixa) {
        return { aviso: '', dica: '' }; // Retorna vazio se não encontrar faixa adequada
      }
    
      // Encontra a faixa de temperatura ou chuva dentro da faixa de umidade ou UV encontrada
      faixaTemperaturaChuva = Object.keys(tabela[faixa][faixaTipo]).find(faixaTC => {
        let [min, max] = faixaTC.split('-').map(Number);
        if (faixaTipo === 'chuva') {
          // Tratamento especial para a tabelaUVChuva, onde as faixas são strings
          return faixaTC === leituraTemperaturaOuChuva;
        } else {
          // Para tabelaUmidadeTemperatura, faixas baseadas em números
          return leituraTemperaturaOuChuva >= min && leituraTemperaturaOuChuva <= max;
        }
      });
    
      if (!faixaTemperaturaChuva) {
        return { aviso: '', dica: '' }; // Retorna vazio se não encontrar faixa de temperatura ou chuva adequada
      }
    
      // Retorna o aviso e dica correspondentes à faixa de umidade/UV e temperatura/chuva
      return {
        aviso: tabela[faixa][faixaTipo][faixaTemperaturaChuva].Aviso,
        dica: tabela[faixa][faixaTipo][faixaTemperaturaChuva].Dica
      };
    }
    
  
    getLastPlantioData();

      const leiturasRef = firebase
      .database()
      .ref("Usuario/" + userID + "/leituras");

    leiturasRef.on("value", (snapshot) => {

      const leitura = snapshot.val();
      console.log("leitura: ", leitura);
  
      for (const leituraData in leitura) {
        const leituraAtual = leitura[leituraData];
        const dataFormat = new Date(currYear, currMonth, diaAtual);
        const atualData = formatDate(dataFormat);

        if (leituraData === atualData) {
          const leituraUv = leituraAtual.UV;
          const chuva = leituraAtual.chuva;
          const temperatura = leituraAtual.temperaturaAtual;
          const umidade = leituraAtual.umidade;

          $(".informacoes-temperatura h3").text("" + temperatura+"°");
          $("#umidade").text("" + umidade);
          $("#chuva").text(chuva);
          $("#luzUV").text(leituraUv);

          // Obtém a sugestão de plantio e exibe na tabela
          const avisoUxT = getSugestaoPlantio('umidade', umidade, temperatura);
          const dicaUxT = getSugestaoPlantio('umidade', umidade, temperatura);

          const avisoUVxC = getSugestaoPlantio('uv', leituraUv, chuva);
          const dicaUVxC = getSugestaoPlantio('uv', leituraUv, chuva);
          
          $("#aviso-climatico").html(avisoUxT.aviso + '<br><br>' + avisoUVxC.aviso);
          $("#dica-climatica-texto").html(dicaUxT.dica + '<br><br>' + dicaUVxC.dica);
        }
      }
    });

    // leiturasRef.on("value", (snapshot) => {
      
    //   const leitura = snapshot.val();
      
    //   console.log("leitura: ",leitura)
      
    //   for (const leituraData in leitura) {
        
    //     const leituraAtual = leitura[leituraData];
    //     const dataFormat = new Date(currYear, currMonth, diaAtual);
    //     const atualData = formatDate(dataFormat);
        
    //     if (leituraData === atualData) {
          
    //       const leituraUv = leituraAtual.UV;
    //       const chuva = leituraAtual.pressao;
    //       const temperatura = leituraAtual.temperaturaAtual;
    //       const umidade = leituraAtual.umidade;

    //       $(".informacoes-temperatura h3").text("" + temperatura+"°");
    //       $("#umidade").text("" + umidade);
    //       $("#chuva").text(chuva);
    //       $("#luzUV").text(leituraUv);
    //     }
    //   }
    // });

    // FORMATAR DATA
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
  }

  // DADOS DE DATA
  let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth(),
    diaAtual = date.getDate();

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
        updatePrecipitationData(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

  function updatePrecipitationData(data) {
    const elements = document.querySelectorAll(".precipitacao-elemento");
    const precipitationData = getDailyPrecipitation(data.list);

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    elements.forEach((element, index) => {
      if (index < 4) {
        const precipitation = precipitationData[index];
        const progressElement = element.querySelector(
          ".precipitacao-progresso"
        );
        const percentageElement = element.querySelector(
          ".precipitacao-porcentagem"
        );
        const dateElement = element.querySelector(".precipitacao-data");

        const percentage = precipitation * 100;

        progressElement.style.width = `${percentage}%`;
        percentageElement.textContent = `${percentage.toFixed(0)}%`;

        // Obtendo a data correspondente
        const date = new Date(currentDate);
        date.setDate(date.getDate() + index); // Adicionando o index para obter os próximos dias
        dateElement.textContent = date.toLocaleDateString("pt-BR");
      }
    });
  }

  function getDailyPrecipitation(list) {
    const dailyData = {};
    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!dailyData[date]) {
        dailyData[date] = [];
      }
      dailyData[date].push(item.pop);
    });

    // Calcular a média de `pop` para cada dia
    const dailyAveragePop = Object.values(dailyData).map((dayData) => {
      const sum = dayData.reduce((acc, pop) => acc + pop, 0);
      return sum / dayData.length;
    });

    return dailyAveragePop.slice(0, 4); // Apenas para os próximos 4 dias
  }
} else {
  alert("Usuário não logado!");
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 500);
}
