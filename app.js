const BACKEND_BASE = "http://localhost:8000"; // change if backend runs elsewhere

// Handle assignment submission
document.addEventListener("DOMContentLoaded", () => {
  const assignmentForm = document.getElementById("assignmentForm");
  if (assignmentForm) {
    assignmentForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const topic = document.getElementById("topic").value;
      const description = document.getElementById("description").value;
      const fileInput = document.getElementById("file").files[0];

      const formData = new FormData();
      formData.append("topic", topic);
      formData.append("description", description);
      if (fileInput) {
        formData.append("file", fileInput);
      }

      try {
        const res = await fetch(`${BACKEND_BASE}/submit/`, {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          alert("✅ Assignment submitted! Please proceed to payment.");
        } else {
          alert("❌ Submission failed.");
        }
      } catch (err) {
        alert("⚠️ Error connecting to server.");
      }
    });
  }

  // Handle login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const university = document.getElementById("university").value;

      try {
        const res = await fetch(`${BACKEND_BASE}/login/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, university }),
        });

        if (res.ok) {
          alert("✅ Login successful!");
          window.location.href = "index.html";
        } else {
          alert("❌ Invalid login credentials.");
        }
      } catch (err) {
        alert("⚠️ Error connecting to server.");
      }
    });
  }
});
