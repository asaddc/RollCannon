module objects {
  export class ToiletPaper extends createjs.Bitmap {
    // Variables
    // Constructor
    constructor(
      assetManager: createjs.LoadQueue,
      x: number = 0,
      y: number = 0
    ) {
      super(assetManager.getResult("toiletPaper"));

      // Default position
      this.x = x;
      this.y = y;
    }
  }
}
