const pricingMatrix = {
  Starter: {
    base: 19,
  },
  Professional: {
    base: 49,
  },
  Enterprise: {
    base: 99,
  },
};

export const currencies = {
  USD: {
    symbol: "$",
    multiplier: 1,
  },

  EUR: {
    symbol: "€",
    multiplier: 0.92,
  },

  INR: {
    symbol: "₹",
    multiplier: 83,
  },
};

export default pricingMatrix;