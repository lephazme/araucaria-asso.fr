// ============================
// Custom JavaScript for Araucaria
// ============================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Araucaria website loaded');

    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // Highlight active navigation link
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentLocation.includes(href.replace('../', '').replace('.html', ''))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Utility function to show notifications
function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
}
