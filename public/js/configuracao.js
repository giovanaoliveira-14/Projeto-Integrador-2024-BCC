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
    const userRef = firebase.database().ref("Usuario/" + userID);
    function encryptPassword(password, secretKey) {
      return CryptoJS.AES.encrypt(password, secretKey).toString();
    }

    function decryptPassword(encryptedPassword, secretKey) {
      const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
      return originalPassword;
    }

    // RESGATAR TODOS OS DADOS
    const altForm = document.querySelector(".configuracao-formulario");
    const altNome = document.querySelector("#nome-usuario");
    const altEmail = document.querySelector("#email-usuario");
    const altSenha = document.querySelector("#senha-usuario");
    const altEndereco = document.querySelector("#endereco-usuario");
    const altBairro = document.querySelector("#bairro-usuario");
    const altCidade = document.querySelector("#cidade-usuario");
    const altEstado = document.querySelector("#estado-usuario");

    userRef
      .once("value")
      .then((snapshot) => {
        const user = snapshot.val();
        altNome.value = user.name;
        altEmail.value = user.email;
        const senhaDescriptografada = decryptPassword(
          user.senha,
          "pR0Jet01nt&gr@d0R02!"
        );
        altSenha.value = senhaDescriptografada;
        altEndereco.value = user.endereco;
        altBairro.value = user.bairro;
        altCidade.value = user.cidade;
        altEstado.value = user.estado;
      })
      .catch((error) => {
        console.log(
          "Não foi possível resgatar informações de senha do usuário!"
        );
      });

    // ALTERAR DADOS
    altForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const encryptedPassword = encryptPassword(
        altSenha.value,
        "pR0Jet01nt&gr@d0R02!"
      );

      userRef
        .update({
          userId: userID,
          name: altNome.value,
          email: altEmail.value,
          senha: encryptedPassword,
          endereco: altEndereco.value,
          bairro: altBairro.value,
          cidade: altCidade.value,
          estado: altEstado.value,
        })
        .then(() => {
          alert("Dados atualizados com sucesso!");
        })
        .catch((error) => {
          console.error("Erro ao atualizar dados:", error);
        });
    });

    // EXCLUIR CONTA
    const buttonDelete = document.querySelector(".deletar-usuario");
    buttonDelete.addEventListener("click", function (e) {
      e.preventDefault();
      const confirmDelete = confirm(
        "Tem certeza de que deseja excluir sua conta? Esta ação é irreversível."
      );
      if (confirmDelete) {
        userRef
          .remove()
          .then(() => {
            alert("Sua conta foi excluída com sucesso.");
            localStorage.removeItem("userLoggedIn");
            localStorage.removeItem("userData");
            setTimeout(function () {
              window.location.href = "../index.html";
            }, 500);
          })
          .catch((error) => {
            console.error("Erro ao excluir conta:", error.message);
          });
      }
    });
  } else {
    alert("Dados do usuário não encontrado!");
  }
} else {
  alert("Usuário não logado!");
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 500);
}
