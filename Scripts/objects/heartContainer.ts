module objects {
    export class HeartContainer extends createjs.Bitmap {
        // Variables
        private readonly MAX_HEALTH_SIZE: number = 3;
        public currentHealth: number;
        private assetManager: createjs.LoadQueue;
        // Constructor
        constructor(
            assetManager: createjs.LoadQueue
        ) {
            super(assetManager.getResult("heartFull"));
            // these coordinates are exactly where the heart container should reside for now
            // under the "Lives: " label.
            this.x = 570;
            this.y = 120;
            this.scaleX = 0.5;
            this.scaleY = 0.5;

            this.assetManager = assetManager;
            this.currentHealth = this.MAX_HEALTH_SIZE;
        }


        public Update(): void {
            // console.log("CURRENT HEALTH", this.currentHealth);
            if (this.currentHealth === 2) {
                this.image = this.assetManager.getResult("heartTwoThirds") as HTMLImageElement;
            } else if (this.currentHealth === 1) {
                this.image = this.assetManager.getResult("heartOneThird") as HTMLImageElement;
            } else if (this.currentHealth <= 0) {
                managers.Game.currentScene = config.Scene.GAME_OVER;
            }
        }
    }
}
