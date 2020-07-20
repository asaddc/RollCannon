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
    var MainMenuScene = /** @class */ (function (_super) {
        __extends(MainMenuScene, _super);
        // Constructor
        function MainMenuScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        MainMenuScene.prototype.Start = function () {
            this.playButton = new objects.Button(this.assetManager, "redPlayBtn", objects.Game.canvas.clientWidth * 0.5 - 44, objects.Game.canvas.clientHeight * 0.5 + 100);
            this.playButton.scaleX = 2;
            this.playButton.scaleY = 2;
            this.background = new objects.Background(this.assetManager, "mainBG");
            this.toiletPaperImage = new objects.ToiletPaper(this.assetManager, 175, 50, "toiletPaper");
            this.playButton.on("click", this.playButtonClicked);
            this.Main();
        };
        MainMenuScene.prototype.Update = function () { };
        MainMenuScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.playButton);
            this.addChild(this.toiletPaperImage);
        };
        MainMenuScene.prototype.playButtonClicked = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        return MainMenuScene;
    }(objects.Scene));
    scenes.MainMenuScene = MainMenuScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=main.js.map