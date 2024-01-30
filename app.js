console.log("Welcome to my resume website!");
document.addEventListener("DOMContentLoaded", function() {
    let loadingBar = document.getElementById('loading-bar');
    let introText = document.getElementById('intro-text');
    let introSection = document.getElementById('intro');

    // Animate loading bar
    setTimeout(() => {
        loadingBar.style.width = '100%';
    }, 100);

    // Change text after loading bar completes
    setTimeout(() => {
        introText.style.opacity = 1;
        introText.innerHTML = "Hi there!";
    }, 2100);

    // Change text again after a pause
    setTimeout(() => {
        introText.innerHTML = "Welcome to my resume! Scroll to learn more...";
    }, 4000);

    // Handle scroll event
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        if(scrollPosition > 0){
            // Fade out and zoom intro
            introSection.style.opacity = 1 - scrollPosition / 200;
            introSection.style.transform = `scale(${1 - scrollPosition / 1000})`;
        }
    });
});
