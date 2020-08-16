module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private background: objects.Background;
    private currentBackground: string = "supermarketBG";
    private sidebar: objects.Sidebar;
    private player: objects.Player;
    private enemies: objects.Enemy[];
    private heartContainer: objects.HeartContainer;
    private readonly ENEMIES_NUM: number = 3;
    private bgm: createjs.AbstractSoundInstance;

    // Constructor
    constructor() {
      super();      
      this.Start();
    }

    public Start(): void {
      managers.Game.canvas.style.cursor = "none";

      this.background = new objects.Background(this.currentBackground);

      this.sidebar = new objects.Sidebar();
      this.player = new objects.Player();
      this.heartContainer = new objects.HeartContainer();
      managers.Game.heartContainer = this.heartContainer;
      this.enemies = new Array<objects.Enemy>();
      // Add enemies to array
      for (let i = 0; i < this.ENEMIES_NUM; i++) {
        this.enemies[i] = new objects.Enemy();
      }

      createjs.Sound.stop();
      this.bgm = createjs.Sound.play("playbgm");
      this.bgm.loop = -1;

      this.Main();
    }
    public Update(): void {
      this.heartContainer.Update();
      this.enemies.forEach(enemy => {
        enemy.Update();
        managers.Collision.Check(this.player, enemy, this.heartContainer);

        this.player.toiletPapers.forEach(tp => {
          managers.Collision.Check(tp, enemy);
          if (enemy.isColliding) {
            this.removeChild(tp);
            this.removeChild(enemy);
            this.enemies.pop();
            managers.Game.score += 1000;
          }
        })
      });

      if (this.enemies.length == 0) {
        this.changeLevel();
      }
    }

    public changeLevel():void{
      managers.Game.level++;
      if (managers.Game.level == 4) {
        managers.Game.currentScene = config.Scene.GAME_OVER
      }
      if (managers.Game.level == 2) {
        this.currentBackground = "outsideBG";
      }
      this.removeAllChildren();
      this.background = new objects.Background(this.currentBackground);
      this.Start();
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
