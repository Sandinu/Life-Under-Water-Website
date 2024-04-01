document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = emailInput.value.trim();
  
      if (!validateEmail(email)) {
        message.textContent = "Enter a valid email";
      } else {
        message.textContent = "Thanks for subscribing";
        console.log("Subscribed email:", email);
        form.reset();
      }
    });
  
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  