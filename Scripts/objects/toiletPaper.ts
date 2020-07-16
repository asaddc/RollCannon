module objects {
  export class ToiletPaper extends Ammo {
    // Variables
    // Constructor
    constructor(
      assetManager: createjs.LoadQueue,
      x: number = 0,
      y: number = 0,
      assetId: string = "toiletPaper"
    ) {
      super(assetManager, x, y, assetId);

      // Default position
      this.x = x;
      this.y = y;
    }
  }
}
