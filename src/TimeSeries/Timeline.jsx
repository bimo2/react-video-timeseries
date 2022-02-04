import { useCurrentFrame, useVideoConfig } from "remotion";
import { fontFamily } from './styles';

export default function ({ range }) {
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const style = {
    fontFamily,
    fontSize: '2.75rem',
    position: 'absolute',
    bottom: '60px',
    right: '60px',
  };

  const labelStyle = {
    display: 'inline-block',
    textAlign: 'center',
  };

  const [start, end] = range;
  const progress = (end.getTime() - start.getTime()) * (frame / durationInFrames);
  const date = new Date(start.getTime() + progress);
  const mm = `${date.getMonth() + 1}`.padStart(2, '0');
  const dd = `${date.getDate()}`.padStart(2, '0');

  return (
    <div style={style}>
      <p style={{ ...labelStyle, minWidth: '120px', fontWeight: '700' }}>{date.getFullYear()}</p>
      <p style={{ ...labelStyle, minWidth: '70px', fontWeight: '400' }}>{mm}</p>
      <p style={{ ...labelStyle, minWidth: '70px', fontWeight: '300' }}>{dd}</p>
    </div>
  );
}
