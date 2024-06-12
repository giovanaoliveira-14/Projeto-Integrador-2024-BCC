$(document).ready(function () {
  // Menu mobile: abre o menu
  $(".header-menu-mobile-icone").click(function () {
    $(".header-menu-mobile").toggleClass("active");
  });

  // Menu mobile: fecha o menu
  $(".header-menu-mobile-fechar").click(function () {
    $(".header-menu-mobile").toggleClass("active");
  });

  // Fecha o menu ao clicar em um item de menu
  $(".header-menu li").click(function () {
    $(".header-menu-mobile").removeClass("active");
  });
});

// FUNÇÕES GERAIS
function logout() {
  localStorage.removeItem("userLoggedIn");
  localStorage.removeItem("userData");
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 500);
}

if (localStorage.getItem("userLoggedIn") === "true") {
  const userDataString = localStorage.getItem("userData");
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    const userID = userData.userId;
    userName(userID);
  }
}

// Função para atualizar o nome do usuario no header
function userName(userID) {
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
  const userRef = firebase.database().ref("Usuario/" + userID);

  userRef
    .once("value")
    .then((snapshot) => {
      const user = snapshot.val();
      $(".usuario-nome").text(user.name);
    })
    .catch((error) => {
      console.log("Não foi possível resgatar informações de senha do usuário!");
    });
}
