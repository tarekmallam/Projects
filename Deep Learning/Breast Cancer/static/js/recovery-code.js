document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recovery-code-form');
    const recoveryCodeInput = document.getElementById('recovery-code');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const recoveryCode = recoveryCodeInput.value.trim();
        if (isValidRecoveryCode(recoveryCode)) {
            alert('Recovery code accepted.');
            // You can add code here to redirect to the password reset page or any other actions
        } else {
            alert('Please enter a valid recovery code.');
        }
    });

    function isValidRecoveryCode(code) {
        // Add your own validation logic here if needed
        // For now, we just check if the code is not empty
        return code.length > 0;
    }
});
