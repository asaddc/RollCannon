module objects {
    export class Enemy extends objects.GameObject {
        private dx: number;
        public isDead: boolean;
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
            if (managers.Game.level == 1) {
                this.y = Math.floor(Math.random() * (max - min + 1)) + min;
                this.x = Math.floor(Math.random() * 20) + 440;
            }
            if (managers.Game.level == 2) {
                this.y = 540;
                this.x = 440;
            }
            if (managers.Game.level == 3) {
                this.y = Math.floor(Math.random() * (600 - 500 + 1)) + 500;
                this.x = Math.floor(Math.random() * 20) + 440;
            }
        }
        public Move(): void {
            // move this enemy to the left
            this.x -= this.dx;
            // this.x -= 0.3;
        }
        public CheckBound(): void {
            // once this hits the wall on the left, then reset back to the right.
            if (this.x <= 30 + this.halfH + 25) {
                this.Reset();
            }
        }
    }
}