module objects {
  export class Background extends createjs.Bitmap {
    constructor(assetManager: createjs.LoadQueue, imageString: string) {
      super(assetManager.getResult(imageString));
    }
  }
}
