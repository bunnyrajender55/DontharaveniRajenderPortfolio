// Animation trigger for achievements
const timelineItems = document.querySelectorAll('.timeline-item');
const achievementsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => achievementsObserver.observe(item));

// Modal functions
function openModal(imgSrc) {
    document.getElementById('modalImage').src = imgSrc;
    document.getElementById('certModal').style.display = "block";
}

function closeModal() {
    document.getElementById('certModal').style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById('certModal')) {
        closeModal();
    }
};
