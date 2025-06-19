document.addEventListener("DOMContentLoaded", function () {
  // Tambahkan SweetAlert2 CDN jika belum ada
  if (!document.getElementById("swal2-cdn")) {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    script.id = "swal2-cdn";
    document.head.appendChild(script);
  }

  const form = document.getElementById("login-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const savedPassword = localStorage.getItem("user-" + email);
      if (!savedPassword) {
        alert("Akun belum terdaftar. Silakan daftar terlebih dahulu.");
        return;
      }
      if (password !== savedPassword) {
        alert("Password salah. Silakan coba lagi.");
        return;
      }
      // Login sukses
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", email);
      // Tampilkan SweetAlert2
      if (window.Swal) {
        Swal.fire({
          icon: "success",
          title: "Login berhasil",
          text: "You clicked Success button!",
          confirmButtonColor: "#90caf9",
          confirmButtonText: "OK",
          allowOutsideClick: false,
        }).then(() => {
          window.location.href = "index.html";
        });
      } else {
        // Fallback jika SweetAlert2 belum siap
        alert("Login berhasil!");
        window.location.href = "index.html";
      }
    });
  }

  // Social login demo
  const socials = document.querySelectorAll(".social");
  socials.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("Social login: " + btn.classList[1]);
    });
  });

  // Passkey demo
  const passkey = document.querySelector(".passkey-signin");
  if (passkey) {
    passkey.addEventListener("click", function () {
      alert("Sign in with passkey (demo)");
    });
  }

  // Handle register form submission (for register.html)
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
