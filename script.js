// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to sections
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars on scroll
    window.addEventListener('scroll', function() {
        document.querySelectorAll('.progress').forEach(bar => {
            const barPos = bar.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.5;
            if (barPos < screenPos) {
                bar.style.width = bar.getAttribute('style').split('width: ')[1];
            }
        });
    });
});
