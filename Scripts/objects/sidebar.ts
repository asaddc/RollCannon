module objects {
  export class Sidebar {
    public levelLabel: objects.Label;
    public scoreLabel: objects.Label;
    public livesLabel: objects.Label;

    constructor() {
      this.Init();
    }

    private Init(): void {
      managers.Game.canvas.style.backgroundColor = "#000";
      this.levelLabel = new objects.Label("LEVEL " + managers.Game.level, "24px", "Arial", "#FFF", 503, 50);
      this.scoreLabel = new objects.Label("SCORE: " + managers.Game.score, "20px", "Arial", "#FFF", 503, 100);
      this.livesLabel = new objects.Label("LIVES: ", "20px", "Arial", "#FFF", 503, 150);

    }
  }
}