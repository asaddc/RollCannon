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
    var HeartContainer = /** @class */ (function (_super) {
        __extends(HeartContainer, _super);
        // Constructor
        function HeartContainer() {
            var _this = _super.call(this, "heartFull") || this;
            // Variables
            _this.MAX_HEALTH_SIZE = 3;
            // these coordinates are exactly where the heart container should reside for now
            // under the "Lives: " label.
            _this.x = 530;
            _this.y = 210;
            _this.scaleX = 0.5;
            _this.scaleY = 0.5;
            _this.currentHealth = _this.MAX_HEALTH_SIZE;
            return _this;
        }
        HeartContainer.prototype.Update = function () {
            // console.log("CURRENT HEALTH", this.currentHealth);
            if (this.currentHealth === 2) {
                // this.image = managers.Game.assetManager.getResult("heartTwoThirds") as HTMLImageElement;
                this.gotoAndStop("heartTwoThirds");
            }
            else if (this.currentHealth === 1) {
                // this.image = this.assetManager.getResult("heartOneThird") as HTMLImageElement;
                this.gotoAndStop("heartOneThird");
            }
            else if (this.currentHealth <= 0) {
                managers.Game.currentScene = config.Scene.GAME_OVER;
            }
        };
        return HeartContainer;
    }(objects.GameObject));
    objects.HeartContainer = HeartContainer;
})(objects || (objects = {}));
//# sourceMappingURL=heartContainer.js.map