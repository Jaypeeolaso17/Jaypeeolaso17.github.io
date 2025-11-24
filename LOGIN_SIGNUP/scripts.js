// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.auth-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            // Simple Client-Side Validation Example
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');

            if (usernameInput && passwordInput) {
                if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
                    alert('Please fill out all required fields.');
                    event.preventDefault(); // Stop form submission
                    return;
                }
            }

            // For the Signup form, check the email
            const emailInput = document.getElementById('email');
            if (emailInput) {
                if (!isValidEmail(emailInput.value)) {
                    alert('Please enter a valid email address.');
                    event.preventDefault();
                    return;
                }
            }
        });
    }

    // Helper function for basic email validation
    function isValidEmail(email) {
        // Simple regex check for format: local-part@domain.tld
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

