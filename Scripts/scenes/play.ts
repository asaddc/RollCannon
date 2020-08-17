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
    public explosions: objects.Explosion[];

    // Constructor
    constructor() {
      super();
      this.explosions = [];
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
        let playerCollided = managers.Collision.Check(this.player, enemy, this.heartContainer);
        enemy.Update();

        this.player.toiletPapers.forEach(tp => {
          let bulletCollided = managers.Collision.Check(tp, enemy);

          if (enemy.isColliding && !enemy.isDead && !enemy.isExploding) {

            let explosion = new objects.Explosion(enemy.x, enemy.y);
            explosion.on("animationend", () => this.handleExplosion(explosion));
            this.explosions.push(explosion);

            managers.Game.score += 1000;

            this.addChild(explosion);
            enemy.isExploding = true;

            enemy.visible = false;
            tp.visible = false;
            enemy.isDead = true;

            // sets the coordinates to a location which cannot be reached by the player. so the enemy's "ghost" wont be able to kill him/her.
            // This will only work with the if statement in the enemy Update method, if the player is dead, then the player will stop moving as well.
            enemy.x = 0;
            enemy.y = 0;
            tp.x = 0;
            tp.y = 0;

            this.removeChild(tp);
            this.removeChild(enemy);

            managers.Game.score += 1000;
            this.sidebar.scoreLabel.text = `SCORE: ${managers.Game.score}`;
            this.removeEnemy(enemy);
          }
        });
      });
    }

    private removeEnemy(enemy: objects.Enemy) {
      this.enemies.forEach((e, index) => {
        if (e === enemy) {
          this.enemies.splice(index, 1);
        }
      });
    }

    private handleExplosion(explosion: objects.Explosion): void {
      explosion.stop();
      this.stage.removeChild(explosion);

      if (this.enemies.length == 0) {
        this.changeLevel();
      }
    }

    public changeLevel(): void {
      managers.Game.level++;
      if (managers.Game.level == 4) {
        managers.Game.currentScene = config.Scene.GAME_OVER
      }
      if (managers.Game.level == 2) {
        this.currentBackground = "outsideBG";
      }
      if (managers.Game.level == 3) {
        this.currentBackground = "outside2BG";
      }
      this.removeAllChildren();
      this.background = new objects.Background(this.currentBackground);
      this.Start();
    }

    public Main(): void {
      this.addChild(this.background);
      this.addChild(this.sidebar);
      this.addChild(this.heartContainer);
      this.enemies.forEach(enemy => {
        this.addChild(enemy);
      });
      this.addChild(this.player);
    }
  }
}
