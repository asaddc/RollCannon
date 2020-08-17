var objects;
(function (objects) {
    var Sidebar = /** @class */ (function () {
        function Sidebar() {
            this.Init();
        }
        Sidebar.prototype.Init = function () {
            managers.Game.canvas.style.backgroundColor = "#000";
            this.levelLabel = new objects.Label("LEVEL " + managers.Game.level, "24px", "Arial", "#FFF", 503, 50);
            this.scoreLabel = new objects.Label("SCORE: " + managers.Game.score, "20px", "Arial", "#FFF", 503, 100);
            this.livesLabel = new objects.Label("LIVES: ", "20px", "Arial", "#FFF", 503, 150);
            this.controlsLabel = new objects.Label("CONTROLS:", "20px", "Arial", "#FFF", 503, 500);
            this.shootLabel = new objects.Label("SHOOT: SPACE", "18px", "Arial", "#FFF", 503, 525);
            this.moveLabel = new objects.Label("MOVE: WASD | ARROW KEYS", "18px", "Arial", "#FFF", 503, 550);
        };
        return Sidebar;
    }());
    objects.Sidebar = Sidebar;
})(objects || (objects = {}));
//# sourceMappingURL=sidebar.js.map