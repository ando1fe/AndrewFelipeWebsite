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
        // Start the fade out effect
        loadingBar.classList.add('fade-out');
        loadingText.classList.add('fade-out');

        setTimeout(function () {
            loadingBar.style.display = 'none';
            loadingText.style.display = 'none';

            // Reset the opacity
            loadingBar.style.opacity = '1';
            loadingText.style.opacity = '1';

            // Start the fade in effect for the intro text
            introText.textContent = 'Hi there!';
            introText.classList.add('fade-in');

            setTimeout(function () {
                var introText = document.getElementById('intro-text');
                var arrow = document.getElementById('arrow');

                // Add the "Welcome to my resume!" text and fade it in
                introText.textContent = 'Welcome to my resume! Scroll to learn more....';
                introText.classList.add('fade-in');

                // Display and fade in the arrow at the same time
                arrow.style.display = 'block';
                arrow.classList.add('fade-in');
            }, 2000);
        }, 4000); // Change the delay to 4000 milliseconds (4 seconds)
    }
}, 100); // Adjust the interval as needed
