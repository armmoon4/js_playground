function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    let doneCount = waitingTimes.length;
    let total = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        total += waitingTimes[i];
    }

    let average = Math.round(total / doneCount);
    let remainingPeople = serialNumber - 1 - doneCount;

    if (remainingPeople <= 0) {
        return 0;
    }

    let wait = average * remainingPeople;
    return wait;
}
