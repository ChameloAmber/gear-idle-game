import { globalDisplays, metaData } from "./mainScript.mjs"
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
                document.getElementById("gear" + (i+1) + "Number").innerHTML = gears.progress[i].multipliedBy(100).toFixed(4) + "%"
				document.getElementById("gear" + (i+1) + "Energy").innerHTML = gears.energy[i].toFixed(0)
                document.getElementById("gear" + (i+1) + "Ratio").innerHTML = gears.ratio[i].toFixed(0) + ":1"
                document.getElementById("gear" + (i+1) + "Progress").style.width = gears.progress[i].multipliedBy(100).toFixed(4) + "%"
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