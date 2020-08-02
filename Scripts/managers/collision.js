var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (obj1, obj2, heartContainer) {
            var P1 = new math.Vec2(obj1.x, obj1.y);
            var P2 = new math.Vec2(obj2.x, obj2.y);
            if (math.Vec2.Distance(P1, P2) < obj1.halfH + obj2.halfH) {
                if (!obj2.isColliding) {
                    createjs.Sound.play("damageSound");
                    console.log("collision with" + obj2.name);
                    heartContainer.currentHealth--;
                    obj2.isColliding = true;
                }
            }
            else {
                obj2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map