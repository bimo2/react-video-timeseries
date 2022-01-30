import { Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import BarChart from "./BarChart";

export default function ({ max, csv, colors }) {
  const frame = useCurrentFrame();
  const video = useVideoConfig();

  return (
    <div style={{ flex: 1, backgroundColor: '#fff' }}>
      <Sequence from={0} durationInFrames={video.durationInFrames}>
        <BarChart
          frame={frame}
          height={video.height}
          width={video.width}
          max={max}
          csv={csv}
          colors={colors}
        />
      </Sequence>
    </div>
  );
}
