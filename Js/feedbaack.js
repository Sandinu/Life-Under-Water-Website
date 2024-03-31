function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var firstTime = document.querySelector('input[name="firstTime"]:checked');
    var informative = document.querySelector('input[name="informative"]:checked');
    var improvements = document.getElementById("improvements").value;
    var updates = document.getElementById("updates").checked ? "Yes" : "No";
    var additionalQuestions = document.getElementById("additionalQuestions").value;

    var errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "";

    // Validation checks
    if (!name || !email || !firstTime || !informative  || !updates) {
        errorMessage.innerHTML = "Please fill in all required fields.";
        return;
    }
    if (!validateEmail(email)) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        return;
    }

    // Display preview
    document.getElementById("previewName").textContent = name;
    document.getElementById("previewEmail").textContent = email;
    document.getElementById("previewFirstTime").textContent = firstTime ? firstTime.value : "";
    document.getElementById("previewInformative").textContent = informative ? informative.value : "";
    document.getElementById("previewImprovements").textContent = improvements || "N/A";
    document.getElementById("previewUpdates").textContent = updates;
    document.getElementById("previewAdditionalQuestions").textContent = additionalQuestions || "N/A";

    // Hide form and display preview
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("preview").style.display = "block";
}

function confirmSubmit() {
    // Perform actual submission here (send email, etc.)
    var confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.innerHTML = "Thank you for your feedback!";
    
    // Clear form fields
    document.getElementById("feedbackForm").reset();
    
    // Hide preview and show form
    document.getElementById("preview").style.display = "none";
    document.getElementById("feedbackForm").style.display = "block";
}

function editForm() {
    // Show form and hide preview
    document.getElementById("feedbackForm").style.display = "block";
    document.getElementById("preview").style.display = "none";
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}