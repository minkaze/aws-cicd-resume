
"use strict";

// Display a message when the website loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Resume website loaded successfully!");

    // Automatically update the copyright year
    const footer = document.querySelector("footer p");

    if (footer) {
        const currentYear = new Date().getFullYear();

        footer.textContent =
            `© ${currentYear} Minh Phan. All rights reserved.`;
    }

    // Highlight the active navigation link
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((navLink) => {
                navLink.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
});
