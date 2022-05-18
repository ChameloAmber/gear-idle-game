var gearsCurrent = [0, 0, 0, 0, 0];
var gearsRatio = [BigNumber(10), BigNumber(2), BigNumber(3), BigNumber(4), BigNumber(5)];
var gearsEnergy = [0, 0, 0, 0, 0];

function Update() {

    total = BigNumber(1)
    for(i = 0; i < 5; i++) {
        gearsCurrent[i] += 1
        total = total.multipliedBy(gearsRatio[i])
        if (total.isLessThanOrEqualTo(gearsCurrent[i])) {
            gearsEnergy[i]++
            gearsCurrent[i] = 0
        }
    }

    console.log(gearsCurrent)
    console.log(gearsEnergy)
}