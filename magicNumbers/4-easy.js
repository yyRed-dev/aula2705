var taxes = 0.15;
var socialSecuriyValue = 0.08;
var healthInsuranceCost = 0.05;
var twoYearsBonus = 0.1;
var fiveYearsBonus = 0.2;
var hourValue = 160;
var overtimeBonus = 1.5;

function calculateNetSalary(grossSalary) {
  const incomeTax = grossSalary * taxes;
  const socialSecurity = grossSalary * socialSecuriyValue;
  const healthInsurance = grossSalary * healthInsuranceCost;
  
  return grossSalary - incomeTax - socialSecurity - healthInsurance;
}

function calculateBonus(salary, yearsOfService) {
  if (yearsOfService >= 5) {
    return salary * fiveYearsBonus;
  }
  if (yearsOfService >= 2) {
    return salary * twoYearsBonus;
  }
  return 0;
}

function calculateHourlyRate(monthlySalary) {
  return monthlySalary / hourValue;
}

function calculateOvertimePay(hourlyRate, overtimeHours) {
  return hourlyRate * overtimeHours * overtimeBonus;
}