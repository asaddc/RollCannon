module scenes {
  export class MainMenuScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private toiletPaper: objects.ToiletPaper;
    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    public Start(): void {
      this.background = new objects.Background(this.assetManager);
      this.toiletPaper = new objects.ToiletPaper(this.assetManager, 300, 200);
      this.Main();
    }
    
    public Update(): void {}
    public Main(): void {
      this.addChild(this.background);
    }
  }
}
