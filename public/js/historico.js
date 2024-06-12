$(document).ready(function () {
  if (localStorage.getItem("userLoggedIn") === "true") {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userID = userData.userId;
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

      function createHistoricoCard(date, data) {
        const card = $('<div>').addClass('historico-card');
        const dataElement = $('<strong>').addClass('historico-data').text(date);
        const iconeElement = $('<div>').addClass('historico-icone').html('<i class="fa-solid fa-cloud-sun"></i>');
        const infosElement = $('<div>').addClass('historico-infos');
        const tempMaxElement = $('<span>').addClass('historico-temperaturaMax').text(`Temperatura máxima: ${data.tempMax}° C`);
        const tempMinElement = $('<span>').addClass('historico-temperaturaMin').text(`Temperatura mínima: ${data.tempMin}° C`);
        const umidadeElement = $('<span>').addClass('historico-umidade').text(`Umidade (média): ${data.umidade}`);
        const radiacaoElement = $('<span>').addClass('historico-radiacao').text(`Radiação Solar (máximo): ${data.UV}`);
        const pressaoElement = $('<span>').addClass('historico-pressao').text(`Pressão: ${data.pressao}`);

        infosElement.append(tempMaxElement, tempMinElement, umidadeElement, radiacaoElement, pressaoElement);
        card.append(dataElement, iconeElement, infosElement);
        $('.historico-container').append(card);
      }

      function getAllPlantioData() {
        const plantioRef = firebase.database().ref(`Usuario/${userID}/leituras`);
        plantioRef.once("value")
          .then((snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              for (const date in data) {
                const dayData = data[date];
                createHistoricoCard(date, dayData);
              }
            } else {
              console.log("Nenhum dado encontrado no nó Plantio.");
            }
          })
          .catch((error) => {
            console.error("Erro ao resgatar dados:", error);
          });
      }

      getAllPlantioData();
    }
  } else {
    alert("Usuário não logado!");
    setTimeout(function () {
      window.location.href = "../index.html";
    }, 500);
  }
});