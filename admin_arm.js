document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  if (!email) {
    emailError.textContent = "Էլփոստը պարտադիր է։";
    valid = false;
  } else if (email.toLowerCase() !== "admin@profrates.am") {
    emailError.textContent = "Սխալ էլփոստ։";
    valid = false;
  }

  if (!password) {
    passwordError.textContent = "Գաղտնաբառը պարտադիր է։";
    valid = false;
  }

  if (valid) {
    window.location.href = "dashboard_arm.html";  
  }
});
