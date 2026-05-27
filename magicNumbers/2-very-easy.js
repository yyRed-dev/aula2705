var vottingAge = 16;
var adultAge = 18;
var retiringAge = 65;
var currentYear = 2025;

function isAdult(age) {
  return age >= adultAge;
}

function canVote(age) {
  return age >= vottingAge;
}

function calculateBirthYear(currentAge) {
  return currentYear - currentAge;
}

function isRetirementAge(age) {
  return age >= retiringAge;
}