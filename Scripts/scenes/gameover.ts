module scenes {
  export class GameOverScene extends objects.Scene {
    // Variables
    private gameoverLabel: objects.Label;
    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    public Start(): void {
      console.log("game over");
      this.gameoverLabel = new objects.Label("GAME OVER", "36pt", "Arial", "#FFF", objects.Game.canvas.clientWidth * 0.3, objects.Game.canvas.clientHeight * 0.5);
      this.Main();
    }
    public Update(): void {}
    public Main(): void {
      this.addChild(this.gameoverLabel);
    }
  }
}
