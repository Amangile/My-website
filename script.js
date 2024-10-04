document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            navMenu.classList.remove('show');
        });
    });

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Animate About section on scroll
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Typing effect
    new Typed('#typed-text', {
        strings: ['UI/UX Designer', 'Frontend Developer', 'Digital Craftsman'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
        });

    function animateAboutSection() {
        if (isElementInViewport(aboutText)) {
            aboutText.classList.add('animate');
            aboutImage.classList.add('animate');
        }
    }

    // Initial check on page load
    animateAboutSection();

    // Check on scroll
    window.addEventListener('scroll', animateAboutSection);
});