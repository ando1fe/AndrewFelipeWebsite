console.log("Welcome to my resume website!");
// script.js
let loadingBar = document.getElementById('loading-bar');
let introText = document.getElementById('intro-text');
let intro = document.getElementById('intro');
let percentage = 0;
let percentageElement = document.getElementById('percentage');

let loadingInterval = setInterval(() => {
    percentage++;
    percentageElement.textContent = percentage + '%';

    if (percentage >= 100) {
        clearInterval(loadingInterval);
        introText.style.display = 'block'; // Show the intro text after loading is complete
    }
}, 100);

let width = 0;
let loading = setInterval(function() {
    if (width >= 100) {
        clearInterval(loading);
        introText.textContent = 'Hi there!';
        setTimeout(function() {
            introText.textContent = 'Welcome to my resume! Scroll to learn more....';
        }, 2000);
    } else {
        width++;
        loadingBar.style.width = width + '%';
        loadingBar.style.height = '10px'; // Set the desired height of the loading bar
        loadingBar.style.backgroundColor = 'black'; // Set the loading bar color to black
    }
}, 100); // Set the loading bar speed to match the percentage speed
