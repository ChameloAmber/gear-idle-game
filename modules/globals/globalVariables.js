var currentScreen = "Gear";
var prevTick = Date.now();
var TPScounter = 0;

var gearAmountBase = BigNumber(1);
var gearReserveReduction = BigNumber(0);

var ticksPerSecond = BigNumber(20);