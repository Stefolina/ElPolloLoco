class Cloud extends MovableObject {
    y = 10;
    width = 400;
    height = 350;

    constructor(){
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
    
        this.x = 200 + Math.random() * 2900; //Zahl zwischen 200 und 700
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}