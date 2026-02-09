/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
<<<<<<< HEAD
  const prices: number[] = data.prices;
  const windowSize: number = data.windowSize;

  if (!prices || prices.length < windowSize) {
    postMessage(null);
    return;
  }

  const window = prices.slice(-windowSize);

  const mean =
    window.reduce((sum: number, price: number) => sum + price, 0) /
    window.length;

  const variance =
    window.reduce(
      (sum: number, price: number) =>
        sum + Math.pow(price - mean, 2),
      0
    ) / window.length;

  const volatility = Math.sqrt(variance);

  postMessage({
    mean,
    volatility
  });
});
=======
  const prices: number[] = data;

  // Requerimiento: Cálculo de promedio móvil
  const average = prices.length > 0
    ? prices.reduce((a, b) => a + b, 0) / prices.length
    : 0;

  // Requerimiento: Cálculo de volatilidad (Desviación estándar)
  const variance = prices.length > 0
    ? prices.reduce((a, b) => a + Math.pow(b - average, 2), 0) / prices.length
    : 0;
  const volatility = Math.sqrt(variance);

  postMessage({ average, volatility });
});
>>>>>>> 94d00f1dd38fb08568545fe2d149adce6ce6167a
