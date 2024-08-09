// scripts.js

// Smooth scrolling for all links in nav-menu
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Redirect to Capstone Project section on click
document.getElementById('capstone-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'capstone.html#capstone';
});
