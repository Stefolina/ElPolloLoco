class ThrowableObject extends MovableObject {

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
    }
}