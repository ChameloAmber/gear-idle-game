function VisualUpdate() {
    switch(currentScreen){
        case "Gear": GearVisualUpdate(); break;
        case "Reserve": ReserveVisualUpdate(); break;
    }
}

function SwitchScreen(newScreen) {
    if(newScreen == currentScreen){
        return
    }

    switch(currentScreen){
        case "Gear": GearCloseScreen(); break;
        case "Reserve": ReserveCloseScreen(); break;
    }

    currentScreen = newScreen;
    switch(newScreen){
        case "Gear": GearOpenScreen(); break;
        case "Reserve": ReserveOpenScreen(); break;
    }
}