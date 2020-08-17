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
        function Enemy() {
            var _this = _super.call(this, "baseEnemyFacingLeft") || this;
            _this.isFacingLeft = true;
            _this.Start();
            _this.isDead = false;
            _this.isExploding = false;
            return _this;
        }
        Enemy.prototype.Start = function () {
            this.dx = Math.random() + 0.3;
            this.Reset();
        };
        Enemy.prototype.Update = function () {
            // if the enemy is alive, keep it moving buddy
            if (!this.isDead) {
                this.Move();
                this.CheckBound();
            }
        };
        Enemy.prototype.Reset = function () {
            var min = 400;
            var max = 500;
            var temp = Math.floor(Math.random() * 2);
            if (managers.Game.level == 1) {
                this.y = Math.floor(Math.random() * (max - min + 1)) + min;
                this.x = Math.floor(Math.random() * 20) + 440;
            }
            if (managers.Game.level == 2) {
                this.y = 540;
                if (temp == 0) {
                    this.gotoAndPlay("skeletonFacingRight");
                    this.isFacingLeft = false;
                    this.x = 120;
                }
                else {
                    this.gotoAndPlay("skeletonFacingLeft");
                    this.x = 440;
                }
            }
            if (managers.Game.level == 3) {
                this.y = Math.floor(Math.random() * (600 - 500 + 1)) + 480;
                if (temp == 0) {
                    this.gotoAndPlay("robotFacingRight");
                    this.isFacingLeft = false;
                    this.x = 120;
                    this.scaleX = (Math.random() * 2) + 1;
                    this.scaleY = this.scaleX;
                }
                else {
                    this.gotoAndPlay("robotFacingLeft");
                    this.x = Math.floor(Math.random() * 20) + 440;
                    this.scaleX = (Math.random() * 2) + 1;
                    this.scaleY = this.scaleX;
                }
            }
        };
        Enemy.prototype.Move = function () {
            // move this enemy to the left
            if (this.isFacingLeft) {
                this.x -= this.dx;
            }
            else {
                this.x += this.dx;
            }
        };
        Enemy.prototype.CheckBound = function () {
            // once this hits the wall on the left, then reset back to the right.
            if ((this.x <= 30 + this.halfH + 25 || this.x >= 440 + 25) && managers.Game.level == 1) {
                this.dx = -this.dx;
                if (this.dx < 0) {
                    this.gotoAndStop("baseEnemyFacingRight");
                }
                else {
                    this.gotoAndStop("baseEnemyFacingLeft");
                }
            }
            else if (this.x <= 0 + this.halfH + 25 || this.x >= 440 + 25) {
                this.dx = -this.dx;
                if (this.dx < 0) {
                    if (managers.Game.level == 2) {
                        this.gotoAndStop("skeletonFacingRight");
                    }
                    else {
                        this.gotoAndStop("robotFacingLeft");
                    }
                }
                else {
                    if (managers.Game.level == 2) {
                        this.gotoAndStop("skeletonFacingLeft");
                    }
                    else {
                        this.gotoAndStop("robotFacingRight");
                    }
                }
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map