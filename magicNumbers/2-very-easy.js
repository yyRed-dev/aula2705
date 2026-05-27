votingAge = 16;
adultAge = 18;
retiringAge = 65;
currentYear = 2025;

function isAdult(age) {
  return age >= adultAge;
}

function canVote(age) {
  return age >= votingAge;
}

function calculateBirthYear(currentAge) {
  return currentYear - currentAge;
}

function isRetirementAge(age) {
  return age >= retiringAge;
}