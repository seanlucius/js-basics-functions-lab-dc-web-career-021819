// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  if (pickup < 42) {
    return 42 - pickup
  } else if (pickup > 42) {
    return pickup - 42
  }
}

function distanceFromHqInFeet(pickup) {
  let blocks = distanceFromHqInBlocks(pickup)
  return blocks * 264
}

function distanceTravelledInFeet(start, finish) {
  let difference = finish > start ? finish - start : start - finish
  return difference * 264
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  let fare;
  if (distance < 400) {
    fare = 0;
  } else if (distance < 2000) {
    fare = (distance - 400) * 0.02
  } else if (distance < 2500) {
    fare = 25
  } else {
    fare = 'cannot travel that far'
  }
  return fare;
}
