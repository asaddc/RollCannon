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
            _this.ENEMIES_NUM = 5;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("play");
            this.background = new objects.Background(this.assetManager);
            this.sidebar = new objects.Sidebar();
            this.player = new objects.Player(this.assetManager);
            this.enemies = new Array();
            for (var i = 0; i < this.ENEMIES_NUM; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this.enemies.forEach(function (enemy) {
                enemy.Update();
                // managers.Collision.Check(this.player, enemy);
            });
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.sidebar.levelLabel);
            this.addChild(this.sidebar.scoreLabel);
            this.addChild(this.sidebar.livesLabel);
            this.addChild(this.player);
            this.enemies.forEach(function (enemy) {
                _this.addChild(enemy);
            });
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map