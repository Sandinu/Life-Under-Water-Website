// formHandler.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailIn = document.getElementById('email');
    const phoneIn = document.getElementById('phone');
    const cardNumIn = document.getElementById('CardNum');
    const cvvIn = document.getElementById('cvv');
    const expiryIn = document.getElementById('expiry');
    const cart = JSON.parse(localStorage.getItem('cart'));

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        let isValid = true;

        // Email validation
        if (!isValidEmail(emailIn.value)) {
            isValid = false;
            displayError(emailIn, 'Please enter a valid email address');
        } else {
            clearError(emailIn);
        }

        // Phone validation
        if (!isValidPhone(phoneIn.value)) {
            isValid = false;
            displayError(phoneIn, 'Please enter a valid phone number (10 Numbers)');
        } else {
            clearError(phoneIn);
        }

        // Card number validation
        if (!isValidCardNumber(cardNumIn.value)) {
            isValid = false;
            displayError(cardNumIn, 'Please enter a valid card number (16 Numbers)');
        } else {
            clearError(cardNumIn);
        }

        // CVV validation
        if (!isValidCVV(cvvIn.value)) {
            isValid = false;
            displayError(cvvIn, 'Please enter a valid CVV (3 Numbers)');
        } else {
            clearError(cvvIn);
        }

        // Expiry date validation
        if (!isValidExpiry(expiryIn.value)) {
            isValid = false;
            displayError(expiryIn, 'Please enter a valid expiry date');
        } else {
            clearError(expiryIn);
        }

        if (isValid) {
            // Store form data
            const formData = {
                name: form.fname.value + ' ' + form.lname.value,
                phone: phoneIn.value,
                email: emailIn.value,
                address: form.addr.value + ', ' + form.city.value + ', ' + form.Province.value,
                date: new Date()
            };

            // Open new tab and generate invoice
            Invoice(formData, cart);
            window.location.href = './shop.html'

            // Clear cart
            localStorage.removeItem('cart');
            // Clear form inputs
            form.reset();
        }
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    function isValidCardNumber(cardNumber) {
        return /^\d{16}$/.test(cardNumber);
    }

    function isValidCVV(cvv) {
        return /^\d{3}$/.test(cvv);
    }

    function isValidExpiry(expiry) {
        const currentDate = new Date();
        const inputDate = new Date(expiry);
        return inputDate > currentDate;
    }

    function displayError(input, message) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.innerText = message;
        } else {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.innerText = message;
            input.parentNode.insertBefore(errorDiv, input.nextElementSibling);
        }
    }

    function clearError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.remove();
        }
    }
});
