module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private sidebar: objects.Sidebar;
    private player: objects.Player;
    private enemies: objects.Enemy[];
    private readonly ENEMIES_NUM: number = 5;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    public Start(): void {
      console.log("play");

      this.background = new objects.Background(this.assetManager);
      this.sidebar = new objects.Sidebar();
      this.player = new objects.Player(this.assetManager);

      this.enemies = new Array<objects.Enemy>();
      for (let i = 0; i < this.ENEMIES_NUM; i++) {
        this.enemies[i] = new objects.Enemy(this.assetManager);
      }

      this.Main();
    }
    public Update(): void {
      this.enemies.forEach(enemy => {
        enemy.Update();
        // managers.Collision.Check(this.player, enemy);
      })
    }

    public Main(): void {
      this.addChild(this.background);
      this.addChild(this.sidebar.levelLabel);
      this.addChild(this.sidebar.scoreLabel);
      this.addChild(this.sidebar.livesLabel);
      this.addChild(this.player);
      this.enemies.forEach(enemy => {
        this.addChild(enemy);
      })
    }
  }
}
