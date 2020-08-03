module managers {
    export class Collision {
        public static Check(obj1: objects.GameObject, obj2: objects.GameObject, heartContainer?: objects.HeartContainer) {
            let P1: math.Vec2 = new math.Vec2(obj1.x, obj1.y);
            let P2: math.Vec2 = new math.Vec2(obj2.x, obj2.y);

            if (math.Vec2.Distance(P1, P2) < obj1.halfH - 10 + obj2.halfH - 10) {
                if (!obj2.isColliding) {
                    createjs.Sound.play("damageSound");
                    // console.log("collision with" + obj2.name);
                    heartContainer.currentHealth--;
                    obj2.isColliding = true;
                }
            } else {
                obj2.isColliding = false;
            }
        }
    }
}