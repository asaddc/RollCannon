module objects {
  export class Button extends objects.GameObject {
    // Variables
    // Constructor
    constructor(imageString: string, x: number = 0, y: number = 0) {
      super(imageString);

      // Default position
      this.x = x;
      this.y = y;
      // Set up event handlers
      this.cursor = "pointer";
      this.on("mouseover", this.MouseOver);
      this.on("mouseout", this.MouseOut);
    }
    // Methods
    // Event Handlers
    private MouseOver(): void {
      this.alpha = 0.85;
    }

    private MouseOut(): void {
      this.alpha = 1.0;
    }
  }
}
