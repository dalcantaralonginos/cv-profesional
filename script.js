const sections = document.querySelectorAll('.section');

sections.forEach((section, i) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';

    setTimeout(() => {
        section.style.transition = 'all 0.6s ease';
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
    }, i * 200);
});
