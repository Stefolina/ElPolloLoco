let canvas;
let world;
let keyboard = new Keyboard();
let bg_sound = new Audio('audio/bg1.mp3');
let intro_sound = new Audio('audio/introsound.mp3');
let gameover_sound = new Audio('audio/gameover.mp3');
let hurting_sound = new Audio('audio/hurt.mp3');

function startGame() {  
    document.getElementById('start').classList.remove('start');
    document.getElementById('start').classList.add('d-none');
    document.getElementById('canvasframe').classList.remove('d-none');
    document.getElementById('canvasframe').classList.add('canvasframe');

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
    intro_sound.play();
    bg_sound.play();
}
 
function fullscreen() {
    canvas.requestFullscreen();
}

function mute() {
    bg_sound.pause();
}

function soundOn() {
    bg_sound.play();
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
});