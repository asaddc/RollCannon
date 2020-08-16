module objects {
  export class ToiletPaper extends objects.Ammo {
    // Variables
    // Constructor
    private isMovingRight: boolean;
    constructor(x: number = 0, y: number = 0, assetId: string = "toiletPaper") {
      super(x, y, assetId);
      this.isMovingRight = undefined;

      /// do something unique for TP
    }

    public Update(): void {
      this.speedX = 10;
      this.speedY = 0;
      this.Move();
    }

    public Reset(): void {
      this.x = -5000;
      this.y = -5000;
    }

    public Move(): void {
      // If the toilet paper hasn't determined what way it's moving then set it to the way the user is facing.
      // this solves the bug where if the user turns to the opposite direction, all the bullets (TP) turns around too.
      if (this.isMovingRight === undefined) {
        this.isMovingRight = managers.Game.isFacingRight;
      }

      (this.isMovingRight) ? this.x += this.speedX : this.x -= this.speedX;
    }
  }
}
