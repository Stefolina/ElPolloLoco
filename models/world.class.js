class World { 
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusbarLife = new StatusbarLife();
    statusbarBottles = new StatusbarBottles();
    throwableObjects = [];
    placedBottles = [1000,1340,1680,2000,2400];

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkCollisions() {
        this.level.enemies.forEach( (enemy) => {
            if( this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbarLife.setPercentage(this.character.energy);
                hurting_sound.play();
            }
        });
    }

    checkThrowObjects() {
        if (this.keyboard.UP) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x,0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x,0); //Back
        // ------- space for fixed objects -------
        this.addToMap(this.statusbarBottles);
        this.addToMap(this.statusbarLife);
        this.ctx.translate(this.camera_x,0); //Forward

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        /*this.drawBottles();*/
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x,0);

        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if(mo.otherDirection){
            this.flipImage(mo);
        }

        mo.draw(this.ctx);

        if(mo.otherDirection){
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width,0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    /*drawBottles() {
        for(let i = 0; i < placedBottles.length; i++) {
            let bottle_x = placedBottles[i];
            addObjectsToMap('img/7.Marcadores/Icono/Botella.png', bottle_x, 370, 1, 1);
        }
    }*/
}

