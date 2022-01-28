function GearTick() {
    let tk = BigNumber(1).minus(gearReserveReduction).dividedBy(ticksPerSecond);
    for (i = 0; i < gears.length; i++) {
        tk = tk.dividedBy(gears[i].ratio.toNumber());
        gears[i].current = gears[i].current.plus(tk);

        if(gears[i].current.isGreaterThanOrEqualTo(1)) {
            gears[i].current = BigNumber(0);
            gears[i].energy = gears[i].energy.plus(1)

            switch(i) {
                case 1:
                    document.getElementById("gearBox3").style.display = "block";
                    document.getElementById("gearBox4").style.display = "block";
                    break;
                case 3:
                    document.getElementById("gearBox5").style.display = "block";
                    document.getElementById("gearBox6").style.display = "block";
                    break;
                case 5:
                    document.getElementById("gearBox7").style.display = "block";
                    document.getElementById("gearBox8").style.display = "block";
                    document.getElementById("gearBox9").style.display = "block";
                    break;
                case 9:
                    document.getElementById("gearBox10").style.display = "block";
                    document.getElementById("gearBox11").style.display = "block";
                    document.getElementById("gearBox12").style.display = "block";
                    document.getElementById("gearBox13").style.display = "block";
                    document.getElementById("gearBox14").style.display = "block";
                    document.getElementById("gearBox15").style.display = "block";
                    document.getElementById("gearBox16").style.display = "block";
                    document.getElementById("gearBox17").style.display = "block";
                    document.getElementById("gearBox18").style.display = "block";
                    document.getElementById("gearBox19").style.display = "block";
                    break;
            }
        }
    }
}

function GearVisualUpdate() {
    for(i = 0; i < gears.length; i++) {
        document.getElementById("gear" + i + "Ratio").innerHTML = "1:" + gears[i].ratio.toFixed(0);
        let deci = 4;
        if(i == gears.length-1) {
            deci = 42;
        } else if(i >= 0 && i < 5) {
            deci = 4;
        } else if (i >= 5 && i < 10) {
            deci = 6;
        } else if (i >= 10 && i < 15) {
            deci = 8;
        } else if (i >= 15) {
            deci = 12;
        }
        document.getElementById("gear" + i + "Percent").innerHTML = gears[i].current.multipliedBy(100).toFixed(deci) + "%";
        document.getElementById("gear" + i + "Progress").style.width = gears[i].current.multipliedBy(87.5).toFixed(4) + "%";
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