module objects {
    export class HeartContainer extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(
            assetManager: createjs.LoadQueue,
            imageString: string
        ) {
            super(assetManager.getResult(imageString));
            // these coordinates are exactly where the heart container should reside for now
            // under the "Lives: " label.
            this.x = 503;
            this.y = 170;
        }
    }
}
