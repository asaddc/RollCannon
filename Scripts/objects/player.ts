module objects {
  export class Player extends objects.GameObject {
    // Variables
    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "playerGunLeft");
      this.on("tick", this.Update);
      //   this.addEventListener("click", this.Move);

      this.Start();
    }

    public Start(): void {
      this.x = 320;
      this.y = 350;
    }
    public Update(): void {
      this.Move();
      this.CheckBound();
    }
    public Reset(): void {}
    public Move(): void {
      this.x = objects.Game.stage.mouseX;
      this.y = objects.Game.stage.mouseY;
    }
    public CheckBound(): void {
      // Right boundary
      if (this.x >= 495 - this.halfW) {
        // I have collided with the right boundary
        this.x = 495 - this.halfW;
      }
      // Left boundary
      if (this.x <= this.halfW) {
        // I have collided with the left boundary
        this.x = this.halfW;
      }

      if (this.y >= 600 - this.halfH) {
        // I have collided with the bottom boundary
        this.y = 600 - this.halfH;
      }

      if (this.y <= this.halfH) {
        // I have collided with the top boundary
        this.y = this.halfH;
      }
    }
  }
}
