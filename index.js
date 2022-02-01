
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    const fareMultiplier = function (fare) {
        return fare * int;
    };
    return fareMultiplier;
}

const fareDoubler = fareMultiplier => {
    const double = createFareMultiplier(2);
    return double(fareMultiplier)
}

const fareTripler = fareMultiplier => {
    const triple = createFareMultiplier(3);
    return triple(fareMultiplier);
}

function selectDifferentDrivers (drivers, driversFunction) {
    return driversFunction(drivers);
}

//function selectDifferentDrivers(drivers, x) {}
//console.log(fareDoubler(6));