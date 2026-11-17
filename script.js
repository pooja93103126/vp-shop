
// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    menuBtn.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// TYPING ANIMATION
const typing = document.getElementById("typing");

const words = [
    "CSE Student",
    "Web Developer",
    "Creative Learner",
    "Future Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    typing.textContent = currentWord.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

// DARK AND LIGHT MODE
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeBtn.textContent =
        document.body.classList.contains("light") ? "☾" : "☀";
});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

// BACK TO TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display =
        window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// CURRENT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();

console.log("Welcome to Pooja's Portfolio!");
