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
        function MainMenuScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        MainMenuScene.prototype.Start = function () {
            // Play Button
            this.playButton = new objects.Button("redPlayBtn", managers.Game.canvas.clientWidth * 0.5, managers.Game.canvas.clientHeight * 0.5 + 100);
            this.playButton.scaleX = 2;
            this.playButton.scaleY = 2;
            this.playButton.on("click", this.PlayButtonClicked);
            // Background & Large toilet paper image
            this.background = new objects.Background("mainBG");
            this.toiletPaperImage = new objects.ToiletPaper(-345, 50, "smallToiletPaper");
            // this.toiletPaperImage = new objects.ToiletPaper(-345, 50, "toiletPaper");
            // Left to right translate large image
            createjs.Tween.get(this.toiletPaperImage, { loop: -1 })
                .to({ x: this.toiletPaperImage.x, y: this.toiletPaperImage.y }, 1500)
                .wait(1000)
                .to({ x: 800, rotation: -360 }, 2500)
                .wait(1500)
                .to({ x: this.toiletPaperImage.x, rotation: 360 }, 2500);
            // Logo
            this.logo = new createjs.Bitmap(managers.Game.assetManager.getResult("title"));
            this.logo.x = 234.5;
            this.logo.y = -130;
            // Fade in
            createjs.Tween.get(this.logo)
                .to({ x: this.logo.x, y: 150 }, 1500, createjs.Ease.bounceOut);
            // Background music
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