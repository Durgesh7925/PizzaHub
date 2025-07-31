// Your Firebase configuration (replace with yours)
const firebaseConfig = {
  apiKey: "AIzaSyA41PxN6Jyk7P0dyAmne_pYnfMd_4iXbZU",
  authDomain: "pizza-ae9c4.firebaseapp.com",
  projectId: "pizza-ae9c4",
  storageBucket: "pizza-ae9c4.firebasestorage.app",
  messagingSenderId: "313901254618",
  appId: "1:313901254618:web:8680a15aed8654a1de62e3",
  measurementId: "G-KFPCTSWT68"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login Logic
const auth = firebase.auth();
const loginForm = document.getElementById("login-form");
const errorText = document.getElementById("error");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log("Logged in:", userCredential.user);
      window.location.href = "dashboard.html"; // Redirect on success
    })
    .catch(error => {
      errorText.textContent = error.message;
    });
});
