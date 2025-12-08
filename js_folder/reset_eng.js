document.addEventListener("DOMContentLoaded", () => {
  // Send Link button
  const sendBtn = document.querySelector(".send-btn");
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      alert("Password reset link has been sent to the provided email address.");
    });
  }

  // Resend buttons
  document.querySelectorAll(".resend-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest("tr");
      const studentName = row.children[0].textContent;
      const email = row.children[1].textContent;
      alert(`A new reset link has been sent to ${studentName} (${email}).`);
    });
  });

  // Search bar
  const searchInput = document.querySelector(".search-bar input");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        alert(`Searching for: ${searchInput.value}`);
      }
    });
  }
});
