module objects {
  export class Background extends createjs.Bitmap {
    constructor(imageString: string) {
      super(managers.Game.assetManager.getResult(imageString));
    }
  }
}
