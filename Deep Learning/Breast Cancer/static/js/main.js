document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form.chat-input');
    const chatWindow = document.querySelector('.chat-window');
    const typingElement = document.querySelector('.typing');
    const typingText = typingElement.textContent;
    
    typingElement.textContent = '';
    let charIndex = 0;

    function type() {
        if (charIndex < typingText.length) {
            typingElement.textContent += typingText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 200); // Adjust typing speed here
        } else {
            setTimeout(() => {
                typingElement.textContent = '';
                charIndex = 0;
                type();
            }, 2000); // Adjust delay before restarting typing
        }
    }

    type();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const messageInput = document.getElementById('message');
        const imageInput = document.getElementById('image');

        const messageText = messageInput.value.trim();
        const imageFile = imageInput.files[0];

        if (messageText || imageFile) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message', 'user');

            if (messageText) {
                const textNode = document.createTextNode(messageText);
                messageDiv.appendChild(textNode);
            }

            if (imageFile) {
                const imageElement = document.createElement('img');
                imageElement.src = URL.createObjectURL(imageFile);
                imageElement.style.maxWidth = '100%';
                imageElement.style.borderRadius = '20px';
                messageDiv.appendChild(imageElement);
            }

            chatWindow.appendChild(messageDiv);
            chatWindow.scrollTop = chatWindow.scrollHeight;

            messageInput.value = '';
            imageInput.value = '';
        }
    });
});

function navigateToLogin() {
    window.location.href = 'index.html';
}


document.getElementById('logout').addEventListener('click', function() {
    fetch('/logout', { method: 'POST' })
        .then(response => {
            if (response.ok) {
                // Redirect or update UI as needed after successful logout
                window.location.href = '/';  // Redirect to login page
            } else {
                console.error('Logout request failed');
            }
        })
        .catch(error => {
            console.error('Error during logout:', error);
        });
});