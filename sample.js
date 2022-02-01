export default {
  video: {
    height: 1000,
    width: 1000,
    speed: 1,
  },
  data: {
    title: 'S&P 500 by Market Cap.',
    range: [new Date('2001'), new Date('2022')],
    prefix: '$',
    suffix: ' B',
    colors: ['#000000', '#f25022', '#ff9900', '#4285f4', '#3c5898', '#e82127', '#7ab547', '#211e1e', '#1a1f71'],
    max: 6,
    csv: [
      ['AAPL', 'MSFT', 'AMZN', 'GOOG', 'FB', 'TSLA', 'NVDA', 'JPM', 'V'],
      [7.71, 358.05, 4.03, null, null, null, 6.44, 72.08, null],
      [5.16, 276.63, 7.32, null, null, null, 1.2, 47.96, null],
      [7.88, 295.29, 21.22, null, null, null, 2.5, 75.02, null],
      [26.05, 290.71, 18.14, null, null, null, 3.91, 138.72, null],
      [60.79, 271.54, 19.61, 215.4, null, null, 6.25, 138.38, null],
      [72.98, 291.94, 16.33, 291.8, null, null, 13.15, 167.19, null],
      [174.03, 332.11, 38.53, 433.07, null, null, 18.9, 146.98, null],
      [75.99, 172.92, 21.99, 355.37, null, null, 4.33, 117.68, 44.37],
      [190.98, 268.55, 59.72, 262.87, null, null, 10.36, 164.26, 60.9],
      [297.09, 234.52, 81.18, 299.95, null, 2.52, 8.94, 165.87, 48.37],
      [377.51, 218.38, 78.71, 400.05, null, 2.97, 8.46, 126.34, 67.76],
      [499.69, 223.66, 113.89, 494.63, 63.14, 3.86, 7.66, 167.25, 99.79],
      [500.74, 310.5, 183.04, 817.63, 139.19, 18.51, 9.1, 219.65, 140.37],
      [643.12, 381.72, 144.31, 359.5, 216.73, 27.95, 10.89, 232.47, 161.09],
      [583.61, 439.67, 318.34, 528.16, 296.6, 31.54, 17.73, 241.89, 186.08],
      [608.96, 483.16, 356.31, 539.06, 331.59, 34.42, 57.53, 308.76, 186.81],
      [860.88, 659.9, 563.53, 729.45, 512.75, 52.32, 117.26, 371.05, 266.14],
      [746.07, 780.36, 737.46, 723.55, 374.13, 57.44, 81.43, 319.78, 299.35],
      [1287, 1200, 920.22, 921.13, 585.37, 75.71, 144, 429.91, 416.79],
      [2255, 1681, 1634, 1185, 778.03, 668.9, 323.24, 387.33, 482.17],
      [2892, 2512, 1735, 1951, 932.55, 1071, 738.62, 464.74, 470.89],
      [2782, 2310, 1460, 1768, 839.28, 849.95, 569.17, 431.63, 495.62]
    ],
  },
};
