/* JAVASCRIPT SOURCE ATTRIBUTION:
  
  Mobile Menu Toggle: Custom logic based on Traversy Media "Responsive Navbar" tutorial.
  Coffee Quiz Logic: Original logic developed for this project.
  Modal/Pop-up Logic: Based on W3Schools "How To - Modals" guide.
    (Source: https://www.w3schools.com/howto/howto_css_modals.asp)
*/
// --- 1. Navigation Menu Logic 


const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Change icon color so it's visible on the light background
    if (navLinks.classList.contains('active')) {
        menuIcon.style.color = "#180202"; // Dark color
        menuIcon.classList.replace('fa-bars', 'fa-xmark'); // Changes ☰ to X
    } else {
        menuIcon.style.color = "white";
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    }
});
const links = document.querySelectorAll('.menu-items a');

links.forEach(link => {
    link.addEventListener('click', function () {
        // 1. Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));

        // 2. Add 'active' class to the one that was clicked
        this.classList.add('active');

        // 3. Optional: Close the mobile menu after clicking
        document.querySelector('.nav-links').classList.remove('active');
    });
});
// --- Improved Coffee Quiz Logic (Upgraded) ---

// --- Improved Interactive Quiz ---

const questions = [
    {
        question: "How do you prefer your coffee?",
        options: ["Black & Strong", "Sweet & Creamy", "Iced & Refreshing", "Hot & Steamy"]
    },
    {
        question: "How much caffeine do you want?",
        options: ["Strong", "Medium", "Light"]
    },
    {
        question: "Pick a vibe:",
        options: ["Relaxing", "Energetic", "Cozy"]
    }
];

let currentQuestion = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("quiz-options");
const resultDiv = document.getElementById("quiz-result");
const progressFill = document.querySelector(".progress-fill");

// Load question dynamically
function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.innerText = q.question;

    optionsContainer.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("quiz-opt");
        btn.innerText = option;

        btn.onclick = () => checkChoice(option);

        optionsContainer.appendChild(btn);
    });

    updateProgress();
}

// Handle answer
function checkChoice(choice) {

    if (currentQuestion === questions.length - 1) {
        // Final result (simple logic)
        if (choice === "Strong") {
            resultDiv.innerHTML = "You got Espresso! ☕";
        } else if (choice === "Relaxing") {
            resultDiv.innerHTML = "You got Latte! ☕";
        } else {
            resultDiv.innerHTML = "You got Cappuccino! ☕";
        }

        questionText.innerText = "Your Result:";
        optionsContainer.innerHTML = "";
        progressFill.style.width = "100%";
        return;
    }

    currentQuestion++;
    loadQuestion();
}

// Progress bar update
function updateProgress() {
    let progress = (currentQuestion / questions.length) * 100;
    progressFill.style.width = progress + "%";
}

// Start quiz
loadQuestion();
//Source: W3Schools Modal Tutorial---
const modal = document.getElementById("videoModal");
const btn = document.getElementById("openVideo");
const span = document.getElementsByClassName("close-modal")[0];

// User INITIATES action (Opens Modal)
btn.onclick = function () {
    modal.style.display = "block";
}

// User CONTROLS action (Closes Modal)
span.onclick = function () {
    modal.style.display = "none";
}

// User CONTROLS action (Closes by clicking outside the box)
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// --- Coffee Search Functionality ---

const searchInput = document.getElementById("coffee-search");
const coffeeCards = document.querySelectorAll(".coffee-card");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();

    let visible = 0;

    coffeeCards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        const description = card.querySelector("p").innerText.toLowerCase();

        if (title.includes(searchValue) || description.includes(searchValue)) {
            card.style.display = "flex";
            visible++;
        } else {
            card.style.display = "none";
        }
    });

    // Show / hide message
    if (visible === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});
