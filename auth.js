window.addEventListener("DOMContentLoaded", () => {
  const auth = firebase.auth();

  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");

  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          document.querySelector(".message").textContent = "Signup successful!";
          document.querySelector(".message").style.cssText =
            "background-color: green; color: white; padding: 0.5rem; border-radius: 4px; text-align: center;";
          window.location.href = "login.html"; // Redirect after success
        })
        .catch(error => {
          document.querySelector(".message").textContent = error.message;
        });
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          document.querySelector(".message").textContent = "Login successful!";
          document.querySelector(".message").style.cssText =
            "background-color: green; color: white; padding: 0.5rem; border-radius: 4px; text-align: center;";

          // Save login flag in localStorage
          localStorage.setItem("loggedIn", "true");

          // Redirect to index.html
          window.location.href = "index.html";
        })
        .catch(error => {
          document.querySelector(".message").textContent = error.message;
        });
    });
  }
});
