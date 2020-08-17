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
var objects;
(function (objects) {
    var Sidebar = /** @class */ (function (_super) {
        __extends(Sidebar, _super);
        function Sidebar() {
            var _this = _super.call(this) || this;
            _this.Init();
            return _this;
        }
        Sidebar.prototype.Init = function () {
            managers.Game.canvas.style.backgroundColor = "#000";
            this.levelLabel = new objects.Label("LEVEL " + managers.Game.level, "24px", "Arial", "#FFF", 503, 50);
            this.scoreLabel = new objects.Label("SCORE: " + managers.Game.score, "20px", "Arial", "#FFF", 503, 100);
            this.livesLabel = new objects.Label("LIVES: ", "20px", "Arial", "#FFF", 503, 150);
            this.controlsLabel = new objects.Label("CONTROLS:", "20px", "Arial", "#FFF", 503, 500);
            this.shootLabel = new objects.Label("SHOOT: SPACE", "18px", "Arial", "#FFF", 503, 525);
            this.moveLabel = new objects.Label("MOVE: WASD | ARROW KEYS", "18px", "Arial", "#FFF", 503, 550);
            this.Main();
        };
        Sidebar.prototype.Main = function () {
            this.addChild(this.levelLabel);
            this.addChild(this.scoreLabel);
            this.addChild(this.livesLabel);
            this.addChild(this.controlsLabel);
            this.addChild(this.shootLabel);
            this.addChild(this.moveLabel);
        };
        return Sidebar;
    }(createjs.Container));
    objects.Sidebar = Sidebar;
})(objects || (objects = {}));
//# sourceMappingURL=sidebar.js.map