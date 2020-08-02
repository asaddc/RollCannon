module objects {
  export class Ammo extends createjs.Bitmap {
    // Variables
    // Constructor
    constructor(
      assetManager: createjs.LoadQueue,
      x: number = 0,
      y: number = 0,
      assetId: string = ""
    ) {
      super(assetManager.getResult(assetId));
      this.x = x;
      this.y = y;

    }

    public Fire(facingLeft: boolean, x: number, y: number): void {
      if (managers.Game.keyboardManager.shoot)
        this.x = x;
      this.y = y;
      {
        if (facingLeft) {
          this.visible = true;
          this.x -= 10.5;
          console.log("SHOOT LEFT");
        }
        else {
          this.x += 10.5;
          this.visible = true;
          console.log("SHOOT RIGHT");
        }
      }
    }

    // Asad's temporary "Fire" method
    public Update(isFacingLeft: boolean) {
      console.log("update ammo x", this.x);
      (isFacingLeft) ? this.x -= 10.5 : this.x += 10.5;
      console.log("update ammo x after", this.x);
    }
  }
}
