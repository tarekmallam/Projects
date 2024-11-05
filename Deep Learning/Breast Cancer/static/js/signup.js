document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const countryCodeSelect = document.getElementById('country-code');
    const countrySearchInput = document.getElementById('country-search');
    const countryCodes = [
        { code: '+93', country: 'Afghanistan' },
        { code: '+355', country: 'Albania' },
        { code: '+213', country: 'Algeria' },
        { code: '+376', country: 'Andorra' },
        { code: '+244', country: 'Angola' },
        { code: '+1', country: 'USA' },
        { code: '+54', country: 'Argentina' },
        { code: '+374', country: 'Armenia' },
        { code: '+297', country: 'Aruba' },
        { code: '+61', country: 'Australia' },
        { code: '+43', country: 'Austria' },
        { code: '+994', country: 'Azerbaijan' },
        { code: '+973', country: 'Bahrain' },
        { code: '+880', country: 'Bangladesh' },
        { code: '+375', country: 'Belarus' },
        { code: '+32', country: 'Belgium' },
        { code: '+501', country: 'Belize' },
        { code: '+229', country: 'Benin' },
        { code: '+975', country: 'Bhutan' },
        { code: '+591', country: 'Bolivia' },
        { code: '+387', country: 'Bosnia and Herzegovina' },
        { code: '+267', country: 'Botswana' },
        { code: '+55', country: 'Brazil' },
        { code: '+673', country: 'Brunei' },
        { code: '+359', country: 'Bulgaria' },
        { code: '+226', country: 'Burkina Faso' },
        { code: '+257', country: 'Burundi' },
        { code: '+855', country: 'Cambodia' },
        { code: '+237', country: 'Cameroon' },
        { code: '+1', country: 'Canada' },
        { code: '+238', country: 'Cape Verde' },
        { code: '+236', country: 'Central African Republic' },
        { code: '+235', country: 'Chad' },
        { code: '+56', country: 'Chile' },
        { code: '+86', country: 'China' },
        { code: '+57', country: 'Colombia' },
        { code: '+269', country: 'Comoros' },
        { code: '+242', country: 'Congo' },
        { code: '+243', country: 'Congo, Democratic Republic' },
        { code: '+682', country: 'Cook Islands' },
        { code: '+506', country: 'Costa Rica' },
        { code: '+385', country: 'Croatia' },
        { code: '+53', country: 'Cuba' },
        { code: '+357', country: 'Cyprus' },
        { code: '+420', country: 'Czech Republic' },
        { code: '+45', country: 'Denmark' },
        { code: '+253', country: 'Djibouti' },
        { code: '+1767', country: 'Dominica' },
        { code: '+1-809', country: 'Dominican Republic' },
        { code: '+670', country: 'East Timor' },
        { code: '+593', country: 'Ecuador' },
        { code: '+20', country: 'Egypt' },
        { code: '+503', country: 'El Salvador' },
        { code: '+240', country: 'Equatorial Guinea' },
        { code: '+291', country: 'Eritrea' },
        { code: '+372', country: 'Estonia' },
        { code: '+251', country: 'Ethiopia' },
        { code: '+679', country: 'Fiji' },
        { code: '+358', country: 'Finland' },
        { code: '+33', country: 'France' },
        { code: '+241', country: 'Gabon' },
        { code: '+220', country: 'Gambia' },
        { code: '+995', country: 'Georgia' },
        { code: '+49', country: 'Germany' },
        { code: '+233', country: 'Ghana' },
        { code: '+30', country: 'Greece' },
        { code: '+299', country: 'Greenland' },
        { code: '+1473', country: 'Grenada' },
        { code: '+502', country: 'Guatemala' },
        { code: '+224', country: 'Guinea' },
        { code: '+245', country: 'Guinea-Bissau' },
        { code: '+592', country: 'Guyana' },
        { code: '+509', country: 'Haiti' },
        { code: '+504', country: 'Honduras' },
        { code: '+852', country: 'Hong Kong' },
        { code: '+36', country: 'Hungary' },
        { code: '+354', country: 'Iceland' },
        { code: '+91', country: 'India' },
        { code: '+62', country: 'Indonesia' },
        { code: '+98', country: 'Iran' },
        { code: '+964', country: 'Iraq' },
        { code: '+353', country: 'Ireland' },
        { code: '+972', country: 'Israel' },
        { code: '+39', country: 'Italy' },
        { code: '+1876', country: 'Jamaica' },
        { code: '+81', country: 'Japan' },
        { code: '+962', country: 'Jordan' },
        { code: '+7', country: 'Kazakhstan' },
        { code: '+254', country: 'Kenya' },
        { code: '+686', country: 'Kiribati' },
        { code: '+850', country: 'Korea, North' },
        { code: '+82', country: 'Korea, South' },
        { code: '+965', country: 'Kuwait' },
        { code: '+996', country: 'Kyrgyzstan' },
        { code: '+856', country: 'Laos' },
        { code: '+371', country: 'Latvia' },
        { code: '+961', country: 'Lebanon' },
        { code: '+266', country: 'Lesotho' },
        { code: '+231', country: 'Liberia' },
        { code: '+218', country: 'Libya' },
        { code: '+423', country: 'Liechtenstein' },
        { code: '+370', country: 'Lithuania' },
        { code: '+352', country: 'Luxembourg' },
        { code: '+853', country: 'Macau' },
        { code: '+389', country: 'Macedonia' },
        { code: '+261', country: 'Madagascar' },
        { code: '+265', country: 'Malawi' },
        { code: '+60', country: 'Malaysia' },
        { code: '+960', country: 'Maldives' },
        { code: '+223', country: 'Mali' },
        { code: '+356', country: 'Malta' },
        { code: '+692', country: 'Marshall Islands' },
        { code: '+222', country: 'Mauritania' },
        { code: '+230', country: 'Mauritius' },
        { code: '+52', country: 'Mexico' },
        { code: '+691', country: 'Micronesia' },
        { code: '+373', country: 'Moldova' },
        { code: '+377', country: 'Monaco' },
        { code: '+976', country: 'Mongolia' },
        { code: '+382', country: 'Montenegro' },
        { code: '+212', country: 'Morocco' },
        { code: '+258', country: 'Mozambique' },
        { code: '+95', country: 'Myanmar' },
        { code: '+264', country: 'Namibia' },
        { code: '+674', country: 'Nauru' },
        { code: '+977', country: 'Nepal' },
        { code: '+31', country: 'Netherlands' },
        { code: '+687', country: 'New Caledonia' },
        { code: '+64', country: 'New Zealand' },
        { code: '+505', country: 'Nicaragua' },
        { code: '+227', country: 'Niger' },
        { code: '+234', country: 'Nigeria' },
        { code: '+47', country: 'Norway' },
        { code: '+968', country: 'Oman' },
        { code: '+92', country: 'Pakistan' },
        { code: '+680', country: 'Palau' },
        { code: '+507', country: 'Panama' },
        { code: '+675', country: 'Papua New Guinea' },
        { code: '+595', country: 'Paraguay' },
        { code: '+51', country: 'Peru' },
        { code: '+63', country: 'Philippines' },
        { code: '+48', country: 'Poland' },
        { code: '+351', country: 'Portugal' },
        { code: '+974', country: 'Qatar' },
        { code: '+242', country: 'Republic of the Congo' },
        { code: '+40', country: 'Romania' },
        { code: '+7', country: 'Russia' },
        { code: '+250', country: 'Rwanda' },
        { code: '+290', country: 'Saint Helena' },
        { code: '+1869', country: 'Saint Kitts and Nevis' },
        { code: '+1758', country: 'Saint Lucia' },
        { code: '+508', country: 'Saint Pierre and Miquelon' },
        { code: '+1784', country: 'Saint Vincent and the Grenadines' },
        { code: '+685', country: 'Samoa' },
        { code: '+378', country: 'San Marino' },
        { code: '+239', country: 'Sao Tome and Principe' },
        { code: '+966', country: 'Saudi Arabia' },
        { code: '+221', country: 'Senegal' },
        { code: '+381', country: 'Serbia' },
        { code: '+248', country: 'Seychelles' },
        { code: '+232', country: 'Sierra Leone' },
        { code: '+65', country: 'Singapore' },
        { code: '+421', country: 'Slovakia' },
        { code: '+386', country: 'Slovenia' },
        { code: '+677', country: 'Solomon Islands' },
        { code: '+252', country: 'Somalia' },
        { code: '+27', country: 'South Africa' },
        { code: '+211', country: 'South Sudan' },
        { code: '+34', country: 'Spain' },
        { code: '+94', country: 'Sri Lanka' },
        { code: '+249', country: 'Sudan' },
        { code: '+597', country: 'Suriname' },
        { code: '+268', country: 'Swaziland' },
        { code: '+46', country: 'Sweden' },
        { code: '+41', country: 'Switzerland' },
        { code: '+963', country: 'Syria' },
        { code: '+886', country: 'Taiwan' },
        { code: '+992', country: 'Tajikistan' },
        { code: '+255', country: 'Tanzania' },
        { code: '+66', country: 'Thailand' },
        { code: '+228', country: 'Togo' },
        { code: '+676', country: 'Tonga' },
        { code: '+1868', country: 'Trinidad and Tobago' },
        { code: '+216', country: 'Tunisia' },
        { code: '+90', country: 'Turkey' },
        { code: '+993', country: 'Turkmenistan' },
        { code: '+688', country: 'Tuvalu' },
        { code: '+256', country: 'Uganda' },
        { code: '+380', country: 'Ukraine' },
        { code: '+971', country: 'United Arab Emirates' },
        { code: '+44', country: 'UK' },
        { code: '+598', country: 'Uruguay' },
        { code: '+998', country: 'Uzbekistan' },
        { code: '+678', country: 'Vanuatu' },
        { code: '+58', country: 'Venezuela' },
        { code: '+84', country: 'Vietnam' },
        { code: '+967', country: 'Yemen' },
        { code: '+260', country: 'Zambia' },
        { code: '+263', country: 'Zimbabwe' }
    ];

    function populateCountryCodes() {
        countryCodeSelect.innerHTML = '';
        countryCodes.sort((a, b) => a.country.localeCompare(b.country));
        countryCodes.forEach(code => {
            const option = document.createElement('option');
            option.value = code.code;
            option.textContent = `${code.country} (${code.code})`;
            countryCodeSelect.appendChild(option);
        });
    }

    function filterCountryCodes() {
        const searchText = countrySearchInput.value.toLowerCase();
        countryCodeSelect.innerHTML = '';
        countryCodes
            .filter(code => code.country.toLowerCase().includes(searchText) || code.code.includes(searchText))
            .forEach(code => {
                const option = document.createElement('option');
                option.value = code.code;
                option.textContent = `${code.country} (${code.code})`;
                countryCodeSelect.appendChild(option);
            });
    }

    countrySearchInput.addEventListener('input', filterCountryCodes);
    populateCountryCodes();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const birthDate = document.getElementById('birth-date').value.trim();
        const phoneNumber = document.getElementById('phone-number').value.trim();
        const email = document.getElementById('email').value.trim();
        const confirmEmail = document.getElementById('confirm-email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        if (!isValidBirthDate(birthDate)) {
            alert('Please enter a valid birth date in the format MM-DD-YYYY.');
            return;
        }

        if (!isValidPhoneNumber(phoneNumber)) {
            alert('Please enter a valid phone number.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (email !== confirmEmail) {
            alert('Email addresses do not match.');
            return;
        }

        if (!isValidPassword(password)) {
            alert('Password must contain at least 15 characters, including uppercase, lowercase, number, and special character.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert('Signup successful!');
        // Add code to handle successful signup
    });

    function isValidBirthDate(birthDate) {
        const birthDatePattern = /^(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])-(\d{4})$/;
        return birthDatePattern.test(birthDate);
    }

    function isValidPhoneNumber(phoneNumber) {
        // Basic validation for phone number length, assuming it's between 10 and 15 digits
        const phoneNumberPattern = /^[0-9]{10,15}$/;
        return phoneNumberPattern.test(phoneNumber);
    }

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
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{15,}$/;
        return passwordPattern.test(password);
    }
});