module objects {
  export class ToiletPaper extends objects.Ammo {
    // Variables
    // Constructor
    constructor(
      assetManager:createjs.LoadQueue,
      x:number = 0,
      y:number = 0,
      assetId:string = "toiletPaper"
    ) {
      super(assetManager, x, y, assetId);

      /// do something unique for TP
    }
  }
}
