var objects;
(function (objects) {
    var Sidebar = /** @class */ (function () {
        function Sidebar() {
            this.Init();
        }
        Sidebar.prototype.Init = function () {
            objects.Game.canvas.style.backgroundColor = "#000";
            this.levelLabel = new objects.Label("LEVEL " + objects.Game.level, "24px", "Arial", "#FFF", 503, 50);
            this.scoreLabel = new objects.Label("SCORE: " + objects.Game.score, "20px", "Arial", "#FFF", 503, 100);
            this.livesLabel = new objects.Label("LIVES: ", "20px", "Arial", "#FFF", 503, 150);
        };
        return Sidebar;
    }());
    objects.Sidebar = Sidebar;
})(objects || (objects = {}));
//# sourceMappingURL=sidebar.js.map