document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading

        // Simulating a successful form submission
        responseMessage.classList.remove("hidden");
        form.reset(); // Clear form fields after submission

        // Hide message after 3 seconds
        setTimeout(() => {
            responseMessage.classList.add("hidden");
        }, 3000);
    });
});
