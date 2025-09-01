// Handle Login
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const university = document.getElementById("university").value;

      // Simulate saving user session
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userUniversity", university);

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    });
  }

  // On Dashboard - show welcome
  if (window.location.pathname.includes("dashboard.html")) {
    const welcomeMsg = document.getElementById("welcomeMsg");
    const userEmail = localStorage.getItem("userEmail");
    const userUniversity = localStorage.getItem("userUniversity");

    if (userEmail && welcomeMsg) {
      welcomeMsg.textContent = `Welcome to your Dashboard, ${userEmail.split('@')[0]} 🎓 (${userUniversity})`;
    }
  }
});

// Handle Logout
function logout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userUniversity");
  alert("You have been logged out!");
}
