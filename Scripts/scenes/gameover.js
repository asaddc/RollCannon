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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        GameOverScene.prototype.Start = function () {
            console.log("game over");
            this.background = new objects.Background("gameOverBG");
            console.log(this.background);
            this.background.x = -35;
            this.playButton = new objects.Button("redPlayBtn", managers.Game.canvas.clientWidth * 0.5, managers.Game.canvas.clientHeight * 0.5 + 100);
            this.playButton.scaleX = 2;
            this.playButton.scaleY = 2;
            this.playButton.on("click", this.PlayButtonClicked);
            this.Main();
        };
        GameOverScene.prototype.Update = function () { };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.gameoverLabel);
            this.addChild(this.playButton);
        };
        GameOverScene.prototype.PlayButtonClicked = function () {
            managers.Game.currentScene = config.Scene.PLAY;
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map