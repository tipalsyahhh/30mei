document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.button-1 button');
    const content2 = document.querySelector('.conten-2');
    const content1Initial = document.querySelector('.conten-1');
    const nextButtonInitial = document.querySelector('.button-next');
    const button2 = document.querySelector('.button-2 button');
    const content3 = document.querySelector('.conten-3');
    content1Initial.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';

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

    nextButtonInitial.addEventListener('click', function() {
        const home = document.querySelector('.home');
        home.style.display = 'none';
        content1Initial.style.display = 'block';
        content2.style.display = 'none';
        content3.style.display = 'none';
    });

    button2.addEventListener('click', function() {
        content2.style.display = 'none';
        content3.style.display = 'block';
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
function animateTypingText() {
    const animatedTextElement = document.getElementById('animated-text');
    const textToType = animatedTextElement.innerText.trim();
    let currentText = '';
    let textIndex = 0;

    const typingInterval = setInterval(() => {
        const char = textToType[textIndex];
        currentText += char;
        animatedTextElement.textContent = currentText;
        textIndex++;
        if (textIndex >= textToType.length) {
            clearInterval(typingInterval);
        }
    }, 60);
}
function watchConten3Visibility() {
    const conten3Element = document.querySelector('.conten-3');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTypingText();
                observer.disconnect();
            }
        });
    });
    observer.observe(conten3Element);
}
watchConten3Visibility();
