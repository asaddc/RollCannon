module objects {
  export class Ammo extends objects.GameObject {
    // Variables
    public collided: boolean = false;
    // Constructor
    constructor(x: number = 0, y: number = 0, assetId: string = "") {
      super(assetId);
      this.x = x;
      this.y = y;
    }
  }
}
