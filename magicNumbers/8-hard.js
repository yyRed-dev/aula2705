function calculateIncomeTax(annualIncome) {
  let tax = 0;

  if (annualIncome <= 22500) {
    tax = 0;
  } else if (annualIncome <= 33500) {
    tax = (annualIncome - 22500) * 0.075;
  } else if (annualIncome <= 50000) {
    tax = 825 + (annualIncome - 33500) * 0.15;
  } else if (annualIncome <= 100000) {
    tax = 3300 + (annualIncome - 50000) * 0.225;
  } else {
    tax = 14550 + (annualIncome - 100000) * 0.275;
  }

  return tax;
}

function applyPersonalDeduction(income, dependents) {
  const deduction = 2500 + (dependents * 500);
  return Math.max(income - deduction, 0);
}

function calculateMedicalExpenseDeduction(medicalExpenses, income) {
  const threshold = income * 0.075;
  return Math.max(medicalExpenses - threshold, 0);
}

function calculateEducationCredit(tuitionPaid) {
  if (tuitionPaid <= 2500) {
    return tuitionPaid * 0.20;
  }
  return 500 + (tuitionPaid - 2500) * 0.10;
}

function calculateChildTaxCredit(children) {
  return children * 2000;
}

function isEligibleForEIC(income, children) {
  const maxIncome = children > 0 ? 50000 : 20000;
  return income <= maxIncome;
}
