module objects {
    export class HeartContainer extends objects.GameObject {
        // Variables
        private readonly MAX_HEALTH_SIZE: number = 3;
        public currentHealth: number;
        // Constructor
        constructor() {
            super("heartFull");
            // these coordinates are exactly where the heart container should reside for now
            // under the "Lives: " label.
            this.x = 530;
            this.y = 210;
            this.scaleX = 0.5;
            this.scaleY = 0.5;

            this.currentHealth = this.MAX_HEALTH_SIZE;
        }


        public Update(): void {
            // console.log("CURRENT HEALTH", this.currentHealth);
            if (this.currentHealth === 2) {
                // this.image = managers.Game.assetManager.getResult("heartTwoThirds") as HTMLImageElement;
                this.gotoAndStop("heartTwoThirds");
            } else if (this.currentHealth === 1) {
                // this.image = this.assetManager.getResult("heartOneThird") as HTMLImageElement;
                this.gotoAndStop("heartOneThird");
            } else if (this.currentHealth <= 0) {
                managers.Game.currentScene = config.Scene.GAME_OVER;
            }
        }
    }
}
