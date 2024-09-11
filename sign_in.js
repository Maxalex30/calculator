document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation for email and password
    if (email === "user@example.com" && password === "password123") {
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = "Invalid email or password. Please try again.";
    }
});
