function calculateCompoundInterest(principal, annualRate, years) {
  return principal * Math.pow(1 + annualRate / 12, 12 * years);
}

function calculateInvestmentReturn(initialAmount, monthlyContribution, annualRate, years) {
  let balance = initialAmount;
  const monthlyRate = annualRate / 12;
  
  for (let month = 0; month < years * 12; month++) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
  }
  
  return balance;
}

function calculateInflationAdjustedValue(currentValue, inflationRate, years) {
  return currentValue / Math.pow(1 + inflationRate, years);
}

function isHighRiskInvestment(volatility) {
  return volatility > 0.25;
}

function calculatePortfolioAllocation(totalAmount, riskLevel) {
  if (riskLevel === 1) {
    return { stocks: totalAmount * 0.20, bonds: totalAmount * 0.80 };
  }
  if (riskLevel === 2) {
    return { stocks: totalAmount * 0.50, bonds: totalAmount * 0.50 };
  }
  if (riskLevel === 3) {
    return { stocks: totalAmount * 0.80, bonds: totalAmount * 0.20 };
  }
}
