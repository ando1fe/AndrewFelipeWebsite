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
        }, 1000); // Adjust the delay as needed

        setTimeout(function () {
            // Start the fade in effect for the intro text
            introText.textContent = 'Hi there!';
            introText.classList.add('fade-in');
        }, 2000); // Delay for the 'Hi there!' text fade-in

        setTimeout(function () {
            // Fade out the 'Hi there!' text
            introText.classList.remove('fade-in');
            introText.classList.add('fade-out');
        }, 4000); // Delay for the 'Hi there!' text fade-out

        setTimeout(function () {
            // Remove the 'Hi there!' text and fade-out class
            introText.textContent = '';
            introText.classList.remove('fade-out');

            // Add the "Welcome to my resume!" text and fade it in
            introText.textContent = 'Welcome to my resume! Scroll to learn more....';
            introText.classList.add('fade-in');

            // Display and fade in the arrow at the same time
            arrow.style.display = 'block';
            arrow.classList.add('fade-in');
        }, 6000); // Delay for the 'Welcome to my resume!' text and arrow
    }
}, 100); // Adjust the interval as needed