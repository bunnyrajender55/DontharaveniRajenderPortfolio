// Animate certificate cards on scroll
const certificateCards = document.querySelectorAll('.certificate-card');
const certificatesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 250);
        }
    });
}, { threshold: 0.1 });

certificateCards.forEach(card => certificatesObserver.observe(card));

// Hover effect for certificate icons
document.querySelectorAll('.certificate-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotate(15deg) scale(1.2)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0deg) scale(1)';
    });
});
