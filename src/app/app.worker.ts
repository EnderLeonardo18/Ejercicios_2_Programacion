/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
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
