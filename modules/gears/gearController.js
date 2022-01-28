function startUp() {

    BigNumber.set({DECIMAL_PLACES:60})
    BigNumber.set({EXPONENTIAL_AT:1e+9})

    /*gears.push(new Gear(BigNumber(0), BigNumber(20), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(8), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(12), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(20), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(30), BigNumber(0)));*/
    gears.push(new Gear(BigNumber(0), BigNumber(10), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(3), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(3), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(3), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(3), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(3), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(3), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(3), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(3), BigNumber(0)));
    gears.push(new Gear(BigNumber(0), BigNumber(3), BigNumber(0)));
}

function tick() {
    let tk = BigNumber(0.05);
    for (i = 0; i < gears.length; i++) {
        tk = tk.dividedBy(gears[i].ratio.toNumber());
        gears[i].current = gears[i].current.plus(tk);

        if(gears[i].current.isGreaterThanOrEqualTo(1)) {
            gears[i].current = BigNumber(0);
            gears[i].energy = gears[i].energy.plus(1)

            if(i < gears.length - 2) {
                document.getElementById("gearBox" + (i + 3)).style.display = "block";
            }
        }
    }
}

function GearUpdate() {
    for(i = 0; i < gears.length; i++) {
        document.getElementById("gear" + i + "Ratio").innerHTML = "1:" + gears[i].ratio.toFixed(0);
        document.getElementById("gear" + i + "Percent").innerHTML = gears[i].current.multipliedBy(100).toFixed(4) + "%";
        document.getElementById("gear" + i + "Progress").style.width = gears[i].current.multipliedBy(84).toFixed(4) + "%";
        document.getElementById("gear" + i + "Energy").innerHTML = gears[i].energy.toFixed(0);
    }
}

function GearOpenScreen() {
    document.getElementById("gearScreen").style.display = "block";
}

function GearCloseScreen() {
    document.getElementById("gearScreen").style.display = "none";
}

function gearReset(ind) {
    console.log(ind)
}