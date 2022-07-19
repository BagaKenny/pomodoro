const el = document.querySelector('.clock');
const bell = document.querySelector('audio');

//Prendre le div du minute et de seconde
const mindiv = document.querySelector('.mins');
const secdiv = document.querySelector('.secs');

//Chopper Button start
const startBtn = document.querySelector('.start');
localStorage.setItem('btn', 'focus');

let initial, totalsecs, perc, paused, mins, seconds;
//Mettre un ecouteur à start
startBtn.addEventListener('click', () => {
    //LORSQUE click prendre dans le locale storage
    let btn = localStorage.getItem('btn');

    if(btn === 'focus') {
        mins = +localStorage.getItem('focusTime'); //inscrire le + pour qu'il retourne en nombre
    }else {
        mins = +localStorage.getItem('breakTime');

    }
        seconds = mins * 60;
        totalsecs = mins * 60
        setTimeout(decremenT(), 60); //On mets la fonction dans setTimeout
        
        //LORSQUE CLIQUE le bouton disparait
        startBtn.style.tranform = "scale(0)";
        //Pause est mis à false
        paused = false;
})

function decremenT() {
    //SI secondes plus grands que 116 then Mathh.floor(seconds/60)
    mindiv.textContent = Math.floor(seconds / 60);
    secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;

    // Si les secondes sont supérieurs à 0 on décrémente de 1 à chaque fois
    if (seconds > 0) {
        // CALCULER le POURCENTAGE
        // MATH.CEIL s'assure que le nombre est un entier entre 0-110
        // On divise le nombre total de secondes avec le npmbre actuel de secondes et on le divise pas le nombre tot de sec puis le miltiplie par 100
        perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
        setProgress(perc)

        if(circle.classList.contains('danger')) {
            circle.classList.remove('danger');
        }

        seconds --;
        initial = window.setTimeout('decremenT()', 1000) //On loop toute les secondes àfin ca enleve chaque secondes

        if(seconds < 10){
            circle.classList.add('danger');
        }
    }else {
        //Si les secondes arrivent à zero, mins est égale à 0, et on jour le son audio
        mins = 0;
        seconds = 0;
        bell.play()
// CHOPPER le bouton dans le locale storage
        let btn = localStorage.getItem('btn')
// SI le bouton est en focus  mettre ka class break et ecrire Start Break
        if(btn === 'focus') {
            startBtn.textContent = 'Start Break';
            startBtn.classList.add('break')
            localStorage.getItem('btn', 'break')
        } else {
            //Enlever la class Break et ecrire Start Focus
            startBtn.textContent = 'Start Focus';
            startBtn.classList.remove('break')
            localStorage.getItem('btn', 'break')
        }
        // Faire reappaitre le bouton
        startBtn.style.tranform = "scale(1)"
    }
    }
