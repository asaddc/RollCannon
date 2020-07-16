module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private background:objects.Background;
    
    // Constructor
    constructor(assetManager:createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    public Start():void{
      this.background = new objects.Background(this.assetManager);
      
      this.Main();
    }
    public Update():void{}
    public Main():void{}

  }
}