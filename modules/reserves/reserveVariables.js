class Reserve {
    constructor(current, max, drain, interest, depositing, withdrawing, active) {
        this.current = current;
        this.max = max;
        this.drain = drain;
        this.interest = interest;
        this.depositing = depositing;
        this.withdrawing = withdrawing;
        this.active = active;
    }
}

var reserve;

/*

    THE RESERVE
    Starting amount - 4 hours (14400 E)

    Depositing - consume 0.2 energy per second
    Banking - 1% per hour
    Withdrawing - add 0.2 energy per second

    DEPOSIT WITH ENERGY
    Tier 1 (Lv. 1 - 3) | 0% increase
    Tier 2 (Lv. 4 - 10) | 3% increase
    Tier 3 (Lv. 11 - 15) | 7% increase
    Tier 4 (Lv. 16 - 19) | 15% increase

*/