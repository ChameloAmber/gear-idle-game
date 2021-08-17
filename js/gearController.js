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
    var totalRatio = 1
    for(i = 0; i < 5; i++)
    {
        if(gears.state[i] == 1)
        {
            gears.progress[i] += (gears.progressPerMinuteBase * gears.progressPerMinuteMultiplier) / (60 * globalConstant.gameTicksPerSecond * totalRatio)
            totalRatio *= gears.max[i]
            if(gears.progress[i] >= gears.max[i])
            {
                gears.progress[i] = 0
                gears.coin[i] += 1
                if(i != 4) {gears.state[i + 1] = 1}
            }
        }
    }
}

