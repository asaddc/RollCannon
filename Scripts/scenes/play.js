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
            _this.enemiesKilled = 0;
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
                enemy.Update();
                managers.Collision.Check(_this.player, enemy, _this.heartContainer);
                _this.player.toiletPapers.forEach(function (tp) {
                    managers.Collision.Check(tp, enemy);
                    if (enemy.isColliding) {
                        _this.removeChild(tp);
                        _this.removeChild(enemy);
                        _this.enemies.pop();
                        managers.Game.score += 1000;
                    }
                });
                if (enemy.isColliding) {
                    _this.enemiesKilled++;
                }
            });
            if (this.enemies.length == 0) {
                this.enemiesKilled = 0;
                this.changeLevel();
            }
        };
        PlayScene.prototype.changeLevel = function () {
            managers.Game.level++;
            if (managers.Game.level == 4) {
                managers.Game.currentScene = config.Scene.GAME_OVER;
            }
            if (managers.Game.level == 2) {
                this.currentBackground = "outsideBG";
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
            // this.addChild(this.player.ammo);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map