module objects {
    export class Explosion extends objects.GameObject {
        private explosionSFX: createjs.AbstractSoundInstance;

        constructor() {
            super("explosion");
            this.explosionSFX = createjs.Sound.play("explosion");


        }
    }
}