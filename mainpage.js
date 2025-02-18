document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector('.hero-text h2');
    const heroParagraph = document.querySelector('.hero-text p');
    const floatingBooks = document.querySelector('.floating-books');
    const exploreBtn = document.getElementById('explore-btn');
    const exploreSection = document.getElementById('explore-section');

    setTimeout(() => {
        heroText.style.transform = "translateY(0)";
        heroText.style.opacity = "1";
    }, 500);

    setTimeout(() => {
        heroParagraph.style.transform = "translateY(0)";
        heroParagraph.style.opacity = "1";
    }, 1000);

    setTimeout(() => {
        floatingBooks.style.opacity = "1";
    }, 1500);

    exploreBtn.addEventListener('click', function (event) {
        event.preventDefault();
        exploreSection.scrollIntoView({ behavior: 'smooth' });
    });
});