function setCSSFile() {
    const isMobileOrTablet = window.matchMedia("only screen and (max-width: 768px)").matches;
    const mainStyle = document.getElementById('main-style');
    if (isMobileOrTablet) {
        mainStyle.setAttribute('href', 'icimobile.css');
    } else {
        mainStyle.setAttribute('href', 'icipc.css');
    }
}

document.addEventListener('DOMContentLoaded', setCSSFile);
window.addEventListener('resize', setCSSFile);

function fadeInOnScroll() {
    const elements = document.querySelectorAll('.content, .contact, .btn, .caption');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
document.addEventListener('DOMContentLoaded', fadeInOnScroll);

