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
      const historicoContainer = document.querySelector(".historico-container");

      const card = document.createElement("div");
      card.className = "historico-card";

      const dataElement = document.createElement("strong");
      dataElement.className = "historico-data";
      dataElement.textContent = date;

      const iconeElement = document.createElement("div");
      iconeElement.className = "historico-icone";
      iconeElement.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';

      const infosElement = document.createElement("div");
      infosElement.className = "historico-infos";

      const tempMaxElement = document.createElement("span");
      tempMaxElement.className = "historico-temperaturaMax";
      tempMaxElement.textContent = `Temperatura máxima: ${data.TemperaturaMax}° C`;

      const tempMinElement = document.createElement("span");
      tempMinElement.className = "historico-temperaturaMin";
      tempMinElement.textContent = `Temperatura mínima: ${data.TemperaturaMin}° C`;

      const umidadeElement = document.createElement("span");
      umidadeElement.className = "historico-umidade";
      umidadeElement.textContent = `Umidade (média): ${data.Umidade}`;

      const radiacaoElement = document.createElement("span");
      radiacaoElement.className = "historico-radiacao";
      radiacaoElement.textContent = `Radiação Solar (máximo): ${data.UV}`;

      infosElement.appendChild(tempMaxElement);
      infosElement.appendChild(tempMinElement);
      infosElement.appendChild(umidadeElement);
      infosElement.appendChild(radiacaoElement);

      card.appendChild(dataElement);
      card.appendChild(iconeElement);
      card.appendChild(infosElement);

      historicoContainer.appendChild(card);
    }

    function getAllPlantioData() {
      const plantioRef = database.ref("Plantio");
      plantioRef
        .once("value")
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();

            for (const year in data) {
              for (const month in data[year]) {
                for (const day in data[year][month]) {
                  const dayData = data[year][month][day];
                  const formattedDate = `${day}/${month}/${year}`;
                  createHistoricoCard(formattedDate, dayData);
                }
              }
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
