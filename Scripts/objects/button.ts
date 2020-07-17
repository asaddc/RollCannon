module objects {
  export class Button extends createjs.Bitmap {
    // Variables
    // Constructor
    constructor(
      assetManager: createjs.LoadQueue,
      imageString: string,
      x: number = 0,
      y: number = 0
    ) {
      super(assetManager.getResult(imageString));

      // Default position
      this.x = x;
      this.y = y;

      createjs.Sound.registerSound("../Assets/waterdrop.mp3", "waterdrop");

      // Set up event handlers
      this.on("mouseover", this.MouseOver);
      this.on("mouseout", this.MouseOut);
    }
    // Methods
    // Event Handlers
    private MouseOver(): void {
      this.alpha = 0.85;
      createjs.Sound.play("waterdrop");
    }

    private MouseOut(): void {
      this.alpha = 1.0;
    }
  }
}
