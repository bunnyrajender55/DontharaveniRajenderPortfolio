document.addEventListener('DOMContentLoaded', () => {
    // Animate skills items on scroll
    const skillsItems = document.querySelectorAll('.new-skills-item');
    const skillsSection = document.querySelector('#new-skills');

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                skillsItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 150);
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateSkills, {
        threshold: 0.5
    });

    observer.observe(skillsSection);

    // Hover effect for icons
    skillsItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('i, iconify-icon');
            if (icon) icon.style.transform = 'scale(1.2)';
        });

        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('i, iconify-icon');
            if (icon) icon.style.transform = 'scale(1)';
        });
    });
});


