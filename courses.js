document.addEventListener("DOMContentLoaded", function () {
    const coursesContainer = document.querySelector(".courses-container");

    // Dummy Course Data
    const courses = [
        { title: "Web Development", image: "https://via.placeholder.com/250", description: "Learn HTML, CSS, and JS from scratch.", price: "&#8377 4900" },
        { title: "Python for Beginners", image: "https://via.placeholder.com/250", description: "Master Python programming basics.", price: " &#8377 3900" },
        { title: "Graphic Design", image: "https://via.placeholder.com/250", description: "Explore Photoshop and Illustrator.", price: "&#8377 5900" },
        { title: "Data Science Bootcamp", image: "https://via.placeholder.com/250", description: "Hands-on data analysis and visualization.", price: "&#8377 7900" },
        { title: "Digital Marketing", image: "https://via.placeholder.com/250", description: "SEO, SEM, and social media marketing.", price: "&#8377 4500" },
        { title: "Cyber Security", image: "https://via.placeholder.com/250", description: "Protect networks and prevent cyber threats.", price: "&#8377 9900" },
        { title: "AI & Machine Learning", image: "https://via.placeholder.com/250", description: "Learn AI and ML techniques.", price: "&#8377 11900" },
        { title: "Ethical Hacking", image: "https://via.placeholder.com/250", description: "Become a certified ethical hacker.", price: "&#8377 8900" },
        { title: "Blockchain Fundamentals", image: "https://via.placeholder.com/250", description: "Understand blockchain and cryptocurrency.", price: "&#8377 6900" },
        { title: "Mobile App Development", image: "https://via.placeholder.com/250", description: "Build iOS and Android apps.", price: "&#8377 9900" }
    ];

    // Generate Course Cards
    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="course-price">${course.price}</div>
            <a href="#" class="btn">View Course</a>
        `;
        coursesContainer.appendChild(courseCard);
    });
});