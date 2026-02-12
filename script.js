
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


const sections = document.querySelectorAll(".section");
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});


document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});
