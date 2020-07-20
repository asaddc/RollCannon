module scenes {
  export class MainMenuScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private playButton: objects.Button;
    private toiletPaperImage: objects.ToiletPaper;
    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    public Start(): void {
      this.playButton = new objects.Button(this.assetManager, "redPlayBtn", objects.Game.canvas.clientWidth * 0.5 - 44, objects.Game.canvas.clientHeight * 0.5 + 100);
      this.playButton.scaleX = 2;
      this.playButton.scaleY = 2;
      this.background = new objects.Background(this.assetManager, "mainBG");
      this.toiletPaperImage = new objects.ToiletPaper(this.assetManager, 175, 50, "toiletPaper");
      this.playButton.on("click", this.PlayButtonClicked);
      this.Main();
    }

    public Update(): void { }
    public Main(): void {
      this.addChild(this.background);
      this.addChild(this.playButton);
      this.addChild(this.toiletPaperImage);
    }

    public PlayButtonClicked(): void {
      objects.Game.currentScene = config.Scene.PLAY;
    }
  }
}
