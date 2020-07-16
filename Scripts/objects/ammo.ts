module objects {
  export class Ammo extends createjs.Bitmap {
    // Variables
    // Constructor
    constructor(
      assetManager: createjs.LoadQueue,
      x: number = 0,
      y: number = 0,
      assetId: string
    ) {
      super(assetManager.getResult(assetId));

      // Default position
      this.x = x;
      this.y = y;
    }
  }
}
