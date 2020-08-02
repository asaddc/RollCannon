module objects {
  export class Player extends objects.GameObject {
    // Variables
    // Constructor
    private assetManager;
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "playerGunLeft");
      this.assetManager = assetManager;
      this.on("tick", this.Update);
      this.Start();
    }

    public Start(): void {
      this.x = 60;
      this.y = 130;
    }
    public Update(): void {
      this.Move();
      this.CheckBound();
    }
    public Reset(): void { }
    public Move(): void {
      // this.ChooseCorrectPlayerOrientation();

      // this.x = managers.Game.stage.mouseX;
      // this.y = managers.Game.stage.mouseY;

      if (managers.Game.keyboardManager.moveLeft)
      {
        this.x -= 1.5;
        this.image = this.assetManager.getResult("playerGunLeft");
      }
      if (managers.Game.keyboardManager.moveRight)
      {
        this.x += 1.5;
        this.image = this.assetManager.getResult("playerGunRight");
      }
      if (managers.Game.keyboardManager.moveDown)
      {
        this.y += 1.5;
      }
      if (managers.Game.keyboardManager.moveUp)
      {
        this.y -= 1.5;
      }
    }


    // private ChooseCorrectPlayerOrientation() {
    //   // Checks if the user moved to the right, then display the right facing player image
    //   // else show the left facing image
    //   if (managers.Game.stage.mouseX > this.x) {
    //     this.image = this.assetManager.getResult("playerGunRight");
    //   } else if (managers.Game.stage.mouseX < this.x) {
    //     this.image = this.assetManager.getResult("playerGunLeft");
    //   }
    // }

    private AddShoppingCartBoundary() {
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

    private AddAppleCounterBoundary() {
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
      if (this.x >= this.halfW + 140 && this.x < this.halfW + 155 && this.y > this.halfH + 100 && this.y < this.halfH + 200) {
        // I have collided with the right side of the apple counter
        this.x = this.halfW + 165;
      }
    }

    private AddTopRightProduceBoundary() {
      // TOP RIGHT PRODUCE
      if (this.x >= 420 - this.halfW && this.y < 350 - this.halfH) {
        // I have collided with the top-right produce boxes
        this.x = 420 - this.halfW;
      }
    }

    private AddProduceProtrusionBoundary() {
      // PRODUCE PROTRUSION
      if (this.x >= 275 - this.halfW && this.y > this.halfH + 215 && this.y < this.halfH + 240) {
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

    private AddBottomProductsBoundary() {
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

    private AddEdgesBoundary() {
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
      this.AddEdgesBoundary();
      this.AddShoppingCartBoundary();
      this.AddAppleCounterBoundary();
      this.AddTopRightProduceBoundary();
      this.AddProduceProtrusionBoundary();
      this.AddBottomProductsBoundary();
    }
  }
}
