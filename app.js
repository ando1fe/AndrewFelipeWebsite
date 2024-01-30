console.log("Welcome to my resume website!");

let loadingBar = document.getElementById('loading-bar');
let introText = document.getElementById('intro-text');
let percentage = 0;
let percentageElement = document.getElementById('percentage');
let loadingText = document.getElementById('loading-text');
let arrow = document.getElementById('arrow');

let loadingInterval = setInterval(() => {
    percentage += 2;
    percentageElement.textContent = percentage + '%';
    loadingBar.style.width = percentage + '%';

    if (percentage >= 100) {
        clearInterval(loadingInterval);

        loadingBar.style.opacity = '0';
        loadingText.style.opacity = '0';

        setTimeout(function () {
            loadingBar.style.display = 'none';
            loadingText.style.display = 'none';
            introText.textContent = 'Hi there!';
            introText.style.opacity = '1';
        }, 2000);

        setTimeout(function () {
            introText.style.opacity = '0';
        }, 4000);

        setTimeout(function () {
            introText.textContent = 'Welcome to my resume! Scroll to learn more....';
            introText.style.opacity = '1';
            arrow.style.display = 'block';
            arrow.style.opacity = '1';
        }, 6000);
    }
}, 50);