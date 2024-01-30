console.log("Welcome to my resume website!");

let loadingBar = document.getElementById('loading-bar');
let introText = document.getElementById('intro-text');
let percentage = 0;
let percentageElement = document.getElementById('percentage');
let loadingText = document.getElementById('loading-text'); // New element for "Loading in..." text
let arrow = document.getElementById('arrow'); // New element for the bouncing arrow

let loadingInterval = setInterval(() => {
    percentage += 1; // Increase the percentage by 1
    percentageElement.textContent = percentage + '%';
    loadingBar.style.width = percentage + '%';

    if (percentage >= 100) {
        clearInterval(loadingInterval);
        loadingBar.style.opacity = '0'; // Fade out the loading bar
        loadingText.style.opacity = '0'; // Fade out the "Loading in..." text

        setTimeout(function() {
            loadingBar.style.display = 'none'; // Hide the loading bar after fading out
            loadingText.style.display = 'none'; // Hide the "Loading in..." text
            loadingBar.style.opacity = '1'; // Reset the opacity of the loading bar
            loadingText.style.opacity = '1'; // Reset the opacity of the "Loading in..." text

            introText.textContent = 'Hi there!';
            introText.style.opacity = '0'; // Set the opacity of the intro text to 0
            setTimeout(function() {
                introText.style.opacity = '1'; // Fade in the intro text
                introText.textContent = 'Welcome to my resume! Scroll to learn more....';
                arrow.style.display = 'block'; // Show the bouncing arrow
            }, 2000);
        }, 4000); // Change the delay to 4000 milliseconds (4 seconds)
    }
}, 100); // Adjust the interval as needed