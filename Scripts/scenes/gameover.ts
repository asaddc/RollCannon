module scenes {
  export class GameOverScene extends objects.Scene {
    // Variables
    
    // Constructor
    constructor(assetManager:createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    public Start():void{

      this.Main();
    }
    public Update():void{}
    public Main():void{}
  }
}