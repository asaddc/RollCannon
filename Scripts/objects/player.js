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
        // Constructor
        function Player() {
            var _this = _super.call(this, "playerGunRight") || this;
            _this.facingLeft = false;
            _this.on("tick", _this.Update);
            _this.Start();
            return _this;
        }
        Player.prototype.Start = function () {
            this.x = 60;
            this.y = 130;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 1.5;
                // this.currentAnimation = "playerGunLeft";
                // this.currentAnimationFrame = 5;
                this.gotoAndStop("playerGunLeft");
                console.log("PLAYER LEFT :", this);
                // this.image = managers.Game.assetManager.getResult("playerGunLeft");
                this.facingLeft = true;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 1.5;
                // this.currentAnimation = "playerGunRight";
                // this.currentAnimationFrame = 6;
                this.gotoAndStop("playerGunRight");
                console.log("PLAYER RIGHT :", this);
                // this.image = this.assetManager.getResult("playerGunRight");
                this.facingLeft = false;
            }
            if (managers.Game.keyboardManager.moveDown) {
                this.y += 1.5;
            }
            if (managers.Game.keyboardManager.moveUp) {
                this.y -= 1.5;
            }
        };
        Player.prototype.AddShoppingCartBoundary = function () {
            // SHOPPING CART
            if (this.x > this.halfW + 239 && this.x < this.halfW + 300 && this.y < this.halfH + 100) {
                // I have collided with the left side of the shopping cart
                this.x = this.halfW + 239;
            }
            if (this.x > this.halfW + 300 && this.x < this.halfW + 340 && this.y < this.halfH + 100) {
                // I have collided with the right  side of the shopping cart
                this.x = this.halfW + 340;
            }
            if (this.x > this.halfW + 240 && this.x < this.halfW + 339 && this.y < this.halfH + 110) {
                // I have collided with the bottom of the shopping cart
                this.y = this.halfH + 110;
            }
        };
        Player.prototype.AddAppleCounterBoundary = function () {
            // APPLE COUNTER
            if (this.x >= this.halfW + 70 && this.x <= this.halfW + 160 && this.y < this.halfH + 120) {
                // I have collided with the top of the apple counter 
                this.y = this.halfH + 50;
            }
            if (this.x >= this.halfW + 70 && this.x <= this.halfW + 160 && this.y > this.halfH + 180 && this.y < this.halfH + 200) {
                // I have collided with the bottom of the apple counter 
                this.y = this.halfH + 200;
            }
            if (this.x >= this.halfW + 70 && this.x <= this.halfW + 140 && this.y > this.halfH + 120 && this.y < this.halfH + 200) {
                // I have collided with the left side of the apple counter 
                this.x = this.halfW + 60;
            }
            if (this.x >= this.halfW + 140 && this.x < this.halfW + 155 && this.y > this.halfH + 100 && this.y < this.halfH + 200) {
                // I have collided with the right side of the apple counter
                this.x = this.halfW + 165;
            }
        };
        Player.prototype.AddTopRightProduceBoundary = function () {
            // TOP RIGHT PRODUCE
            if (this.x >= 420 - this.halfW && this.y < 350 - this.halfH) {
                // I have collided with the top-right produce boxes
                this.x = 420 - this.halfW;
            }
        };
        Player.prototype.AddProduceProtrusionBoundary = function () {
            // PRODUCE PROTRUSION
            if (this.x >= 275 - this.halfW && this.y > this.halfH + 215 && this.y < this.halfH + 240) {
                // I have collided with the protruding produce from the top
                this.y = this.halfH + 210;
            }
            if (this.x >= 275 - this.halfW && this.y > this.halfH + 270 && this.y < this.halfH + 330) {
                // I have collided with the protruding produce from the bottom
                this.y = this.halfH + 330;
            }
            if (this.x >= 275 - this.halfW && this.y > this.halfH + 220 && this.y < this.halfH + 320) {
                // I have collided with the protruding produce from the left
                this.x = 275 - this.halfW;
            }
        };
        Player.prototype.AddBottomProductsBoundary = function () {
            // BOTTOM PRODUCTS
            if (this.x >= this.halfW + 200 && this.y >= 540 - this.halfH) {
                this.y = 540 - this.halfH;
            }
            // LEFT SHELVES
            if (this.x < this.halfW + 125 && this.y > this.halfH + 190 && this.y <= this.halfH + 229) {
                // I have collided with the left shelves from the top
                this.y = this.halfH + 190;
            }
            if (this.x < this.halfW + 130 && this.y > this.halfH + 230 && this.y < this.halfH + 330) {
                // I have collided with the left shelves from the top-right
                this.x = this.halfW + 130;
            }
            if (this.x < this.halfW + 35 && this.y >= this.halfH + 336 && this.y <= this.halfH + 470) {
                // I have collided with the left shelves from the right
                this.x = this.halfW + 35;
            }
        };
        Player.prototype.AddEdgesBoundary = function () {
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
            if (this.y <= this.halfH + 50) {
                // I have collided with the top boundary
                this.y = this.halfH + 50;
            }
        };
        Player.prototype.CheckBound = function () {
            this.AddEdgesBoundary();
            this.AddShoppingCartBoundary();
            this.AddAppleCounterBoundary();
            this.AddTopRightProduceBoundary();
            this.AddProduceProtrusionBoundary();
            this.AddBottomProductsBoundary();
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map