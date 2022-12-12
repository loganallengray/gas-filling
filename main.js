const fillGasTank = (gallons) => {
    if (gallons > 15) {
        console.log("You cannot add this much to the gas tank.");
    } else {
        console.log(`I filled the tank with ${gallons} of gas`);
    }
}

fillGasTank(15);
fillGasTank(20);
fillGasTank(10);