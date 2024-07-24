
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const linkNav = document.querySelector('.link-navigation');
    linkNav.classList.toggle('nav-open');
});

let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.related-products-grid');
    const products = document.querySelectorAll('.product');
    const totalProducts = products.length;
    const productWidth = products[0].clientWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalProducts - 1;
    } else if (currentIndex >= totalProducts) {
        currentIndex = 0;
    }

    const offset = -currentIndex * productWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Optional: Auto-slide functionality
let autoSlide = setInterval(() => moveCarousel(1), 5000);

// Stop auto-slide on user interaction
document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

document.querySelector('.carousel').addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => moveCarousel(1), 5000);
});
