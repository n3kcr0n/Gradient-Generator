const hextext = document.querySelector('.hex-value_text');
const color1 = document.querySelector('.c1');
const color2 = document.querySelector('.c2');
const body = document.getElementById('bodyId');



function getColor() {
    let c1 = color1.value;
    let c2 = color2.value;
    hextext.textContent = `Right:${c1} || Left: ${c2};`;
}

function setColor() {
    body.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`;
}

color1.addEventListener('input', setColor);
color2.addEventListener('input', setColor);