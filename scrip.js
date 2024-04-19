document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.button-1 button');
    const content2 = document.querySelector('.conten-2');
    content2.style.display = 'none';
    nextButton.addEventListener('click', function() {
        const content1 = document.querySelector('.conten-1');
        if (content1.style.display !== 'none') {
            content1.style.display = 'none';
            content2.style.display = 'block';
        } else {
            content1.style.display = 'block';
            content2.style.display = 'none';
        }
    });
    const content1Initial = document.querySelector('.conten-1');
    content1Initial.style.display = 'none';
    const nextButtonInitial = document.querySelector('.button-next');
    nextButtonInitial.addEventListener('click', function() {
        const home = document.querySelector('.home');
        home.style.display = 'none';
        content1Initial.style.display = 'block';
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
