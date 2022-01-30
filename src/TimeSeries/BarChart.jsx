const BAR_PX = 60;
const BORDER_PX = 10;
const SPACING_PX = 20;
const CHARACTER_PX = 26;
const FLOATING_POINTS = 0;

export default function ({ frame, height, width, max, csv, colors, prefix, suffix }) {
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

  const fontStyle = {
    fontFamily: '-apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  };

  const labelSafeMargin = Math.max(...renderData.map((a) => a.label.length)) * CHARACTER_PX;
  const valueSafeMargin = Math.max(...renderData.map((a) => a.value.toFixed(FLOATING_POINTS).length + prefix.length + suffix.length)) * CHARACTER_PX;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
      {renderData.map(({ label, color, value }, i) => {
        const barWidth = ((renderX - labelSafeMargin) / maxValue) * value;
        const y = offsetY + (i * (BAR_PX + SPACING_PX));
        const textY = y + + (BAR_PX / 2) + 2;

        return (
          <g key={label}>
            <rect
              fill={color}
              x={BORDER_PX}
              y={y}
              height={BAR_PX}
              width={barWidth}
              rx={10}
            />
            <text
              fill="#000000"
              x={barWidth + 20}
              y={textY}
              alignmentBaseline="middle"
              style={{ ...fontStyle, fontSize: BAR_PX * 0.5, fontWeight: 'bold' }}
            >
              {label}
            </text>
            {barWidth > valueSafeMargin && (
              <text
                fill="#ffffff"
                fillOpacity={0.75}
                x={barWidth - 15}
                y={textY}
                textAnchor="end"
                alignmentBaseline="middle"
                style={{ ...fontStyle, fontSize: BAR_PX * 0.45 }}
              >
                {`${prefix}${value.toFixed(FLOATING_POINTS)}${suffix}`}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  );
}
