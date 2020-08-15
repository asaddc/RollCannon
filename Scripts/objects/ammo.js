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
    var Ammo = /** @class */ (function (_super) {
        __extends(Ammo, _super);
        // Constructor
        function Ammo(x, y, assetId) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (assetId === void 0) { assetId = ""; }
            var _this = _super.call(this, assetId) || this;
            // Variables
            _this.collided = false;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        Ammo.prototype.Fire = function (facingLeft, x, y) {
            if (managers.Game.keyboardManager.shoot)
                this.x = x;
            this.y = y;
            {
                if (facingLeft) {
                    this.visible = true;
                    this.x -= 10.5;
                }
                else {
                    this.x += 10.5;
                    this.visible = true;
                }
            }
        };
        // Asad's temporary "Fire" method
        // public Update(isFacingLeft: boolean) {
        //   // console.log("update ammo x", this.x);
        //   (isFacingLeft) ? this.x -= 10.5 : this.x += 10.5;
        //   // console.log("update ammo x after", this.x);
        //   if (this.x >= 490 || this.x <= 86) {
        //     this.collided = true;
        //   }
        //   else { this.collided = false; }
        // }
        Ammo.prototype.checkCollision = function () {
        };
        return Ammo;
    }(objects.GameObject));
    objects.Ammo = Ammo;
})(objects || (objects = {}));
//# sourceMappingURL=ammo.js.map