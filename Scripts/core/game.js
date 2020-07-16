(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    assetManifest = [{ id: "toiletPaper", src: "./Assets/toilet-paper.png" }];
    function Init() {
        console.log("TEST INIT");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        // State Machine
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.MAIN_MENU;
        currentState = config.Scene.MAIN_MENU;
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
    }
    function Update() {
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to " + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update;
    }
    function Main() {
        switch (objects.Game.currentScene) {
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
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map