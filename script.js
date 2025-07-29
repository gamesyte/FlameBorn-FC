function showIntro() {
    const intro = document.getElementById('intro');
    setTimeout(() => {
        intro.classList.add('hidden');
    }, 3000); // Hide intro after 3 seconds
}

document.getElementById('play-games').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://example.com', '_blank'); // Replace with your game URL
});
