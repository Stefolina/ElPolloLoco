let canvas;
let character = new Image();
let ctx;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    character.src = '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png';

    ctx.drawImage(character,20,20,50,150);
}