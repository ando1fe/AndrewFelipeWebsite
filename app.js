console.log("Welcome to my resume website!");
// script.js
let loadingBar = document.getElementById('loading-bar');
let introText = document.getElementById('intro-text');
let percentage = 0;
let percentageElement = document.getElementById('percentage');

let loadingInterval = setInterval(() => {
    percentage++;
    percentageElement.textContent = percentage + '%';
    loadingBar.style.width = percentage + '%';

    if (percentage >= 100) {
        clearInterval(loadingInterval);
        introText.style.display = 'block'; // Show the intro text after loading is complete
        introText.textContent = 'Hi there!';
        setTimeout(function() {
            introText.textContent = 'Welcome to my resume! Scroll to learn more....';
        }, 2000);
    }
}, 100);