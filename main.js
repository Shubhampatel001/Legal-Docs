// Function to handle button clicks
function handleButtonClick(message) {
    alert(message);
}

// Function to handle redirection for buttons
function handleRedirect(url) {
    window.location.href = url; // Redirect to the specified URL
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Sign In button
    const signInButton = document.querySelector('.sign-in-btn');
    if (signInButton) {
        signInButton.addEventListener('click', () => handleRedirect('path/to/sign-in.html')); // Replace with actual URL
    }

    // Create Account button
    const createAccountButton = document.querySelector('.create-account-btn');
    if (createAccountButton) {
        createAccountButton.addEventListener('click', () => handleRedirect('path/to/create-account.html')); // Replace with actual URL
    }

    // Dark button
    const darkButtons = document.querySelectorAll('.button-group .btn.dark');
    darkButtons.forEach(btn => {
        btn.addEventListener('click', () => handleButtonClick("Dark button clicked! This feature is under construction."));
    });

    // Light button
    const lightButtons = document.querySelectorAll('.button-group .btn.light');
    lightButtons.forEach(btn => {
        btn.addEventListener('click', () => handleButtonClick("Light button clicked! This feature is under construction."));
    });

    // Social Login button
    const socialButtons = document.querySelectorAll('.social-login .btn');
    socialButtons.forEach(btn => {
        btn.addEventListener('click', () => handleButtonClick("Social button clicked! Redirecting to login options."));
    });
});
