function calculateNetSalary(grossSalary) {
  const incomeTax = grossSalary * 0.15;
  const socialSecurity = grossSalary * 0.08;
  const healthInsurance = grossSalary * 0.05;
  
  return grossSalary - incomeTax - socialSecurity - healthInsurance;
}

function calculateBonus(salary, yearsOfService) {
  if (yearsOfService >= 5) {
    return salary * 0.20;
  }
  if (yearsOfService >= 2) {
    return salary * 0.10;
  }
  return 0;
}

function calculateHourlyRate(monthlySalary) {
  return monthlySalary / 160;
}

function calculateOvertimePay(hourlyRate, overtimeHours) {
  return hourlyRate * overtimeHours * 1.5;
}
