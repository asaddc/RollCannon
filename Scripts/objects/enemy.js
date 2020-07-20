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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        function Enemy(assetManager) {
            var _this = _super.call(this, assetManager, "baseEnemyFacingLeft") || this;
            _this.Start();
            return _this;
        }
        Enemy.prototype.Start = function () {
            this.Reset();
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Enemy.prototype.Reset = function () {
            var min = 400;
            var max = 500;
            this.y = Math.floor(Math.random() * (max - min + 1)) + min;
            this.x = 460;
        };
        Enemy.prototype.Move = function () {
            // move this to the left
            this.x -= 0.5;
            console.log(this.x);
        };
        Enemy.prototype.CheckBound = function () {
            // once this hits the wall on the left, then reset back to the right.
            if (this.x <= 30 + this.halfH + 25) {
                this.Reset();
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map