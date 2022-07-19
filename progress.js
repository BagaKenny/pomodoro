const circle = document.querySelector('.progress-ring__circle');
// Calculer le radius du cercle
const radius = circle.r.baseVal.value;
// Calculer la circonférence de l'anneau
const circleCircumference = radius * 2 * Math.PI;

//Mettre le border style au cercle
circle.style.strokeDasharray = circleCircumference ;
// Offset enlever strokeDashArray commencera à montrer sa forme
circle.style.strokeDashoffset = circleCircumference;

//Plus le pourcentage monte on diminue le offset de circleCircum
function setProgress(prct) {
    // Sauvegarder dans une constante
    const offset = circleCircumference - (prct / 100) * circleCircumference;
    circle.style.strokeDashoffset = offset;
}
