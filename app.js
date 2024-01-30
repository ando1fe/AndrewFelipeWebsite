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

        setTimeout(function () {
            loadingBar.classList.add('fade-out');
            loadingText.classList.add('fade-out');
        }, 1000);

        setTimeout(function () {
            loadingBar.style.display = 'none';
            loadingText.style.display = 'none';
            introText.textContent = 'Hi there!';
            introText.classList.add('fade-in');
        }, 2000);

        setTimeout(function () {
            introText.classList.remove('fade-in');
            introText.classList.add('fade-out');
        }, 4000);

        setTimeout(function () {
            introText.textContent = 'Welcome to my resume! Scroll to learn more....';
            introText.classList.remove('fade-out');
            introText.classList.add('fade-in');
            arrow.style.display = 'block';
            arrow.classList.add('fade-in');
        }, 6000);
    }
}, 50);