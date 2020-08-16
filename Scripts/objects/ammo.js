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
        return Ammo;
    }(objects.GameObject));
    objects.Ammo = Ammo;
})(objects || (objects = {}));
//# sourceMappingURL=ammo.js.map