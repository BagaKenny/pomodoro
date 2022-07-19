const focusTimeInput = document.querySelector('#focusTime');
const breakTimeInput = document.querySelector('#breakTime');
const pauseBtn = document.querySelector('.pause')

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); 
    localStorage.setItem('focusTime', focusTimeInput.value);
    localStorage.setItem('breakTime', breakTimeInput.value);
});

document.querySelector('.reset').addEventListener('click', () => {
    startBtn.style.transform = 'scale(1)';
    clearTimeout(initial);
    setProgress(0);
    mindiv.textContent = 0;
    secdiv.textContent = 00;
});

pauseBtn.addEventListener('click', () => {
    // SI timer n'est pas restart on le retourne
    if (paused === undefined) {
        return;
    }

    if (paused) {
        paused = false;
        initial = setTimeout('decremenT()', 60)
        // pauseBtn.textContent = 'Pause'
        pauseBtn.classList.remove('resume');
    } else {
        clearTimeout(initial)
        // pauseBtn.textContent = 'Resume'
        pauseBtn.classList.add('hoverize');
        paused = true;
    }
});