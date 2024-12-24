function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const content = document.getElementById("content");

    navLinks.classList.toggle("open");
    content.classList.toggle("adjusted");
}
function hoverEffect(element) {
    element.style.backgroundColor = "#e0f7fa";
    element.querySelector("h3").style.color = "#00796b";
    element.querySelector("p").style.color = "#004d40";
}

function hoverOutEffect(element) {
    element.style.backgroundColor = "white";
    element.querySelector("h3").style.color = "#333";
    element.querySelector("p").style.color = "#666";
}

function scrollContainer(direction) {
    const container = document.getElementById("serviceContainer");
    const scrollAmount = direction * 320; // Adjust scroll distance per service box width + margin
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}


        // JavaScript for dynamic effects
        const links = document.querySelectorAll('.footer-column ul li a');

// Hover effects: Adding animation and hover interaction
links.forEach(link => {
link.addEventListener('mouseover', () => {
link.style.boxShadow = "0px 4px 6px rgba(0, 123, 255, 0.5)";
});

link.addEventListener('mouseout', () => {
link.style.boxShadow = "none";
});
});
