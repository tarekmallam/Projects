document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forget-password-form');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        if (isValidEmail(email)) {
            alert('A reset link has been sent to your email.');
            // Redirect to the recovery code page
            window.location.href = 'recovery-code.html';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function isValidEmail(email) {
        const validDomains = ['gmail.com', 'yahoo.com', 'yandex.com', 'hotmail.com', 'outlook.com', 'mail.com.tr', 'mail.ru'];
        const emailParts = email.split('@');
        if (emailParts.length !== 2) {
            return false;
        }
        const domain = emailParts[1].toLowerCase();
        return validDomains.includes(domain);
    }
});