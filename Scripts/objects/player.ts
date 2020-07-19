module objects {
  export class Player extends objects.GameObject {
    // Variables
    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "playerGunLeft");
      this.on("tick", this.Update);

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
    public Reset(): void { }
    public Move(): void {
      this.x = objects.Game.stage.mouseX;
      this.y = objects.Game.stage.mouseY;
    }

    private addShoppingCartBoundary() {
      // SHOPPING CART
      if (this.x > this.halfW + 239 && this.x < this.halfW + 300 && this.y < this.halfH + 100) {
        // I have collided with the left side of the shopping cart
        this.x = this.halfW + 239;
      }

      if (this.x > this.halfW + 300 && this.x < this.halfW + 340 && this.y < this.halfH + 100) {
        // I have collided with the right  side of the shopping cart
        this.x = this.halfW + 340;
      }

      if (this.x > this.halfW + 240 && this.x < this.halfW + 339 && this.y < this.halfH + 110) {
        // I have collided with the bottom of the shopping cart
        this.y = this.halfH + 110;
      }
    }

    private addAppleCounterBoundary() {
      // APPLE COUNTER
      if (this.x >= this.halfW + 70 && this.x <= this.halfW + 160 && this.y < this.halfH + 120) {
        // I have collided with the top of the apple counter 
        this.y = this.halfH + 50;
      }

      if (this.x >= this.halfW + 70 && this.x <= this.halfW + 160 && this.y > this.halfH + 180 && this.y < this.halfH + 200) {
        // I have collided with the bottom of the apple counter 
        this.y = this.halfH + 200;
      }

      if (this.x >= this.halfW + 70 && this.x <= this.halfW + 140 && this.y > this.halfH + 120 && this.y < this.halfH + 200) {
        // I have collided with the left side of the apple counter 
        this.x = this.halfW + 60;
      }
      if (this.x >= this.halfW + 140 && this.x < this.halfW + 180 && this.y > this.halfH + 100 && this.y < this.halfH + 200) {
        // I have collided with the right side of the apple counter 
        this.x = this.halfW + 165;
      }
    }

    private addTopRightProduceBoundary() {
      // TOP RIGHT PRODUCE
      if (this.x >= 420 - this.halfW && this.y < 350 - this.halfH) {
        // I have collided with the top-right produce boxes
        this.x = 420 - this.halfW;
      }
    }

    private addProduceProtrusionBoundary() {
      // PRODUCE PROTRUSION
      if (this.x >= 275 - this.halfW && this.y > this.halfH + 200 && this.y < this.halfH + 240) {
        // I have collided with the protruding produce from the top
        this.y = this.halfH + 210;
      }

      if (this.x >= 275 - this.halfW && this.y > this.halfH + 270 && this.y < this.halfH + 330) {
        // I have collided with the protruding produce from the bottom
        this.y = this.halfH + 330;
      }

      if (this.x >= 275 - this.halfW && this.y > this.halfH + 220 && this.y < this.halfH + 320) {
        // I have collided with the protruding produce from the left
        this.x = 275 - this.halfW;
      }
    }

    private addBottomProductsBoundary() {
      // BOTTOM PRODUCTS
      if (this.x >= this.halfW + 200 && this.y >= 540 - this.halfH) {
        this.y = 540 - this.halfH;
      }

      // LEFT SHELVES
      if (this.x < this.halfW + 125 && this.y > this.halfH + 190 && this.y <= this.halfH + 229) {
        // I have collided with the left shelves from the top
        this.y = this.halfH + 190;
      }

      if (this.x < this.halfW + 130 && this.y > this.halfH + 230 && this.y < this.halfH + 330) {
        // I have collided with the left shelves from the top-right
        this.x = this.halfW + 130;
      }

      if (this.x < this.halfW + 35 && this.y >= this.halfH + 336 && this.y <= this.halfH + 470) {
        // I have collided with the left shelves from the right
        this.x = this.halfW + 35;
      }
    }

    private addEdgesBoundary() {
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

      if (this.y <= this.halfH + 50) {
        // I have collided with the top boundary
        this.y = this.halfH + 50;
      }
    }
    public CheckBound(): void {

      this.addEdgesBoundary();
      this.addShoppingCartBoundary();
      this.addAppleCounterBoundary();
      this.addTopRightProduceBoundary();
      this.addProduceProtrusionBoundary();
      this.addBottomProductsBoundary();
    }
  }
}
