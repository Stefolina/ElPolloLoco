class ThrowableObject extends MovableObject {
    throwing_sound = new Audio('audio/glass.mp3');
    collecting_sound = new Audio('audio/bottle.mp3');

    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 90;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();

        setInterval( () => {
            this.x += 10;
        },30);

       this.throwing_sound.play();
    }
}