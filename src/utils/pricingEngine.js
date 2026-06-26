import pricingMatrix, { currencies } from "../data/pricing";

const ANNUAL_DISCOUNT = 0.8;

export function calculatePrice(plan, currency, yearly) {
  const base = pricingMatrix[plan].base;

  const rate = currencies[currency].multiplier;

  let price = base * rate;

  if (yearly) {
    price = price * 12 * ANNUAL_DISCOUNT;
  }

  return {
    amount:
      currency === "INR"
        ? Math.round(price)
        : price.toFixed(2),

    symbol: currencies[currency].symbol,
  };
}

export function getPlans() {
  return Object.keys(pricingMatrix);
}

export function getCurrencies() {
  return Object.keys(currencies);
}