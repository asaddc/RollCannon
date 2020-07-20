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
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.ENEMIES_NUM = 3;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("play");
            objects.Game.canvas.style.cursor = "none";
            this.background = new objects.Background(this.assetManager, "supermarketBG");
            this.sidebar = new objects.Sidebar();
            this.player = new objects.Player(this.assetManager);
            this.heartContainer = new objects.HeartContainer(this.assetManager, "heartFull");
            this.enemies = new Array();
            for (var i = 0; i < this.ENEMIES_NUM; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.enemies.forEach(function (enemy) {
                enemy.Update();
                if (enemy.x > _this.player.x - 30 && enemy.x < _this.player.x + 30 && enemy.y > _this.player.y - 50 && enemy.y < _this.player.y + 50) {
                    objects.Game.currentScene = config.Scene.GAME_OVER;
                }
            });
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