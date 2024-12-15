// Callback function to redirect to the main page
function redirectToMainPage() {
    alert("Login successful! Redirecting to the main page...");
    window.location.href = "http://127.0.0.1:5500/index.html"; // Replace with your main page URL
  }
  
  // Login validation function
  function validateLogin(username, password, callback) {
    const validUsername = "admin";
    const validPassword = "12345";

   
    if (username === validUsername && password === validPassword) {
      callback(); // Call the redirect callback if validation is successful
    } else {
      document.getElementById("error-message").innerText = "Invalid username or password!";
    }
  }
  
  // Event listener for form submission
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the default way
  
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("pwd").value;
  
    // Validate login
    validateLogin(username, password, redirectToMainPage);
  });
  