var globalDisplays = {
	currentScreen: 0
};

var globalConstant = {
	visualTicksPerSecond: 50,
	gameTicksPerSecond: 50
};

var metaData = {
    build: "4.3"
}

var gameTicker = setInterval(gearGeneration, 1000 / globalConstant.gameTicksPerSecond)
var visualTicker = setInterval(updateVisual, 1000 / globalConstant.visualTicksPerSecond);