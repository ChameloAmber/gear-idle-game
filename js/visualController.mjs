import { globalDisplays, metaData } from "./mainScript.mjs"
import { gears } from "./gearController.mjs"

export function updateVisual()
{
	switch(globalDisplays.currentScreen)
	{
		case 0: 
		document.getElementById("screenTower").className = "screenSwitcher-selected"
		document.getElementById("screenLibrary").className = "screenSwitcher"
		document.getElementById("screenLab").className = "screenSwitcher"
		document.getElementById("screenGarden").className = "screenSwitcher"
		for(let i = 0; i < 5; i++)
		{
			if(gears.state[i] == 1)
			{
                document.getElementById("gear" + (i+1) + "Number").innerHTML = gears.progress[i].multipliedBy(100).toFixed(4) + "%"
				document.getElementById("gear" + (i+1) + "Energy").innerHTML = gears.energy[i].toFixed(0)
                document.getElementById("gear" + (i+1) + "Ratio").innerHTML = gears.ratio[i].toFixed(0) + ":1"
                document.getElementById("gear" + (i+1) + "Progress").style.width = gears.progress[i].multipliedBy(100).toFixed(4) + "%"
				document.getElementById("gear" + (i+1) + "Box").style.display = "block"
				if(i == 0) {document.getElementById("screenTower").style.display = "block"}
				if(i == 1) {document.getElementById("screenLibrary").style.display = "block"}
				if(i == 2) {document.getElementById("screenLab").style.display = "block"}
				if(i == 4) {document.getElementById("screenGarden").style.display = "block"}
			}
			else
			{
				document.getElementById("gear" + (i+1) + "Box").style.display = "none"
				if(i == 1) {document.getElementById("screenLibrary").style.display = "none"}
				if(i == 2) {document.getElementById("screenLab").style.display = "none"}
				if(i == 4) {document.getElementById("screenGarden").style.display = "none"}
			}
		}
		break;
	}

    document.getElementById("buildNumber").innerHTML = metaData.build
}