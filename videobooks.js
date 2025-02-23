document.addEventListener("DOMContentLoaded", function() {
    // Filter Courses
    const filterButtons = document.querySelectorAll(".filter-btn");
    const courses = document.querySelectorAll(".course");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("data-category");

            courses.forEach(course => {
                if (category === "all" || course.getAttribute("data-category") === category) {
                    course.style.display = "block";
                } else {
                    course.style.display = "none";
                }
            });
        });
    });

    // Toggle Course Description
    const toggleButtons = document.querySelectorAll(".toggle-desc");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const desc = this.previousElementSibling;
            if (desc.style.display === "none" || desc.style.display === "") {
                desc.style.display = "block";
                this.textContent = "Show Less";
            } else {
                desc.style.display = "none";
                this.textContent = "Show More";
            }
        });
    });
});
