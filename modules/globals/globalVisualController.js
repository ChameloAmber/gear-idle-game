function Update() {
    switch(currentScreen){
        case "Gear": GearUpdate(); break;
    }
}

function SwitchScreen(newScreen) {
    if(newScreen == currentScreen){
        return
    }

    switch(currentScreen){
        case "Gear": GearCloseScreen(); break;
        case "Reserve": break;
    }

    currentScreen = newScreen;
    switch(newScreen){
        case "Gear": GearOpenScreen(); break;
        case "Reserve": break;
    }
}