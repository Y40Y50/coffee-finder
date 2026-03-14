// In your script.js
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
    link.addEventListener('click', function() {
        // 1. Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));
        
        // 2. Add 'active' class to the one that was clicked
        this.classList.add('active');
        
        // 3. Optional: Close the mobile menu after clicking
        document.querySelector('.nav-links').classList.remove('active');
    });
});
function checkChoice(choice) {
    const resultDiv = document.getElementById('quiz-result');
    const progressFill = document.querySelector('.progress-fill');
    
    // 1. Logic to check the choice
    if (choice === 'Black & Strong') {
        resultDiv.innerHTML = "Your choice is Espresso! ☕";
    } 
    else if (choice === 'Sweet & Creamy') {
        resultDiv.innerHTML = "Your choice is Latte! ☕";
    } 
    else if (choice === 'Iced & Refreshing') {
        resultDiv.innerHTML = "Your choice is Iced Americano! 🧊";
    } 
    else if (choice === 'Hot & Steamy') {
        resultDiv.innerHTML = "Your choice is a Classic Cappuccino! ☁️";
    } 
    else {
        resultDiv.innerHTML = "Great choice! Let's see what else you like.";
    }
    
    resultDiv.style.color = "#180202"; 
    
    if (progressFill) {
        progressFill.style.width = "100%";
    }
}