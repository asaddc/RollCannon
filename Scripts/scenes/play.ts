module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private sidebar: objects.Sidebar;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    public Start(): void {
      console.log("play");

      this.background = new objects.Background(this.assetManager);
      this.sidebar = new objects.Sidebar();

      this.Main();
    }
    public Update(): void {}
    public Main(): void {
      this.addChild(this.background);
      this.addChild(this.sidebar.levelLabel);
      this.addChild(this.sidebar.scoreLabel);
      this.addChild(this.sidebar.livesLabel);
    }
  }
}
