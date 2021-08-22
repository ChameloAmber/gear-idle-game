import { gearGeneration } from "./gearController.mjs"
import { libraryUpdate } from "./libraryController.mjs"
import { updateVisual } from "./visualController.mjs"

export var globalDisplays = {
	currentScreen: 0,
	currentScreenName: "Tower"
};

export var globalConstant = {
	visualTicksPerSecond: 50,
	gameTicksPerSecond: 50
};

export var metaData = {
    build: "10.5"
}

export var gameTicker = setInterval(gameUpdate, 1000 / globalConstant.gameTicksPerSecond)
export var visualTicker = setInterval(updateVisual, 1000 / globalConstant.visualTicksPerSecond);

function gameUpdate() {
	gearGeneration()
	libraryUpdate()
}