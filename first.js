document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.hover-text a');

    links.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            console.log('Target Section:', targetSection);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.error('Target Section not found');
        }
    }
});