const BAR_PX = 50;
const BORDER_PX = 10;
const SPACING_PX = 15;

export default function ({ frame, height, width, max, csv, colors }) {
  const [labels, ...data] = csv;

  const frameData = data[frame].map((value, i) => ({
    label: labels[i],
    color: colors[i],
    value,
  }));

  const renderData = frameData
    .filter((a) => a.value)
    .sort((a, b) => b.value - a.value)
    .slice(0, max);

  const maxValue = Math.max(...renderData.map((a) => a.value));
  const renderX = width - (2 * BORDER_PX);
  const renderY = (renderData.length * BAR_PX) + ((renderData.length - 1) * SPACING_PX) + (2 * BORDER_PX);
  const offsetY = (height - renderY) / 2;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
      {renderData.map(({ label, color, value }, i) => (
        <g key={label}>
          <rect
            fill={color}
            x={BORDER_PX}
            y={offsetY + (i * (BAR_PX + SPACING_PX))}
            height={BAR_PX}
            width={(renderX / maxValue) * value}
            rx={10}
          />
        </g>
      ))}
    </svg>
  );
}
