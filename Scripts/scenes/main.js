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
            this.playButton = new objects.Button(this.assetManager, "redPlayBtn", managers.Game.canvas.clientWidth * 0.5 - 44, managers.Game.canvas.clientHeight * 0.5 + 100);
            this.playButton.scaleX = 2;
            this.playButton.scaleY = 2;
            this.playButton.on("click", this.PlayButtonClicked);
            this.background = new objects.Background(this.assetManager, "mainBG");
            this.toiletPaperImage = new objects.ToiletPaper(this.assetManager, -345, 50, "toiletPaper");
            this.logo = new createjs.Bitmap(this.assetManager.getResult("title"));
            this.logo.alpha = 0;
            this.logo.x = 234.5;
            this.logo.y = 150;
            createjs.Tween.get(this.logo).to({ alpha: 1 }, 2000);
            createjs.Tween.get(this.toiletPaperImage, { loop: -1 }).to({ x: this.toiletPaperImage.x, y: this.toiletPaperImage.y }, 1500).wait(1000).to({ x: 800 }, 5000);
            this.bgm = createjs.Sound.play("titlebgm");
            this.bgm.loop = -1;
            this.Main();
        };
        MainMenuScene.prototype.Update = function () { };
        MainMenuScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.playButton);
            this.addChild(this.toiletPaperImage);
            this.addChild(this.logo);
        };
        MainMenuScene.prototype.PlayButtonClicked = function () {
            createjs.Sound.stop();
            managers.Game.currentScene = config.Scene.PLAY;
        };
        return MainMenuScene;
    }(objects.Scene));
    scenes.MainMenuScene = MainMenuScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=main.js.map