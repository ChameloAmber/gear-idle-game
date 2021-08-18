import { globalDisplays, metaData } from "./mainScript.mjs"
import { gears } from "./gearController.mjs"

export function updateVisual()
{
	for(let i = 0; i < 5; i++)
	{
		if(gears.state[i] == 1)
		{
			if(gears.unlockFeature[i] != "")
			{
				document.getElementById("screen" + gears.unlockFeature[i] + "Switcher").style.display = "block"
			}
		}
		else
		{
			if(gears.unlockFeature[i] != "")
			{
				document.getElementById("screen" + gears.unlockFeature[i] + "Switcher").style.display = "none"
			}
		}
	}

	switch(globalDisplays.currentScreen)
	{
		case 0: 
			document.getElementById("screenTowerSwitcher").className = "screenSwitcher-selected"
			document.getElementById("screenLibrarySwitcher").className = "screenSwitcher"
			document.getElementById("screenLabSwitcher").className = "screenSwitcher"
			document.getElementById("screenOfficeSwitcher").className = "screenSwitcher"
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
		case 1:
			document.getElementById("screenTowerSwitcher").className = "screenSwitcher"
			document.getElementById("screenLibrarySwitcher").className = "screenSwitcher-selected"
			document.getElementById("screenLabSwitcher").className = "screenSwitcher"
			document.getElementById("screenOfficeSwitcher").className = "screenSwitcher"
	}

    document.getElementById("buildNumber").innerHTML = metaData.build
}

export function switchScreen(screenNumber)
{
	globalDisplays.currentScreen = screenNumber
}