document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.button-next');
    const content1 = document.querySelector('.conten-1');
    content1.style.display = 'none';
    nextButton.addEventListener('click', function() {
        const home = document.querySelector('.home');
        home.style.display = 'none';
        content1.style.display = 'block';
    });
    const backgroundMusic = document.getElementById('backgroundMusic');
    function playBackgroundMusic() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        }
    }
    backgroundMusic.addEventListener('ended', function() {
        playBackgroundMusic();
    });
    const lanjutButton = document.getElementById('lanjutButton');
    lanjutButton.addEventListener('click', function() {
        playBackgroundMusic();
    });
});
