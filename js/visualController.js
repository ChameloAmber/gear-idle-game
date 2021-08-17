function updateVisual()
{
	switch(globalDisplays.currentScreen)
	{
		case 0: document.getElementById("gear1Number").innerHTML = Math.floor(gears.progress[0]);	
		document.getElementById("gear1Max").innerHTML = "Max " + gears.max[0];
		document.getElementById("gear1Progress").style.width = (gears.progress[0] / gears.max[0] * 100) + "%";
		/*for(i = 1; i < 16; i++)
		{
			if(gears.state[i] == 1)
			{
				document.getElementById("gear" + (i+2)).style.display = "block";
			}
			else
			{
				document.getElementById("gear" + (i+2)).style.display = "none";
			}
		}*/
		break;
	}
}