var globalDisplays = {
	currentScreen: 0
};

var globalConstant = {
	visualTicksPerSecond: 50,
	gameTicksPerSecond: 50
};

var gameTicker = setInterval(gearGeneration, 1000 / globalConstant.gameTicksPerSecond)
var visualTicker = setInterval(updateVisual, 1000 / globalConstant.visualTicksPerSecond);