module scenes {
  export class MainMenuScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private playButton: objects.Button;
    private toiletPaperImage: objects.ToiletPaper;
    private bgm: createjs.AbstractSoundInstance;
    private logo: createjs.Bitmap;
    // Constructor
    constructor() {
      super();
      this.Start();
    }

    public Start(): void {
      // Play Button
      this.playButton = new objects.Button("redPlayBtn", managers.Game.canvas.clientWidth * 0.5, managers.Game.canvas.clientHeight * 0.5 + 100);
      this.playButton.scaleX = 2;
      this.playButton.scaleY = 2;
      this.playButton.on("click", this.PlayButtonClicked);

      // Background & Large toilet paper image
      this.background = new objects.Background("mainBG");
      this.toiletPaperImage = new objects.ToiletPaper(-345, 50, "smallToiletPaper");

      // Left to right translate large image
      createjs.Tween.get(this.toiletPaperImage, { loop: -1 })
        .to({ x: this.toiletPaperImage.x, y: this.toiletPaperImage.y }, 1500)
        .wait(1000)
        .to({ x: 800, rotation: -360 }, 2500)
        .wait(1500)
        .to({ x: this.toiletPaperImage.x, rotation: 360 }, 2500);

      // Logo
      this.logo = new createjs.Bitmap(managers.Game.assetManager.getResult("title"));
      this.logo.x = 234.5;
      this.logo.y = -130;
      // Fade in
      createjs.Tween.get(this.logo)
        .to({ x: this.logo.x, y: 150 }, 1500, createjs.Ease.bounceOut);

      // Background music
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
