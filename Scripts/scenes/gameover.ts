module scenes {
  export class GameOverScene extends objects.Scene {
    // Variables
    private gameoverLabel: objects.Label;
    private playButton: objects.Button;
    private background: objects.Background;
    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    public Start(): void {
      console.log("game over");
      this.background = new objects.Background(this.assetManager, "gameOverBG");
      console.log(this.background);
      this.background.x = -35;
      this.playButton = new objects.Button(this.assetManager, "redPlayBtn", objects.Game.canvas.clientWidth * 0.5 - 44, objects.Game.canvas.clientHeight * 0.5 + 100);
      this.playButton.scaleX = 2;
      this.playButton.scaleY = 2;
      this.playButton.on("click", this.PlayButtonClicked);
      this.Main();
    }
    public Update(): void { }
    public Main(): void {
      this.addChild(this.background);
      this.addChild(this.gameoverLabel);
      this.addChild(this.playButton);
    }

    private PlayButtonClicked(): void {
      objects.Game.currentScene = config.Scene.PLAY;
    }
  }
}
