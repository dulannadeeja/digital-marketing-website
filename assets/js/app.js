// hamburger menu toggle function
const toggleMenu = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    navbar.classList.toggle('card');
    navbar.classList.toggle('glass-card');

    navbar.animationName = 'none';

    switch (navbar.classList.contains('active')) {
        case true:
            navbar.animationName = 'slideIn';
            break;
        case false:
            navbar.animationName = 'slideOut';
            break;
    }
};

// hamburger menu toggle event listener
const navCollapseBtn = document.querySelector('.nav-collapse-btn');

navCollapseBtn.addEventListener('click', toggleMenu);