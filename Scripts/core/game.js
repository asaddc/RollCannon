(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    var keyboardManager;
    function Init() {
        console.log("Initializing...");
        assetManifest = [
            { id: "supermarketBG", src: "./Assets/supermarketBG.jpg" },
            { id: "mainBG", src: "./Assets/mainBG.jpg" },
            { id: "title", src: "./Assets/title.png" },
            { id: "redPlayBtn", src: "./Assets/redPlayBtn.jpg" },
            { id: "toiletPaper", src: "./Assets/toiletpaper.png" },
            { id: "smallToiletPaper", src: "./Assets/toiletpaper-small.png" },
            { id: "playerGunLeft", src: "./Assets/playerSpriteGunLeft.png" },
            { id: "playerGunRight", src: "./Assets/playerSpriteGunRight.png" },
            { id: "heartFull", src: "./Assets/heartFull.png" },
            { id: "heartTwoThirds", src: "./Assets/heartTwoThirds.png" },
            { id: "heartOneThird", src: "./Assets/heartOneThird.png" },
            { id: "baseEnemyFacingRight", src: "./Assets/baseEnemyFacingRight.png" },
            { id: "baseEnemyFacingLeft", src: "./Assets/baseEnemyFacingLeft.png" },
            { id: "gameOverBG", src: "./Assets/gameOverBG.jpg" },
            { id: "damageSound", src: "./Assets/Audio/damage-sound.mp3" },
            { id: "titlebgm", src: "./Assets/Audio/title.mp3" },
            { id: "playbgm", src: "./Assets/Audio/backgroundMusic.mp3" }
        ];
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 120;
        createjs.Ticker.on("tick", Update);
        // Set up default game states -- State Machine
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.MAIN_MENU;
        currentState = config.Scene.MAIN_MENU;
        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;
        Main();
    }
    function Update() {
        if (currentState != managers.Game.currentScene) {
            console.log("Changing scenes to " + managers.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        switch (managers.Game.currentScene) {
            case config.Scene.MAIN_MENU:
                stage.removeAllChildren();
                currentScene = new scenes.MainMenuScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.PLAY:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME_OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map