(function () {
  // Global Game Variables
  let canvas = document.getElementById("canvas");
  let stage: createjs.Stage;

  let assetManager: createjs.LoadQueue;
  let assetManifest: any[];

  let currentScene: objects.Scene;
  let currentState: number;

  let keyboardManager: managers.Keyboard;

  let textureAtlasData: any;
  let textureAtlas: createjs.SpriteSheet;
  textureAtlasData = {
    "images": [
      "./Assets/Sprites/textureAtlas2.png"
    ],

    "framerate": 20,
    "frames": [
      [44, 0, 56, 71, 0, 0, 0],
      [100, 0, 56, 71, 0, 0, 0],
      [96, 288, 128, 128, 0, 0, 0],
      [224, 228, 128, 128, 0, 0, 0],
      [352, 288, 128, 128, 0, 0, 0],
      [156, 0, 60, 65, 0, 0, 0],
      [216, 0, 60, 65, 0, 0, 0],
      [0, 0, 44, 21, 0, 0, 0],
      [362, 0, 96, 96, 0, 0, 0],
      [0, 96, 96, 96, 0, 0, 0],
      [96, 96, 96, 96, 0, 0, 0],
      [192, 96, 96, 96, 0, 0, 0],
      [288, 96, 96, 96, 0, 0, 0],
      [384, 96, 96, 96, 0, 0, 0],
      [0, 192, 96, 96, 0, 0, 0],
      [96, 192, 96, 96, 0, 0, 0],
      [192, 192, 96, 96, 0, 0, 0],
      [288, 192, 96, 96, 0, 0, 0],
      [384, 192, 96, 96, 0, 0, 0],
      [0, 288, 96, 96, 0, 0, 0],
      [0, 416, 331, 128, 0, 0, 0],
      [276, 0, 86, 80, 0, 0, 0],
      [0, 544, 344, 318, 0, 0, 0]
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
      "explosion": {
        "frames": [8, 19]
      },
      "title": {
        "frames": [20]
      },
      "smallToiletPaper": {
        "frames": [21]
      },
      "toiletPaper": {
        "frames": [22]
      }
    }
  };

  function Init(): void {
    console.log("Initializing...");

    CreateTextureAtlasData();
    CreateAssetManifest();

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

  function Update(): void {
    if (currentState != managers.Game.currentScene) {
      console.log("Changing scenes to " + managers.Game.currentScene);
      Main();
    }
    currentScene.Update();
    stage.update();
  }

  function Main(): void {
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
  }

  function CreateTextureAtlasData(): void {
    textureAtlasData = {
      "images": [
        "./Assets/Sprites/textureAtlas2.png"
      ],

      "framerate": 20,
      "frames": [
        [44, 0, 56, 71, 0, 0, 0],
        [100, 0, 56, 71, 0, 0, 0],
        [96, 288, 128, 128, 0, 0, 0],
        [224, 228, 128, 128, 0, 0, 0],
        [352, 288, 128, 128, 0, 0, 0],
        [156, 0, 60, 65, 0, 0, 0],
        [216, 0, 60, 65, 0, 0, 0],
        [0, 0, 44, 21, 0, 0, 0],
        [362, 0, 96, 96, 0, 0, 0],
        [0, 96, 96, 96, 0, 0, 0],
        [96, 96, 96, 96, 0, 0, 0],
        [192, 96, 96, 96, 0, 0, 0],
        [288, 96, 96, 96, 0, 0, 0],
        [384, 96, 96, 96, 0, 0, 0],
        [0, 192, 96, 96, 0, 0, 0],
        [96, 192, 96, 96, 0, 0, 0],
        [192, 192, 96, 96, 0, 0, 0],
        [288, 192, 96, 96, 0, 0, 0],
        [384, 192, 96, 96, 0, 0, 0],
        [0, 288, 96, 96, 0, 0, 0],
        [0, 416, 331, 128, 0, 0, 0],
        [276, 0, 86, 80, 0, 0, 0],
        [0, 544, 344, 318, 0, 0, 0]
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
        "explosion": {
          "frames": [8, 19]
        },
        "title": {
          "frames": [20]
        },
        "smallToiletPaper": {
          "frames": [21]
        },
        "toiletPaper": {
          "frames": [22]
        }
      }
    };

    textureAtlas = new createjs.SpriteSheet(textureAtlasData);

  }

  function CreateAssetManifest(): void {
    assetManifest = [
      { id: "supermarketBG", src: "./Assets/supermarketBG.jpg" },
      { id: "mainBG", src: "./Assets/mainBG.jpg" },
      { id: "gameOverBG", src: "./Assets/gameOverBG.jpg" },
      { id: "damageSound", src: "./Assets/Audio/damage-sound.mp3" },
      { id: "titlebgm", src: "./Assets/Audio/title.mp3" },
      { id: "playbgm", src: "./Assets/Audio/backgroundMusic.mp3" }
    ];
  }

  window.onload = Init;
})();
