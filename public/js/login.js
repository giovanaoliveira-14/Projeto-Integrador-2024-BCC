
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
console.log(database)

// const emailUsuario = document.querySelector("#email-user");
// const senhaUsuario = document.querySelector("#password-user");
// const buttonLogin = document.querySelector("#btn-formLogin");

// function decryptPassword(encryptedPassword, secretKey) {
//   const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
//   const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
//   return originalPassword;
// }

// buttonLogin.addEventListener("click", function (e) {
//   e.preventDefault();
//   loginUser(emailUsuario.value, senhaUsuario.value);
// });

// function loginUser(email, password) {
//   const usersRef = firebase.database().ref("Usuario");
//   usersRef
//     .once("value")
//     .then((snapshot) => {
//       const users = snapshot.val();
//       for (const userId in users) { 
//         const user = users[userId];
//         const senhaDescriptografada = decryptPassword(
//           user.senha,
//           "pR0Jet01nt&gr@d0R02!"
//         );
//         if (user.email === email) {
//           if (senhaDescriptografada === password || user.senha === password) {
//             localStorage.setItem("userLoggedIn", "true");
//             const userData = {
//               userId: userId,
//             };
//             const userDataJson = JSON.stringify(userData);
//             localStorage.setItem("userData", userDataJson);
//             setTimeout(function () {
//               window.location.href = "../home.html";
//             }, 1000);
//           } else {
//             alert("Credenciais inválidas.");
//           }
//         }
//       }
//     })
//     .catch((error) => {
//       alert("Erro ao acessar o banco de dados:", error);
//     });
// }