document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.button-next');
    const content1 = document.querySelector('.conten-1');
    content1.style.display = 'none';
    nextButton.addEventListener('click', function() {
        const home = document.querySelector('.home');
        home.style.display = 'none';
        content1.style.display = 'block';
    });
});
