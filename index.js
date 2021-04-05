function distanceFromHqInBlocks (num1) {
    if (num1 >= 42) {
        return num1 - 42
    }
    else {
        return 42 - num1
    }
}

function distanceFromHqInFeet (num2) {
    if (num2 >=42) {
        return (num2 - 42) * 264
    }
    else {
        return (42 - num2) * 264
    }
}

function distanceTravelledInFeet (num3, num4) {
    return Math.abs((num3 - num4) * 264)
}

function calculatesFarePrice (start, destination) {
    if (Math.abs((start-destination)*264) > 2500) {
        return 'cannot travel that far'
    }
    else if (Math.abs((start-destination)*264) > 2000) {
        return 25
    }
    else if (Math.abs((start-destination)*264) > 400) {
        return (Math.abs((start-destination)*264) - 400)*0.02
    }
    else if (Math.abs((start-destination)*264) > 0) {
        return 0
    }
}