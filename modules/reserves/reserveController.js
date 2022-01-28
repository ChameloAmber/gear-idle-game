function ReserveToggleDeposit() {
    if(reserve.withdrawing){reserve.withdrawing = false;}
    reserve.depositing = !reserve.depositing;
    if(reserve.depositing) {
        gearReserveReduction = reserve.drain;
    } else {
        gearReserveReduction = 0
    }
}

function ReserveToggleWithdraw() {
    if(reserve.depositing){reserve.depositing = false;}
    reserve.withdrawing = !reserve.withdrawing;
    if(reserve.withdrawing) {
        gearReserveReduction = reserve.drain.multipliedBy(BigNumber(-1));
    } else {
        gearReserveReduction = 0
    }
}

function ReserveTick() {
    if(reserve.depositing) {
        reserve.current = reserve.current.plus(reserve.drain.dividedBy(ticksPerSecond));
        if(reserve.current.isGreaterThanOrEqualTo(reserve.max)) {
            ReserveToggleDeposit();
            reserve.current = reserve.max;
        }
    }

    if(reserve.withdrawing) {
        reserve.current = reserve.current.minus(reserve.drain.dividedBy(ticksPerSecond));
        if(reserve.current.isLessThanOrEqualTo(BigNumber(0))) {
            ReserveToggleWithdraw();
            reserve.current = BigNumber(0);
        }
    }

    if(!reserve.withdrawing && reserve.current.isGreaterThan(BigNumber(0)) && reserve.current.isLessThan(reserve.max)) {
        reserve.current = reserve.current.plus(reserve.current.multipliedBy(reserve.interest.dividedBy(ticksPerSecond.multipliedBy(360000))));
        if(reserve.current.isGreaterThanOrEqualTo(reserve.max)) {
            reserve.current = reserve.max;
        }
    }
}

function ReserveVisualUpdate() {
    document.getElementById("reserveCurrent").innerHTML = reserve.current.toFixed(10);
    document.getElementById("reserveMax").innerHTML = reserve.max.toFixed(4);
    if(reserve.depositing) {
        document.getElementById("reserveDeposit").innerHTML = "Deposit: On";
    } else {
        document.getElementById("reserveDeposit").innerHTML = "Deposit: Off";
    }
    if(reserve.withdrawing) {
        document.getElementById("reserveWithdraw").innerHTML = "Withdraw: On";
    } else {
        document.getElementById("reserveWithdraw").innerHTML = "Withdraw: Off";
    }
}

function ReserveOpenScreen() {
    document.getElementById("reserveScreen").style.display = "block";
}

function ReserveCloseScreen() {
    document.getElementById("reserveScreen").style.display = "none";
}