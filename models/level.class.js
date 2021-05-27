class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 3100;
    endboss;
    bottles;

    constructor(enemies, clouds, backgroundObjects, endboss, bottles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.endboss = endboss;
        this.bottles = bottles;
    }
}