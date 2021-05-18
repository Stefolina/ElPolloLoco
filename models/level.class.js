class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2900;
    endboss;


    constructor(enemies, clouds, backgroundObjects, endboss) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;
    }
}