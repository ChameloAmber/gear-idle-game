var gears = {
	progress: [0.0, 0.0, 0.0, 0.0, 0.0],
	max: [30.0, 3.0, 4.0, 6.0, 10.0],
	state: [1, 0, 0, 0, 0],
    coin: [0, 0, 0, 0, 0],
	progressPerMinuteBase: 60.0,
	progressPerMinuteMultiplier: 1.0
};

function gearGeneration() 
{
    gears.progress[0] += (gears.progressPerMinuteBase * gears.progressPerMinuteMultiplier) / (60 * globalConstant.gameTicksPerSecond)
}