// ==============================
// Typing Animation
// ==============================
const roles = ["Web Developer", "UI Designer", "Frontend Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const element = document.querySelector(".typing");
    if (!element) return;

    if (!element.dataset.started) {
        element.textContent = "";
        element.dataset.started = "true";
    }

    const currentRole = roles[roleIndex];



    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 1200;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeRole, speed);
}

// ==============================
// Navigation & Section System
// ==============================
document.addEventListener("DOMContentLoaded", () => {

    typeRole(); // start typing animation

    const sections = document.querySelectorAll(".page-section");

    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(section => section.style.display = "none");

        // Show selected section
        const activeSection = document.getElementById(sectionId);
        if (!activeSection) return;

        activeSection.style.display = "block";

        // Trigger slide animations for About page
        activeSection.querySelectorAll(".slide-left, .slide-right").forEach(el => {
            el.classList.remove("active"); // reset first
        });
        setTimeout(() => {
            activeSection.querySelectorAll(".slide-left, .slide-right").forEach(el => {
                el.classList.add("active");
            });
        }, 100);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "instant" });
    }

    // NAVBAR LINKS
    document.getElementById("nav-home").addEventListener("click", e => {
        e.preventDefault();
        showSection("home");
    });
    document.getElementById("nav-projects").addEventListener("click", e => {
        e.preventDefault();
        showSection("projects");
    });
    document.getElementById("nav-about").addEventListener("click", e => {
        e.preventDefault();
        showSection("about");
    });
    document.getElementById("nav-contact").addEventListener("click", e => {
        e.preventDefault();
        showSection("contact");
    });

    // HOME BUTTONS
    document.getElementById("btn-projects").addEventListener("click", e => {
        e.preventDefault();
        showSection("projects");
    });
    document.getElementById("btn-about").addEventListener("click", e => {
        e.preventDefault();
        showSection("about");
    });

    // ==============================
    // Scroll Animations
    // ==============================
    const projectCards = document.querySelectorAll(".project-card");

    function revealAnimations() {
        const triggerBottom = window.innerHeight * 0.85;

        projectCards.forEach((card, index) => {
            if (card.getBoundingClientRect().top < triggerBottom) {
                setTimeout(() => card.classList.add("active"), index * 150);
            }
        });
    }

    window.addEventListener("scroll", revealAnimations);
    window.addEventListener("load", revealAnimations);

});