module objects {
    export class Enemy extends objects.GameObject {
        private dx: number;
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "baseEnemyFacingLeft");
            this.Start();
        }
        public Start(): void {
            this.dx = Math.random() + 0.3;
            this.Reset();
        }
        public Update(): void {
            this.Move();
            this.CheckBound();
        }
        public Reset(): void {
            let min = 400;
            let max = 500;
            this.y = Math.floor(Math.random() * (max - min + 1)) + min;
            this.x = Math.floor(Math.random() * 20) + 440;
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