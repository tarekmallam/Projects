document.addEventListener('DOMContentLoaded', () => {
    fetch('/get_user_data', { method: 'GET' })
        .then(response => response.json())
        .then(userData => {
            document.getElementById('full-name').textContent = userData.first_name + ' ' + userData.last_name;
            document.getElementById('gender').textContent = userData.gender;
            document.getElementById('country').textContent = userData.country_code;
            document.getElementById('email').textContent = userData.email;
            document.getElementById('birthdate').textContent = userData.birth_date;
            document.getElementById('phone-number').textContent = userData.phone_number;

            // Update profile image
            const profileImage = document.getElementById('profile-image');
            if (userData.profile_image) {
                profileImage.src = '/static/uploads/' + userData.profile_image;
            } else {
                profileImage.src = '/static/pic/user.png';  // Default image
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });

    // Handle profile image upload
    const uploadImageInput = document.getElementById('upload-image');
    const profileImage = document.getElementById('profile-image');

    uploadImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

function logout() {
    // Implement your logout functionality here
    alert('Logout successful');
    window.location.href = '/logout';
}
