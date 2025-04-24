export const modifyCryptoData = (data) => {
  return data.map((coin) => {
    const priceFlucation = randomFluctuation(coin.price);
    const volumeFluctuation = randomFluctuation(coin.volume24h);
    const change1h = randomPercentage();
    const change24h = randomPercentage();
    const change7d = randomPercentage();

    return {
      ...coin,
      price: coin.price + priceFlucation,
      volume24h: coin.volume24h + volumeFluctuation,
      change1h,
      change24h,
      change7d,
    };
  });
};

export const randomFluctuation = (value) => {
  const maxChange = value * 0.01;
  return Math.random() * maxChange * (Math.random < 0.5 ? -1 : 1);
};
export const randomPercentage = () => {
  return parseFloat(Math.random() * 5 * (Math.random() < 0.5 ? -1 : 1));
};
