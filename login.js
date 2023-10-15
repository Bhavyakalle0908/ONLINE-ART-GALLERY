const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
    let valid = true;
    usernameError.textContent = "";
    passwordError.textContent = "";

    // Validate username
    if (usernameInput.value.trim() === "") {
        valid = false;
        usernameError.textContent = "Username is required.";
    }

    // Validate password
    if (passwordInput.value.length < 8) {
        valid = false;
        passwordError.textContent = "Password must be at least 8 characters long.";
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(passwordInput.value)) {
        valid = false;
        passwordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, and one digit.";
    }

    if (valid === false) {
        e.preventDefault(); // Prevent form submission
    }
});
