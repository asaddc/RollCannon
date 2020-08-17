module managers {
    export class Collision {
        public static Check(obj1: objects.GameObject, obj2: objects.GameObject, heartContainer?: objects.HeartContainer): boolean {
            let P1: math.Vec2 = new math.Vec2(obj1.x, obj1.y);
            let P2: math.Vec2 = new math.Vec2(obj2.x, obj2.y);

            if (math.Vec2.Distance(P1, P2) < obj1.halfH - 10 + obj2.halfH - 10) {
                if (!obj2.isColliding && obj1 instanceof objects.Player) {
                    createjs.Sound.play("damageSound");
                    heartContainer.currentHealth--;
                    obj2.isColliding = true;
                    return true;
                } else if (!obj2.isColliding && obj1 instanceof objects.ToiletPaper) {
                    createjs.Sound.play("explosion");
                    obj2.isColliding = true;
                    return true;
                }
            } else {
                obj2.isColliding = false;
                return false;
            }
        }

        // public static Check(obj1: objects.GameObject, obj2: objects.GameObject): boolean {
        //     // Create a temp Vec2 object for each object passed in.
        //     let P1: math.Vec2 = new math.Vec2(obj1.x, obj1.y);
        //     let P2: math.Vec2 = new math.Vec2(obj2.x, obj2.y);

        //     if (math.Vec2.Distance(P1, P2) < obj1.halfH - 10 + obj2.halfH - 10) {
        //         if (!obj2.isColliding && obj1 instanceof objects.Player) {
        //             // A collision has occurred
        //             createjs.Sound.play("damageSound");
        //             managers.Game.heartContainer.currentHealth--;
        //             obj2.isColliding = true;
        //             return true;
        //         }
        //         else {
        //             obj2.isColliding = false;
        //             return false;
        //         }
        //     }
        // }
    }
}