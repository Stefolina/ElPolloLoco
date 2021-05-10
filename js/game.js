let canvas;
let ctx;
let character = new character();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    console.log('My charackter is ', character)
    
}