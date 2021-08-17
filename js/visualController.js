function updateVisual()
{
	switch(globalDisplays.currentScreen)
	{
		case 0: 
		for(i = 0; i < 5; i++)
		{
			if(gears.state[i] == 1)
			{
                document.getElementById("gear" + (i+1) + "Number").innerHTML = Math.floor(gears.progress[i])
                document.getElementById("gear" + (i+1) + "Max").innerHTML = Math.floor(gears.progress[i])
                document.getElementById("gear" + (i+1) + "Progress").style.width = (gears.progress[i] / gears.max[i] * 100) + "%"
                console.log(i)
                console.log(i+1)
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