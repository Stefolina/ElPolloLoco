class Cloud extends MovableObject {
    y = 10;
    width = 400;
    height = 350;

    constructor(){
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
    
        this.x = Math.random() * 500; //Zahl zwischen 200 und 700
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}