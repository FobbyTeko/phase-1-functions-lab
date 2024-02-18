// Code your solution in this file!
function distanceFromHqInBlocks(Value) {
    if (Value < 42) {
        return (42-Value)
    } else {
        return (Value-42)
    }
}
    
function distanceFromHqInFeet(Value) {
    return distanceFromHqInBlocks(Value) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if(start >= destination) {
        return (start - destination) * 264;
    } else {
            return (destination - start) * 264;
    }
}
    
function calculatesFarePrice(start, destination) {
    let feetTravelled = 0;
    if(start >= destination) {
        feetTravelled = (start - destination) * 264;
    } else {
        feetTravelled = (destination - start) * 264;
    }

    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled <=2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}