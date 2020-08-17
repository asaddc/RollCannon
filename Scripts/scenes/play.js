var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.currentBackground = "supermarketBG";
            _this.ENEMIES_NUM = 3;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            managers.Game.canvas.style.cursor = "none";
            this.background = new objects.Background(this.currentBackground);
            this.sidebar = new objects.Sidebar();
            this.player = new objects.Player();
            this.heartContainer = new objects.HeartContainer();
            managers.Game.heartContainer = this.heartContainer;
            this.enemies = new Array();
            // Add enemies to array
            for (var i = 0; i < this.ENEMIES_NUM; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("playbgm");
            this.bgm.loop = -1;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.heartContainer.Update();
            this.enemies.forEach(function (enemy) {
                var playerCollided = managers.Collision.Check(_this.player, enemy, _this.heartContainer);
                enemy.Update();
                _this.player.toiletPapers.forEach(function (tp) {
                    var bulletCollided = managers.Collision.Check(tp, enemy);
                    if (enemy.isColliding && !enemy.isDead && !enemy.isExploding) {
                        _this.explosion = new objects.Explosion(enemy.x, enemy.y);
                        _this.explosion.on("animationend", function () { return _this.handleExplosion(enemy); });
                        _this.addChild(_this.explosion);
                        enemy.isExploding = true;
                        enemy.visible = false;
                        tp.visible = false;
                        enemy.isDead = true;
                        // sets the coordinates to a location which cannot be reached by the player. so the enemies "ghost" wont be able to kill him/her.
                        // This will only work with the if statement in the enemy Update method, if the player is dead, then the player will stop moving as well.
                        enemy.x = 0;
                        enemy.y = 0;
                        tp.x = 0;
                        tp.y = 0;
                        _this.removeChild(tp);
                        _this.removeChild(enemy);
                        managers.Game.score += 1000;
                        _this.sidebar.scoreLabel.text = "SCORE: " + managers.Game.score;
                        _this.enemies.forEach(function (e, index) {
                            if (e === enemy) {
                                _this.enemies.splice(index, 1);
                            }
                        });
                    }
                });
            });
            if (this.enemies.length == 0) {
                this.changeLevel();
            }
        };
        PlayScene.prototype.handleExplosion = function (enemy) {
            this.explosion.stop();
            this.stage.removeChild(this.explosion);
        };
        PlayScene.prototype.changeLevel = function () {
            managers.Game.level++;
            if (managers.Game.level == 4) {
                managers.Game.currentScene = config.Scene.GAME_OVER;
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
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.sidebar.levelLabel);
            this.addChild(this.sidebar.scoreLabel);
            this.addChild(this.sidebar.livesLabel);
            this.addChild(this.heartContainer);
            this.enemies.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this.player);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map