(function () {
  // Global Game Variables
  let canvas = document.getElementById("canvas");
  let stage: createjs.Stage;

  let assetManager: createjs.LoadQueue;
  let assetManifest: any[];

  let currentScene: objects.Scene;
  let currentState: number;

  function Init(): void {
    console.log("TEST INIT");

     assetManifest = [
       { id: "toiletPaper", src: "./Assets/toilet-paper.jpg" },
       { id: "supermarketBG", src: "./Assets/supermarketBG.jpg" },
     ];

    assetManager = new createjs.LoadQueue();
    assetManager.installPlugin(createjs.Sound);
    assetManager.loadManifest(assetManifest);
    assetManager.on("complete", Start, this);
  }

  function Start(): void {
    console.log("Starting Application...");

    // Initialize CreateJS
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);

    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);

    // Set up default game states -- State Machine
    objects.Game.stage = stage;
    objects.Game.currentScene = config.Scene.MAIN_MENU;
    currentState = config.Scene.MAIN_MENU;
    Main();
  }

  function Update(): void {
    if (currentState != objects.Game.currentScene) {
      console.log("Changing scenes to " + objects.Game.currentScene);
      Main();
    }
    currentScene.Update();
    stage.update;
  }

  function Main(): void {
    switch(objects.Game.currentScene)
    {
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
    currentState = objects.Game.currentScene;
  }
  window.onload = Init;
})();
