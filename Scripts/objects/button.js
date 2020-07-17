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
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        // Variables
        // Constructor
        function Button(assetManager, imageString, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            // Default position
            _this.x = x;
            _this.y = y;
            createjs.Sound.registerSound("../Assets/waterdrop.mp3", "waterdrop");
            // Set up event handlers
            _this.on("mouseover", _this.MouseOver);
            _this.on("mouseout", _this.MouseOut);
            return _this;
        }
        // Methods
        // Event Handlers
        Button.prototype.MouseOver = function () {
            this.alpha = 0.85;
            createjs.Sound.play("waterdrop");
        };
        Button.prototype.MouseOut = function () {
            this.alpha = 1.0;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map