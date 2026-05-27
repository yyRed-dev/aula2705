function calculateCreditScore(paymentHistory, debtRatio, creditAge, inquiries) {
  let score = 300;

  score += paymentHistory * 35;
  score += (1 - debtRatio) * 30;
  score += Math.min(creditAge / 10, 1) * 15;
  score -= inquiries * 5;

  return Math.min(score, 850);
}

function determineCreditLimit(monthlyIncome, creditScore) {
  if (creditScore >= 750) {
    return monthlyIncome * 10;
  }
  if (creditScore >= 650) {
    return monthlyIncome * 5;
  }
  if (creditScore >= 550) {
    return monthlyIncome * 2;
  }
  return monthlyIncome * 0.5;
}

function calculateInterestRate(creditScore, baseRate) {
  if (creditScore >= 750) {
    return baseRate;
  }
  if (creditScore >= 650) {
    return baseRate + 0.02;
  }
  if (creditScore >= 550) {
    return baseRate + 0.05;
  }
  return baseRate + 0.10;
}

function isHighRiskApplicant(creditScore, debtRatio, employmentMonths) {
  return creditScore < 550 || debtRatio > 0.50 || employmentMonths < 12;
}

function calculateMonthlyPayment(loanAmount, annualRate, months) {
  const monthlyRate = annualRate / 12;
  return (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
}
