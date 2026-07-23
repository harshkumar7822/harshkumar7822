// ==============================
// Typing Effect
// ==============================

const textElement = document.getElementById("typing-text");

const texts = [
    "Computer Science Engineering Student",
    "MERN Stack Developer",
    "Machine Learning Enthusiast",
    "Open to Internship Opportunities"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        textElement.textContent = currentText.substring(0, charIndex++);
    }
    else {

        textElement.textContent = currentText.substring(0, charIndex--);
    }

    let speed = deleting ? 40 : 80;

    if (!deleting && charIndex === currentText.length + 1) {

        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {

        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==============================
// Navbar Shadow on Scroll
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
    }
    else {

        navbar.style.boxShadow = "none";
    }

});


// ==============================
// Active Navbar Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});


// ==============================
// Fade Animation on Scroll
// ==============================

const cards = document.querySelectorAll(".card, .project-card, .skill-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s";

    observer.observe(card);

});


// ==============================
// Current Year in Footer
// ==============================

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Harsh Kumar <br> Made with ❤️ using HTML, CSS & JavaScript`;
