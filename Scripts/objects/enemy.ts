module objects {
    export class Enemy extends objects.GameObject {
        private dx: number;
        public isDead: boolean;
        public isFacingLeft: boolean = true;
        public isExploding: boolean;
        constructor() {
            super("baseEnemyFacingLeft");
            this.Start();
            this.isDead = false;
            this.isExploding = false;
        }
        public Start(): void {
            this.dx = Math.random() + 0.3;
            this.Reset();
        }
        public Update(): void {
            // if the enemy is alive, keep it moving buddy
            if (!this.isDead) {
                this.Move();
                this.CheckBound();
            }
        }
        public Reset(): void {
            let min = 400;
            let max = 500;
            let temp = Math.floor(Math.random() * 2)

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
        }
        public Move(): void {
            // move this enemy to the left
            if (this.isFacingLeft) {
                this.x -= this.dx;
            }
            else {
                this.x += this.dx;
            }
        }
        public CheckBound(): void {
            // once this hits the wall on the left, then reset back to the right.
            if ((this.x <= 30 + this.halfH + 25 || this.x >= 440 + 25) && managers.Game.level == 1) {
                this.dx = -this.dx;
                if (this.dx < 0) {
                    this.gotoAndStop("baseEnemyFacingRight")
                }
                else {
                    this.gotoAndStop("baseEnemyFacingLeft")
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
        }
    }
}