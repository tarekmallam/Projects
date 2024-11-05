document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing');
    const text = typingElement.textContent;

    let index = 0;
    function type() {
        if (index < text.length) {
            typingElement.textContent = text.slice(0, index + 1);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            setTimeout(() => {
                index = 0;
                typingElement.textContent = '';
                type();
            }, 2000); // Adjust delay before restarting typing
        }
    }

    typingElement.textContent = ''; // Clear initial text content
    type();
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (isValidEmail(email) && isValidPassword(password)) {
            // Proceed with form submission
            form.submit();
        } else {
            alert('Please enter a valid email and password.');
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

    function isValidPassword(password) {
        // Add your password validation logic here
        // For example, password should be at least 6 characters long
        return password.length >= 6;
    }
});