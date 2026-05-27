function calculateDynamicPrice(basePrice, occupancyRate, dayOfWeek, seasonFactor, competitorPrice) {
  let price = basePrice;

  if (occupancyRate > 0.90) {
    price *= 1.40;
  } else if (occupancyRate > 0.75) {
    price *= 1.25;
  } else if (occupancyRate > 0.50) {
    price *= 1.10;
  } else if (occupancyRate < 0.30) {
    price *= 0.75;
  }


  if (dayOfWeek === 5 || dayOfWeek === 6) {
    price *= 1.35;
  } else if (dayOfWeek === 0) {
    price *= 1.15;
  } else if (dayOfWeek === 1) {
    price *= 0.85;
  }

  price *= seasonFactor;

  const priceDifference = competitorPrice - basePrice;
  if (priceDifference > 50) {
    price *= 1.08;
  } else if (priceDifference < -50) {
    price *= 0.95;
  }

  return Math.round(price * 100) / 100;
}

function calculateSeasonalityFactor(month, region) {
  const seasonalityMatrix = {
    'beach': [0.60, 0.65, 0.70, 0.80, 0.90, 1.30, 1.50, 1.40, 1.10, 0.85, 0.70, 0.75],
    'mountain': [0.70, 0.75, 0.80, 0.85, 1.20, 1.40, 1.50, 1.45, 1.10, 0.90, 0.80, 0.85],
    'city': [0.85, 0.90, 0.95, 1.00, 1.05, 1.10, 1.15, 1.10, 1.05, 1.00, 0.95, 0.90]
  };

  return seasonalityMatrix[region][month - 1];
}

function calculateDemandMultiplier(bookingsInLast24Hours, averageDailyBookings) {
  const demandRatio = bookingsInLast24Hours / averageDailyBookings;

  if (demandRatio > 3.0) {
    return 1.50;
  } else if (demandRatio > 2.0) {
    return 1.35;
  } else if (demandRatio > 1.5) {
    return 1.20;
  } else if (demandRatio < 0.5) {
    return 0.80;
  }

  return 1.0;
}

function calculateInventoryAdjustment(daysUntilCheckIn, availableRooms, totalRooms) {
  const occupancyRate = (totalRooms - availableRooms) / totalRooms;

  if (daysUntilCheckIn <= 3) {
    if (occupancyRate > 0.80) {
      return 1.25;
    }
    return 0.90;
  }

  if (daysUntilCheckIn <= 7) {
    if (occupancyRate > 0.70) {
      return 1.15;
    }
    return 0.95;
  }

  if (daysUntilCheckIn <= 14) {
    return occupancyRate > 0.60 ? 1.10 : 1.0;
  }

  return 1.0;
}

function calculateLoyaltyAdjustment(customerBookings, totalSpent, membershipLevel) {
  let adjustment = 1.0;

  if (membershipLevel === 'platinum') {
    adjustment = 0.85;
  } else if (membershipLevel === 'gold') {
    adjustment = 0.90;
  } else if (membershipLevel === 'silver') {
    adjustment = 0.95;
  }

  if (customerBookings > 50) {
    adjustment *= 0.90;
  } else if (customerBookings > 20) {
    adjustment *= 0.95;
  }

  return adjustment;
}

function shouldApplyPriceFloor(calculatedPrice, basePrice) {
  const minimumMargin = 0.15;
  const priceFloor = basePrice * (1 + minimumMargin);

  return calculatedPrice < priceFloor ? priceFloor : calculatedPrice;
}
