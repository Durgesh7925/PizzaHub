const auth = firebase.auth();

window.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");
  const userEmailDisplay = document.getElementById("userEmail");

  // Sign Up
  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert("Sign up successful!");
          window.location.href = "index.html";
        })
        .catch(error => alert("Error: " + error.message));
    });
  }

  // Login
  if (loginBtn && document.getElementById("loginEmail")) {
    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("Login successful!");
          window.location.href = "index.html";
        })
        .catch(error => alert("Login failed: " + error.message));
    });
  }


});
