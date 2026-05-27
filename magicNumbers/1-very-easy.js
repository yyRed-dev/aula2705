taxes = 0.15;
discount = 0.10;

function calculateSalesTax(amount) {
  return amount * taxes;
}

function applyDiscount(amount) {
  return amount * (1 - discount);
}

function calculateTotal(baseAmount) {
  const finalTaxes = calculateSalesTax(baseAmount);
  const finalDiscount = applyDiscount(baseAmount);
  return baseAmount + finalTaxes - finalDiscount;
}