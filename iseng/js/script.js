// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu dikllik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Feather icons
if (window.feather) feather.replace();

// Logout logic
function setLogoutButton() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const logoutBtn = document.getElementById("logout-btn");
  const signinBtns = document.querySelectorAll(".btn-signin");
  const signupBtns = document.querySelectorAll(".btn-signup");
  if (logoutBtn) {
    if (isLoggedIn) {
      logoutBtn.style.display = "inline-block";
      signinBtns.forEach((btn) => (btn.style.display = "none"));
      signupBtns.forEach((btn) => (btn.style.display = "none"));
    } else {
      logoutBtn.style.display = "none";
      signinBtns.forEach((btn) => (btn.style.display = "inline-block"));
      signupBtns.forEach((btn) => (btn.style.display = "inline-block"));
    }
  }
}
setLogoutButton();
const logoutBtn = document.getElementById("logout-btn");
const logoutModal = document.getElementById("logout-modal");
const logoutYes = document.getElementById("logout-yes");
const logoutNo = document.getElementById("logout-no");
if (logoutBtn && logoutModal && logoutYes && logoutNo) {
  logoutBtn.onclick = function (e) {
    e.preventDefault();
    logoutModal.style.display = "flex";
    document.body.classList.add("modal-open");
  };
  logoutYes.onclick = function () {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("currentUser");
    setLogoutButton();
    logoutModal.style.display = "none";
    document.body.classList.remove("modal-open");
    window.location.href = "login.html";
  };
  logoutNo.onclick = function () {
    logoutModal.style.display = "none";
    document.body.classList.remove("modal-open");
  };
  window.onclick = function (event) {
    if (event.target == logoutModal) {
      logoutModal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  };
}
