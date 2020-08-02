module scenes {
  export class MainMenuScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private playButton: objects.Button;
    private toiletPaperImage: objects.ToiletPaper;
    private bgm: createjs.AbstractSoundInstance;
    private logo: createjs.Bitmap;
    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    public Start(): void {
      this.playButton = new objects.Button(this.assetManager, "redPlayBtn", managers.Game.canvas.clientWidth * 0.5 - 44, managers.Game.canvas.clientHeight * 0.5 + 100);
      this.playButton.scaleX = 2;
      this.playButton.scaleY = 2;
      this.playButton.on("click", this.PlayButtonClicked);

      this.background = new objects.Background(this.assetManager, "mainBG");
      this.toiletPaperImage = new objects.ToiletPaper(this.assetManager, -345, 50, "toiletPaper");

      this.logo = new createjs.Bitmap(this.assetManager.getResult("title"));
      this.logo.alpha = 0;
      this.logo.x = 234.5;
      this.logo.y = 150;
      createjs.Tween.get(this.logo).to({alpha: 1}, 2000);
      createjs.Tween.get(this.toiletPaperImage, {loop: -1}).to({x:this.toiletPaperImage.x, y: this.toiletPaperImage.y}, 1500).wait(1000).to({x: 800}, 5000);

      this.bgm = createjs.Sound.play("titlebgm");
      this.bgm.loop = -1;

      this.Main();
    }

    public Update(): void { }
    public Main(): void {
      this.addChild(this.background);
      this.addChild(this.playButton);
      this.addChild(this.toiletPaperImage);
      this.addChild(this.logo);
    }

    public PlayButtonClicked(): void {
      createjs.Sound.stop();
      managers.Game.currentScene = config.Scene.PLAY;
    }
  }
}
