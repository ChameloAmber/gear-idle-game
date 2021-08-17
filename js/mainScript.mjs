export var globalDisplays = {
	currentScreen: 0
};

export var globalConstant = {
	visualTicksPerSecond: 50,
	gameTicksPerSecond: 50
};

export var metaData = {
    build: "5"
}

export var gameTicker = setInterval(gearController.gearGeneration, 1000 / globalConstant.gameTicksPerSecond)
export var visualTicker = setInterval(updateVisual, 1000 / globalConstant.visualTicksPerSecond);