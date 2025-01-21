function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the password input value
    const passwordInput = document.getElementById('passwordInput').value;
    const password = "yes";

    // Perform password validation (replace this with your actual validation logic)
    if (passwordInput === password) {
        // Redirect to the home page
        alert('Wow birinays')
        window.location.href = 'home.html';
    } else {
        alert('Sayop. Sig pataka ay.');
    }
}
