class Bottle extends DrawableObject {
    height = 100;
    width = 90;
    y = 360;

    constructor() {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.x = 400 + Math.random() * 2000;
    }

}