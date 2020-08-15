module objects {
  export class ToiletPaper extends objects.Ammo {
    // Variables
    // Constructor
    constructor(x: number = 0, y: number = 0, assetId: string = "toiletPaper") {
      super(x, y, assetId);


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
      this.x += this.speedX;
    }
  }
}
