const stars = document.querySelectorAll('.stars i');
const form = document.querySelector('form');
const clear = document.querySelector('.red');

stars.forEach((star) => {
    star.addEventListener('click', () =>{
        const color = parseInt(star.getAttribute("data-value"));
        activateStars(color);
    });
});

function activateStars(color) {
    stars.forEach((star, index) => {
        if (index < color){
            star.classList.add("check");
        }else{
            star.classList.remove("check");
        }
    });
}

clear.addEventListener("click", () => {
    stars.forEach((star,index) => {
        if (index > 0){
            star.classList.remove("check");
        }
    })
});

form.addEventListener('submit', function(event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Check if name or email is empty
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in your name and email.');
    } else if (!isValidEmail(emailInput.value.trim())) {
        event.preventDefault(); // Prevent form submission
        alert('Please enter a valid email address.');
    }
});

// Function to validate email address
function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const visit = document.querySelector('input[name="visit"]:checked').value;
    const info = document.querySelector('input[name="info"]:checked').value;
    const improvements = document.getElementById('improvements').value;
    const stars = document.querySelectorAll('.stars i.check').length; // Count checked stars
    const recommend = document.querySelector('input[name="recommend"]:checked').value;
    const extra = document.getElementById('extra').value;

    // Open default email client with pre-filled data
    window.location.href = `mailto:your-email@example.com?subject=Feedback from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AFirst Time Visit: ${encodeURIComponent(visit)}%0D%0AInformative and Easy to Navigate: ${encodeURIComponent(info)}%0D%0AImprovements: ${encodeURIComponent(improvements)}%0D%0ASatisfaction: ${stars}%0D%0ARecommendation: ${encodeURIComponent(recommend)}%0D%0AAdditional Questions/Requests: ${encodeURIComponent(extra)}`;
});