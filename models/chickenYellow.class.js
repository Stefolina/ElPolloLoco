class ChickenYellow extends MovableObject {

    height = 65;
    width = 60;
    y = 360;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png',
    ];

    constructor(){
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 400 + Math.random() * 2900; //Zahl zwischen 200 und 700
        this.speed = 2.2 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000/ 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 180);
    }
}