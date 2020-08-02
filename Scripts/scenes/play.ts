module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private sidebar: objects.Sidebar;
    private player: objects.Player;
    private enemies: objects.Enemy[];
    private heartContainer: objects.HeartContainer;
    private readonly ENEMIES_NUM: number = 3;
    private ammoOnScreen: boolean = false;
    private ammo: objects.Ammo;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    public Start(): void {
      console.log("play");
      managers.Game.canvas.style.cursor = "none";

      this.background = new objects.Background(this.assetManager, "supermarketBG");
      this.sidebar = new objects.Sidebar();
      this.player = new objects.Player(this.assetManager);
      this.heartContainer = new objects.HeartContainer(this.assetManager);
      this.enemies = new Array<objects.Enemy>();
      for (let i = 0; i < this.ENEMIES_NUM; i++) {
        this.enemies[i] = new objects.Enemy(this.assetManager);
      }

      this.Main();
    }
    public Update(): void {
      this.heartContainer.Update();
      this.enemies.forEach(enemy => {
        enemy.Update();
        managers.Collision.Check(this.player, enemy, this.heartContainer);
      });

      // if the user presses the shoot button, then create a new bullet
      if (managers.Game.keyboardManager.shoot) {
        // If there is not a bullet on screen, create ammo
        if (!this.ammoOnScreen) {
          let ammo = new objects.Ammo(this.assetManager, this.player.x, this.player.y - 10, "toiletPaper");
          ammo.scaleX = 0.05;
          ammo.scaleY = 0.05;

          this.addChild(ammo);

          this.ammoOnScreen = true;
          this.ammo = ammo;

          // add to the stage, and then every tick move it to the end of the canvas
          createjs.Ticker.on("tick", ammo.Update.bind(ammo, this.player.facingLeft));
          
          // setInterval(() => {
          //   ammo = null;
          //   this.removeChildAt(9);
          // }, 2000);

        }
        // If ammo reaches end, remove ammo
        if (this.ammo.collided) {
          this.removeChildAt(9);
          this.removeChildAt(9);
          this.ammoOnScreen = false;
        }
      }
    }

    public Main(): void {
      this.addChild(this.background);
      this.addChild(this.sidebar.levelLabel);
      this.addChild(this.sidebar.scoreLabel);
      this.addChild(this.sidebar.livesLabel);
      this.addChild(this.heartContainer);
      this.enemies.forEach(enemy => {
        this.addChild(enemy);
      });
      this.addChild(this.player);
      // this.addChild(this.player.ammo);
    }
  }
}
