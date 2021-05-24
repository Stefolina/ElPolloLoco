let canvas;
let world;
let keyboard = new Keyboard();
let bg_sound = new Audio('audio/bg1.mp3');

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
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