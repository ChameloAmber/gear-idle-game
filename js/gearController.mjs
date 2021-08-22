import BigNumber from "../libraries/bignumber.mjs"
import { globalConstant } from "./mainScript.mjs"

export var gears = {
	progress: [new BigNumber('0.0'), new BigNumber('0.0'), new BigNumber('0.0'), new BigNumber('0.0'), new BigNumber('0.0')],
	ratio: [new BigNumber('60.0'), new BigNumber('4.0'), new BigNumber('6.0'), new BigNumber('8.0'), new BigNumber('12.0')],
	state: [1, 0, 0, 0, 0],
    energy: [new BigNumber('0'), new BigNumber('0'), new BigNumber('0'), new BigNumber('0'), new BigNumber('0')],
    unlockFeature: ["Tower", "Library", "Lab", "", "Office"],
	progressPerMinuteBase: new BigNumber('60.0'),
	progressPerMinuteMultiplier: new BigNumber('1.0')
};

export function gearGeneration()
{
    let totalRatio = new BigNumber('1.0')
    for(let i = 0; i < 5; i++)
    {
        if(gears.state[i] == 1)
        {
            totalRatio = totalRatio.multipliedBy(gears.ratio[i])
            gears.progress[i] = gears.progress[i].plus(gears.progressPerMinuteBase.multipliedBy(gears.progressPerMinuteMultiplier).dividedBy(globalConstant.gameTicksPerSecond).dividedBy(totalRatio).dividedBy(60))
            if(gears.progress[i].isGreaterThanOrEqualTo(new BigNumber(1)))
            {
                gears.progress[i] = new BigNumber('0.0')
                gears.energy[i] = gears.energy[i].plus(1)
                if(i != 4) {gears.state[i + 1] = 1}
            }
        }
    }
}