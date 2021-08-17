import { globalDisplays } from "./mainScript.mjs"
import { gears } from "./gearController.mjs"

export function updateVisual()
{
	switch(globalDisplays.currentScreen)
	{
		case 0: 
		for(let i = 0; i < 5; i++)
		{
			if(gears.state[i] == 1)
			{
                document.getElementById("gear" + (i+1) + "Number").innerHTML = gears.progress[i].toPrecision(2)
                document.getElementById("gear" + (i+1) + "Max").innerHTML = "Max " + gears.max[i].toString()
                document.getElementById("gear" + (i+1) + "Progress").style.width = gears.progress[i].dividedBy(gears.max[i]).multipliedBy(100).toPrecision(4) + "%"
				document.getElementById("gear" + (i+1) + "Box").style.display = "block"
			}
			else
			{
				document.getElementById("gear" + (i+1) + "Box").style.display = "none"
			}
		}
		break;
	}

    document.getElementById("buildNumber").innerHTML = metaData.build
}