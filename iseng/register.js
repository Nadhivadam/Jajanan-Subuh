// register.js
// Script untuk handle register form pada register.html

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
      if (password !== confirmPassword) {
        alert("Password dan konfirmasi password tidak sama!");
        return;
      }
      // Simpan user ke localStorage
      localStorage.setItem("user-" + email, password);
      alert("Registrasi berhasil! Silakan login.");
      window.location.href = "login.html";
    });
  }
});
