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
    var ToiletPaper = /** @class */ (function (_super) {
        __extends(ToiletPaper, _super);
        // Variables
        // Constructor
        function ToiletPaper(x, y, assetId) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (assetId === void 0) { assetId = "toiletPaper"; }
            return _super.call(this, x, y, assetId) || this;
            /// do something unique for TP
        }
        ToiletPaper.prototype.Update = function () {
            this.speedX = 10;
            this.speedY = 0;
            this.Move();
        };
        ToiletPaper.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        ToiletPaper.prototype.Move = function () {
            (managers.Game.isFacingRight) ? this.x += this.speedX : this.x -= this.speedX;
        };
        return ToiletPaper;
    }(objects.Ammo));
    objects.ToiletPaper = ToiletPaper;
})(objects || (objects = {}));
//# sourceMappingURL=toiletPaper.js.map