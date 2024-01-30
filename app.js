console.log("Welcome to my resume website!");

// script.js
let loadingBar = document.getElementById('loading-bar');
let introText = document.getElementById('intro-text');
let percentage = 0;
let percentageElement = document.getElementById('percentage');

let loadingInterval = setInterval(() => {
    percentage += 5; // Increase the percentage by 5 instead of 1
    percentageElement.textContent = percentage + '%';
    loadingBar.style.width = percentage + '%';

    if (percentage >= 100) {
        clearInterval(loadingInterval);
        introText.style.opacity = '0'; // Fade out the intro text
        loadingBar.style.opacity = '0'; // Fade out the loading bar

        setTimeout(function() {
            introText.style.display = 'none'; // Hide the intro text after fading out
            loadingBar.style.display = 'none'; // Hide the loading bar after fading out
            introText.style.opacity = '1'; // Reset the opacity of the intro text
            loadingBar.style.opacity = '1'; // Reset the opacity of the loading bar

            introText.textContent = 'Hi there!';
            introText.style.display = 'block'; // Show the intro text
            introText.style.opacity = '0'; // Set the opacity of the intro text to 0
            setTimeout(function() {
                introText.style.opacity = '1'; // Fade in the intro text
                introText.textContent = 'Welcome to my resume! Scroll to learn more....';
            }, 2000);
        }, 2000); // Change the delay to 2000 milliseconds (2 seconds)
    }
}, 20); // Change the interval duration to 20 milliseconds
