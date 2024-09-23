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

/*toggle button*/

const toggleButtons = document.querySelectorAll('.dark-mode-toggle');
const body = document.body;

// Add event listener to each button
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Update button icon
        toggleButtons.forEach(btn => {
            if (body.classList.contains('dark-mode')) {
                btn.textContent =   '☀️'; // Switch to light mode icon
            } else {
                btn.textContent = '🌙'; // Switch to dark mode icon
            }
        });
    });
});

/*contact form*/

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    
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
});

/*progress bar*/

document.querySelectorAll('.circle-progress').forEach(circle => {
    const progress = circle.getAttribute('data-progress');
    circle.style.setProperty('--progress', progress);
});