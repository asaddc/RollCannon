(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    var keyboardManager;
    var textureAtlasData;
    var textureAtlas;
    function Init() {
        console.log("Initializing...");
        CreateAssetManifest();
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        CreateTextureAtlasData();
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
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;
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
                currentScene = new scenes.MainMenuScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.PLAY:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME_OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
    }
    function CreateTextureAtlasData() {
        textureAtlasData = {
            "images": [
                "./Assets/Sprites/textureAtlas2.png"
            ],
            "framerate": 20,
            "frames": [
                [292, 0, 56, 71, 0, 0, 0],
                [348, 0, 56, 71, 0, 0, 0],
                [192, 359, 128, 128, 0, 0, 0],
                [320, 359, 128, 128, 0, 0, 0],
                [0, 487, 128, 128, 0, 0, 0],
                [172, 0, 60, 65, 0, 0, 0],
                [232, 0, 60, 65, 0, 0, 0],
                [0, 0, 44, 21, 0, 0, 0],
                [86, 71, 62, 90, 0, 0, 0],
                [148, 71, 62, 90, 0, 0, 0],
                [44, 0, 64, 64, 0, 0, 0],
                [108, 0, 64, 64, 0, 0, 0],
                [210, 71, 96, 96, 0, 0, 0],
                [306, 71, 96, 96, 0, 0, 0],
                [0, 167, 96, 96, 0, 0, 0],
                [96, 167, 96, 96, 0, 0, 0],
                [192, 167, 96, 96, 0, 0, 0],
                [288, 167, 96, 96, 0, 0, 0],
                [0, 263, 96, 96, 0, 0, 0],
                [96, 263, 96, 96, 0, 0, 0],
                [192, 263, 96, 96, 0, 0, 0],
                [288, 263, 96, 96, 0, 0, 0],
                [0, 359, 96, 96, 0, 0, 0],
                [96, 359, 96, 96, 0, 0, 0],
                [0, 71, 86, 80, 0, 0, 0],
                [128, 487, 344, 318, 0, 0, 0]
            ],
            "animations": {
                "baseEnemyFacingLeft": {
                    "frames": [0]
                },
                "baseEnemyFacingRight": {
                    "frames": [1]
                },
                "heartFull": {
                    "frames": [2]
                },
                "heartOneThird": {
                    "frames": [3]
                },
                "heartTwoThirds": {
                    "frames": [4]
                },
                "playerGunLeft": {
                    "frames": [5]
                },
                "playerGunRight": {
                    "frames": [6]
                },
                "redPlayBtn": {
                    "frames": [7]
                },
                "robotFacingLeft": {
                    "frames": [8]
                },
                "robotFacingRight": {
                    "frames": [9]
                },
                "skeletonFacingLeft": {
                    "frames": [10]
                },
                "skeletonFacingRight": {
                    "frames": [11]
                },
                "explosion": {
                    "frames": [12, 24]
                },
                "smallToiletPaper": {
                    "frames": [25]
                },
                "toiletPaper": {
                    "frames": [26]
                }
            },
        };
        textureAtlasData.images = [assetManager.getResult("textureAtlas")];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
    }
    function CreateAssetManifest() {
        assetManifest = [
            { id: "textureAtlas", src: "./Assets/Sprites/textureAtlas2.png" },
            { id: "supermarketBG", src: "./Assets/supermarketBG.jpg" },
            { id: "mainBG", src: "./Assets/mainBG.jpg" },
            { id: "gameOverBG", src: "./Assets/gameOverBG.jpg" },
            { id: "damageSound", src: "./Assets/Audio/damage-sound.mp3" },
            { id: "titlebgm", src: "./Assets/Audio/title.mp3" },
            { id: "playbgm", src: "./Assets/Audio/backgroundMusic.mp3" },
            { id: "explosion", src: "./Assets/Audio/explosion.mp3" },
            { id: "title", src: "./Assets/title.png" }
        ];
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map