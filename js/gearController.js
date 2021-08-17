var gears = {
	progress: [0.0, 0.0, 0.0, 0.0, 0.0],
	max: [30.0, 4.0, 6.0, 8.0, 12.0],
	state: [1, 0, 0, 0, 0],
    coin: [0, 0, 0, 0, 0],
	progressPerMinuteBase: 60.0,
	progressPerMinuteMultiplier: 1.0
};

function gearGeneration() 
{
    gears.progress[0] += (gears.progressPerMinuteBase * gears.progressPerMinuteMultiplier) / (60 * globalConstant.gameTicksPerSecond)
    var totalRatio = 0
    for(i = 0; i < 5; i++)
    {
        if(i != 0 && gears.state[i] == 1)
        {
            gears.progress[i] += (gears.progressPerMinuteBase * gears.progressPerMinuteMultiplier) / (60 * globalConstant.gameTicksPerSecond * gears[i].max)
            totalRatio += gears[i].max
        }
        if(gears[i].progress >= gears[i].max)
        {
            gears.progress[i] = 0
            gears.coin[i] += 1
            if(i != 4) {gears.state[i + 1] = 1}
        }
    }
}

