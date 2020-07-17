var objects;
(function (objects) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.canvas = document.getElementById("canvas");
        Game.score = 0;
        Game.level = 1;
        Game.lives = 3;
        return Game;
    }());
    objects.Game = Game;
})(objects || (objects = {}));
//# sourceMappingURL=game.js.map