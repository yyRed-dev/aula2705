function calculateAutoInsurancePremium(vehicleValue, driverAge, yearsLicensed, accidents, violations) {
  let basePremium = vehicleValue * 0.05;

  if (driverAge < 25) {
    basePremium *= 1.50;
  } else if (driverAge < 35) {
    basePremium *= 1.20;
  } else if (driverAge > 65) {
    basePremium *= 1.15;
  }

  if (yearsLicensed < 2) {
    basePremium *= 1.40;
  } else if (yearsLicensed < 5) {
    basePremium *= 1.20;
  }

  basePremium += accidents * 500;
  basePremium += violations * 250;

  if (accidents === 0 && violations === 0) {
    basePremium *= 0.85;
  }

  return basePremium;
}

function calculateCoverageMultiplier(coverageType, deductible) {
  let multiplier = 1.0;

  if (coverageType === 'comprehensive') {
    multiplier = 1.35;
  } else if (coverageType === 'collision') {
    multiplier = 1.15;
  } else if (coverageType === 'liability') {
    multiplier = 0.95;
  }

  if (deductible === 500) {
    multiplier *= 1.10;
  } else if (deductible === 1000) {
    multiplier *= 0.95;
  } else if (deductible === 2500) {
    multiplier *= 0.80;
  }

  return multiplier;
}

function calculateVehicleRiskFactor(vehicleAge, vehicleType, safetyRating) {
  let riskFactor = 1.0;

  if (vehicleAge > 10) {
    riskFactor *= 1.25;
  } else if (vehicleAge > 5) {
    riskFactor *= 1.10;
  }

  if (vehicleType === 'sports') {
    riskFactor *= 1.40;
  } else if (vehicleType === 'luxury') {
    riskFactor *= 1.30;
  } else if (vehicleType === 'suv') {
    riskFactor *= 1.15;
  }

  if (safetyRating >= 5) {
    riskFactor *= 0.90;
  } else if (safetyRating >= 4) {
    riskFactor *= 0.95;
  }

  return riskFactor;
}

function applyLoyaltyDiscount(yearsAsCustomer, basePremium) {
  if (yearsAsCustomer >= 10) {
    return basePremium * 0.80;
  }
  if (yearsAsCustomer >= 5) {
    return basePremium * 0.90;
  }
  if (yearsAsCustomer >= 2) {
    return basePremium * 0.95;
  }
  return basePremium;
}
