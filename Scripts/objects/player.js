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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Variables
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "playerGunLeft") || this;
            _this.on("tick", _this.Update);
            //   this.addEventListener("click", this.Move);
            _this.Start();
            return _this;
        }
        Player.prototype.Start = function () {
            this.x = 320;
            this.y = 350;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;
        };
        Player.prototype.CheckBound = function () {
            // Right boundary
            if (this.x >= 495 - this.halfW) {
                // I have collided with the right boundary
                this.x = 495 - this.halfW;
            }
            // Left boundary
            if (this.x <= this.halfW) {
                // I have collided with the left boundary
                this.x = this.halfW;
            }
            if (this.y >= 600 - this.halfH) {
                // I have collided with the bottom boundary
                this.y = 600 - this.halfH;
            }
            if (this.y <= this.halfH) {
                // I have collided with the top boundary
                this.y = this.halfH;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map