module scenes {
  export class GameOverScene extends objects.Scene {
    // Variables
    private gameoverLabel: objects.Label;
    private playButton: objects.Button;
    private background: objects.Background;
    // Constructor
    constructor() {
      super();

      this.Start();
    }

    public Start(): void {

      console.log("game over");
      this.background = new objects.Background("gameOverBG");
      console.log(this.background);
      this.background.x = -35;
      this.playButton = new objects.Button("redPlayBtn", managers.Game.canvas.clientWidth * 0.5, managers.Game.canvas.clientHeight * 0.5 + 100);
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
      managers.Game.level = 1;
      managers.Game.currentScene = config.Scene.PLAY;
    }
  }
}
