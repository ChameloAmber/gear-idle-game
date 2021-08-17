export var gears = {
	progress: [new BigNumber('0.0'), new BigNumber('0.0'), new BigNumber('0.0'), new BigNumber('0.0'), new BigNumber('0.0')],
	max: [new BigNumber('30.0'), new BigNumber('4.0'), new BigNumber('6.0'), new BigNumber('8.0'), new BigNumber('12.0')],
	state: [1, 0, 0, 0, 0],
    coin: [new BigNumber('0'), new BigNumber('0'), new BigNumber('0'), new BigNumber('0'), new BigNumber('0')],
	progressPerMinuteBase: new BigNumber('60.0'),
	progressPerMinuteMultiplier: new BigNumber('1.0')
};

export function gearGeneration() 
{
    var totalRatio = new BigNumber('1.0')
    for(i = 0; i < 5; i++)
    {
        if(gears.state[i] == 1)
        {
            gears.progress[i].plus(gears.progressPerMinuteBase.multipliedBy(gears.progressPerMinuteMultiplier).dividedBy(globalConstant.gameTicksPerSecond.multipliedBy(60).multipliedBy(totalRatio)))
            totalRatio.multipliedBy(gears.max[i])
            if(gears.progress[i].isGreaterThanOrEqualTo(gears.max[i]))
            {
                gears.progress[i] = new BigNumber('0.0')
                gears.coin[i].plus(1)
                if(i != 4) {gears.state[i + 1] = 1}
            }
        }
    }
}
