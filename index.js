document.addEventListener("DOMContentLoaded", function() {
    const getStartedBtn = document.getElementById("getStartedBtn");

    getStartedBtn.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "login.html";
    });

    // Particle Animation
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Random Position
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.top = window.innerHeight + "px";

        // Random Animation Duration
        let duration = Math.random() * 5 + 3;
        particle.style.animationDuration = ${duration}s;

        document.querySelector(".background-animation").appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // Generate particles at intervals
    setInterval(createParticle, 500);
});