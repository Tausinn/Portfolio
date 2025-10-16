function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function checkAnswers() {
    let correctAnswers = 0;
    
    // Question 1
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "correct") {
        correctAnswers++;
    }

    // Question 2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "correct") {
        correctAnswers++;
    }

    // Question 3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "correct") {
        correctAnswers++;
    }

    // Question 4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "correct") {
        correctAnswers++;
    }

    // Question 5
    let q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === "correct") {
        correctAnswers++;
    }

    // Display the result
    document.getElementById("result").innerHTML = `You got ${correctAnswers} out of 5 correct.`;
}

/*
  Theme initialization and toggle behavior
  - Default: dark mode (unless user has previously chosen 'light' in localStorage)
  - Clicking a .dark-mode-toggle button toggles the theme and saves preference
  - Toggle buttons are initialized to the correct icon ('☀️' when dark, '🌙' when light)
*/

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Load saved preference. If none, default to dark mode.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
    } else if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        // Default to dark mode
        body.classList.add('dark-mode');
    }

    // Toggle button(s)
    const toggleButtons = document.querySelectorAll('.dark-mode-toggle');

    function updateToggleIcons() {
        toggleButtons.forEach(btn => {
            if (body.classList.contains('dark-mode')) {
                btn.textContent = '☀️'; // show sun to indicate you can switch to light
            } else {
                btn.textContent = '🌙'; // show moon to indicate you can switch to dark
            }
        });
    }

    // Initialize icons
    updateToggleIcons();

    // Add event listeners (only if buttons exist)
    if (toggleButtons.length > 0) {
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const isDark = body.classList.toggle('dark-mode');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                updateToggleIcons();
            });
        });
    }

    /*contact form*/
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
            
            try {
                const response = await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                });
                
                if (response.ok) {
                    alert("Message sent successfully!");
                    form.reset(); // Clear the form
                } else {
                    alert("Failed to send the message. Please try again.");
                }
            } catch (err) {
                console.error('Form submit error:', err);
                alert("Failed to send the message. Please check your connection and try again.");
            }
        });
    }

    /*progress bar*/
    document.querySelectorAll('.circle-progress').forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        circle.style.setProperty('--progress', progress);
    });
});
