module scenes {
  export class MainMenuScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private playButton: objects.Button;
    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    public Start(): void {
      this.playButton = new objects.Button(this.assetManager, "redPlayBtn", objects.Game.canvas.clientWidth * 0.5 - 44, objects.Game.canvas.clientHeight * 0.5);
      this.playButton.scaleX = 2;
      this.playButton.scaleY = 2;

      this.playButton.on("click", this.playButtonClicked);

      this.Main();
    }
    
    public Update(): void {}
    public Main(): void {
      this.addChild(this.playButton);
    }

    public playButtonClicked():void{
      objects.Game.currentScene = config.Scene.PLAY;
    }
  }
}
