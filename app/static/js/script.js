
// Function to toggle dark mode and save preference
const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    
    // Save the user's theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

// Event listener for theme toggle button
document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);

// Load saved theme from localStorage when the page is loaded
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme && savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// JavaScript to make cards pulse
document.addEventListener("DOMContentLoaded", () => {
    // Select all cards (assuming all cards have the 'section' class)
    const cards = document.querySelectorAll(".section");

    // Function to add and remove the pulse class
    function pulseEffect() {
        cards.forEach(card => {
            setTimeout(() => {
                card.classList.add("pulse");

                // Remove the pulse class after a short delay
                setTimeout(() => {
                    card.classList.remove("pulse");
                }, 1000); // Match the duration of the animation
            }, Math.random() * 2000); // Add a random delay for each card
        });
    }

    // Initial pulse effect and repeat it every few seconds
    pulseEffect();
    setInterval(pulseEffect, 2000); // Repeat the pulse effect every 5 seconds
});
