var managers;
(function (managers) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        ;
        Game.canvas = document.getElementById("canvas");
        Game.score = 0;
        Game.level = 1;
        Game.lives = 3;
        return Game;
    }());
    managers.Game = Game;
})(managers || (managers = {}));
//# sourceMappingURL=game.js.map