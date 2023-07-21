// Login form submission

let login = document.getElementById("login-form");
  let showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
  let passwordField = document.getElementById("password");

  showPasswordCheckbox.addEventListener("change", function () {
    if (showPasswordCheckbox.checked) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  });

document.getElementById("forgot-password").addEventListener("click", function (event) {
  event.preventDefault();

  // Prompt user for email address
  const email = prompt("Please enter your registered email address:");

  // Validate the email address
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address. Please try again.");
    return;
  }


  // Inform the user that a password reset email has been sent
  alert("A password reset email has been sent to your email address.");
});


login.addEventListener("submit", function (event) {
    event.preventDefault();

    var usernameOremail = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve user data from local storage
    var users = JSON.parse(localStorage.getItem("userDetails"));
    console.log(users);

    var details = users.find(function (savedDetails) {
      return (
        savedDetails.username === usernameOremail ||
        savedDetails.email === emailOrusername
      );
    });

    if (details && details.password === password) {
      // Redirect to the voting page
      window.location.href = "vote.html";
    } else {
      document.getElementById("error-message").innerText =
        "Invalid username or password!";
    }
  });


