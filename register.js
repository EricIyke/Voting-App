// Registration form submission
const register = document.getElementById("register-form");
const passwordField = document.getElementById("reg-password");

register.addEventListener("submit", function (event) {
  event.preventDefault();

  var username = document.getElementById("reg-username").value;
  var email = document.getElementById("reg-email").value;
  var password = passwordField.value;

  var userDetails = {
    username: username,
    email: email,
    password: password,
  };

  var users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(userDetails);
  // Save user data in local storage
  localStorage.setItem("userDetails", JSON.stringify(users));

  window.location.href = "index.html";
});

// Show/hide password functionality
const showPasswordCheckbox = document.getElementById("showPasswordCheckbox");

showPasswordCheckbox.addEventListener("change", function () {
  if (showPasswordCheckbox.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});
