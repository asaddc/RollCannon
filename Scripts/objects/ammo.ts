module objects {
  export class Ammo extends createjs.Bitmap {
    // Variables
    // Constructor
    constructor(
      assetManager: createjs.LoadQueue,
      x: number = 0,
      y: number = 0,
      assetId:string=""
    ) {
      super(assetManager.getResult(assetId));

      // Default position
      this.x = x;
      this.y = y;
    }

    public Fire(facingLeft:boolean, x:number, y:number):void {
      if (managers.Game.keyboardManager.shoot)
      this.x = x;
      this.y = y;
      {
        if (facingLeft) {
          this.visible = true;
          this.x -= 10.5;
          console.log("SHOOT");
        }
        else {
          this.x += 10.5;
          this.visible = true;
          console.log("SHOOT RIGHT");
        }
      }
    }
  }
}
