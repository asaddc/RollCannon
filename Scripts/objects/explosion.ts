module objects {
    export class Explosion extends objects.GameObject {
        private explosionSFX: createjs.AbstractSoundInstance;

        constructor(x: number, y: number) {
            super("explosion");
            this.explosionSFX = createjs.Sound.play("explosion");

            this.x = x;
            this.y = y;
        }
    }
}