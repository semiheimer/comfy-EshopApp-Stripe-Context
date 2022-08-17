export const formatPrice = (price) => {
  //   const newPrice1 = price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  const newPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100);

  return newPrice;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') unique = unique.flat();
  return ['all', ...new Set(unique)];
};
