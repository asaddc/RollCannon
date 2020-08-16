module managers {
  export class Game {
    // GLOBAL VARIABLES
    public static stage: createjs.Stage;
    public static assetManager: createjs.LoadQueue;
    public static currentScene: number;
    public static currentSceneObject: objects.Scene;;
    public static keyboardManager: managers.Keyboard;
    public static textureAtlas: createjs.SpriteSheet;
    public static isFacingRight: boolean;
    public static currentLevel: number = 1;

    public static canvas = document.getElementById("canvas");

    public static score: number = 0;
    public static level: number = 1;
    public static lives: number = 3;
  }
}