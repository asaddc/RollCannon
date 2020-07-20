module objects {
    export class HeartContainer extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(
            assetManager: createjs.LoadQueue,
            imageString: string,
            x: number = 0,
            y: number = 0
        ) {
            super(assetManager.getResult(imageString));
            this.x = x;
            this.y = y;
        }
    }
}
