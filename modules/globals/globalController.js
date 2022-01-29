function StartUp() {
    BigNumber.set({DECIMAL_PLACES:45})
    BigNumber.set({EXPONENTIAL_AT:1e+9})

    currentScreen = "Gear"
    GearOpenScreen();

    // GEARS
    gears.push(new Gear(BigNumber(0), BigNumber(60), BigNumber(0))); // Floor 1
    gears.push(new Gear(BigNumber(0), BigNumber(5), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(6), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(7), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(8), BigNumber(0))); // Floor 5
    gears.push(new Gear(BigNumber(0), BigNumber(16), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(23), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(33), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(46), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(64), BigNumber(0))); // Floor 10
    gears.push(new Gear(BigNumber(0), BigNumber(128), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(206), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(330), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(520), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(820), BigNumber(0))); // Floor 15
    gears.push(new Gear(BigNumber(0), BigNumber(1640), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(2950), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(5300), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(9500), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(17500), BigNumber(0))); // Floor 20

    // RESERVE
    reserve = new Reserve(BigNumber(0), BigNumber(14400), BigNumber(0.2), BigNumber(1), false, false);

    // ============ DEBUG SECTOR ============
    reserve.active = true;
}

function TickUpdate() {

    thisTick = Date.now();
    TPScounter = 1000 / (thisTick - prevTick);
    prevTick = thisTick;
    document.getElementById("TPScounter").innerHTML = TPScounter;

    GearTick();
    if(reserve.active) {ReserveTick();}
}