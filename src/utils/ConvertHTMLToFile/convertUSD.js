const convertUSD = (value) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return formatter.format(value);
};

export default convertUSD;
