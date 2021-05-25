class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 3100;
    endboss;

    constructor(enemies, clouds, backgroundObjects, endboss, placedBottles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;
    }
}