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
            _this.ammoOnScreen = false;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("play");
            managers.Game.canvas.style.cursor = "none";
            this.background = new objects.Background(this.assetManager, "supermarketBG");
            this.sidebar = new objects.Sidebar();
            this.player = new objects.Player(this.assetManager);
            this.heartContainer = new objects.HeartContainer(this.assetManager);
            this.enemies = new Array();
            for (var i = 0; i < this.ENEMIES_NUM; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.heartContainer.Update();
            this.enemies.forEach(function (enemy) {
                enemy.Update();
                managers.Collision.Check(_this.player, enemy, _this.heartContainer);
            });
            // if the user presses the shoot button, then create a new bullet
            if (managers.Game.keyboardManager.shoot) {
                // If there is not a bullet on screen, create ammo
                if (!this.ammoOnScreen) {
                    var ammo = new objects.Ammo(this.assetManager, this.player.x, this.player.y - 10, "toiletPaper");
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