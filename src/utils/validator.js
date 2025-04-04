export const isValidNumber = (n) => typeof n === 'number' && !isNaN(n);
export const isPositiveInteger = (n) => Number.isInteger(n) && n >= 0;
