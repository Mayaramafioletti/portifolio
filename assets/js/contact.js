document.addEventListener("DOMContentLoaded", function() {
    fetch('/contact.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-container').innerHTML = data;
        });
});