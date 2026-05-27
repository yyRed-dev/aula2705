function calculateShippingCost(weight, distance) {
  let weightCost = weight * 2.5;
  let distanceCost = distance * 0.05;
  
  return 10 + weightCost + distanceCost;
}

function applyWeightSurcharge(cost, weight) {
  if (weight > 50) {
    return cost * 1.25;
  }
  if (weight > 30) {
    return cost * 1.15;
  }
  return cost;
}

function applyDistanceSurcharge(cost, distance) {
  if (distance > 1000) {
    return cost * 1.30;
  }
  if (distance > 500) {
    return cost * 1.15;
  }
  return cost;
}

function calculateDeliveryTime(distance) {
  const hours = distance / 80;
  const days = Math.ceil(hours / 24);
  return days;
}

function isExpressDelivery(distance) {
  return distance <= 200;
}
