// Configuração Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAQNunOvOyP6Z3hShU3BV8KazyNwEjd_0c",
    authDomain: "projeto-estacao-meteorologica.firebaseapp.com",
    databaseURL: "https://projeto-estacao-meteorologica-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projeto-estacao-meteorologica",
    storageBucket: "projeto-estacao-meteorologica.appspot.com",
    messagingSenderId: "1031346489742",
    appId: "1:1031346489742:web:53be9814f15dc27a837cdf",
    measurementId: "G-X68BBJH2WT"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Funções
  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  function decryptPassword(encryptedPassword, secretKey) {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  
  function encryptPassword(password, secretKey) {
    return CryptoJS.AES.encrypt(password, secretKey).toString();
  }
  
  function showAlert(message, redirectUrl = null) {
    alert(message);
    if (redirectUrl) {
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1000);
    }
  }
  
  // Cadastro
  const cadNome = document.querySelector("#cadastro-nome");
  const cadEmail = document.querySelector("#cadastro-email");
  const cadSenha = document.querySelector("#cadastro-senha");
  const cadEndereco = document.querySelector("#cadastro-endereco");
  const cadBairro = document.querySelector("#cadastro-bairro");
  const cadCidade = document.querySelector("#cadastro-cidade");
  const cadEstado = document.querySelector("#cadastro-estados");
  const cadButton = document.querySelector("#cadastro-button");
  
  cadButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (!validateEmail(cadEmail.value)) {
      showAlert("Email inválido.");
      return;
    }
    const encryptedPassword = encryptPassword(cadSenha.value, "pR0Jet01nt&gr@d0R02!");
    const newUsuario = createUsuario(
      cadNome.value,
      cadEmail.value,
      encryptedPassword,
      cadEndereco.value,
      cadBairro.value,
      cadCidade.value,
      cadEstado.value
    );
  
    if (newUsuario) {
      showAlert("Seu cadastro foi realizado com sucesso! \nFaça o seu login para entrar na plataforma!", "../login-cadastro.html");
    } else {
      showAlert("Não foi possível realizar o seu cadastro :(");
    }
  });
  
  function createUsuario(nome, email, senha, endereco, bairro, cidade, estado) {
    const newUserID = firebase.database().ref().child("Usuario").push().key;
    const userData = {
      userId: newUserID,
      name: nome,
      email: email,
      senha: senha,
      endereco: endereco,
      bairro: bairro,
      cidade: cidade,
      estado: estado
    };
    firebase.database().ref(`Usuario/${newUserID}`).set(userData);
    return true;
  }
  
  // Login
  const logUsuario = document.querySelector("#email-usuario");
  const logSenha = document.querySelector("#senha-usuario");
  const logButton = document.querySelector("#button-login");
  
  logButton.addEventListener("click", function (e) {
    e.preventDefault();
    loginUser(logUsuario.value, logSenha.value);
  });
  
  function loginUser(email, password) {
    if (!validateEmail(email)) {
      showAlert("Email inválido.");
      return;
    }
    const usersRef = firebase.database().ref("Usuario");
    usersRef.once("value").then((snapshot) => {
      const users = snapshot.val();
      let userFound = false;
      for (const userId in users) {
        const user = users[userId];
        const senhaDescriptografada = decryptPassword(user.senha, "pR0Jet01nt&gr@d0R02!");
        if (user.email === email && (senhaDescriptografada === password || user.senha === password)) {
          userFound = true;
          localStorage.setItem("userLoggedIn", "true");
          const userData = { userId: userId };
          localStorage.setItem("userData", JSON.stringify(userData));
          showAlert("Login bem-sucedido!", "../home.html");
          break;
        }
      }
      if (!userFound) {
        showAlert("Email ou senha incorretos.");
      }
    }).catch((error) => {
      showAlert("Erro ao acessar o banco de dados: " + error.message);
    });
  }
  