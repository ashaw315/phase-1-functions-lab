const hq = 42

function distanceFromHqInBlocks(distance) {
    return Math.abs(hq - distance)
  
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(distanceFeet) {
  return Math.abs(hq - distanceFeet) * 264;
}
distanceFromHqInFeet(30);

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264
}
distanceTravelledInFeet(43, 48);

function calculatesFarePrice(start, destination) {
  let fare =  Math.abs(start - destination) * 264 
  if(fare <= 400) {
    return 0;
  } if(fare <= 2000) {
    return (fare - 400) * 0.02
  } if(fare < 2500) {
    return 25
  } if(fare > 2500) {
    return 'cannot travel that far'
  }
}

calculatesFarePrice(42, 102);