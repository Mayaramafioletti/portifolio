document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/components/menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        });
});