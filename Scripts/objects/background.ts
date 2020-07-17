module objects {
  export class Background extends createjs.Bitmap {
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager.getResult("supermarketBG"));
    }
  }
}
