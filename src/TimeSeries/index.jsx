import { Sequence, useVideoConfig } from "remotion";
import BarChart from "./BarChart";
import Timeline from "./Timeline";
import Title from "./Title";

export default function ({ title, range, max, csv, colors, prefix, suffix }) {
  const video = useVideoConfig();

  return (
    <div style={{ flex: 1, backgroundColor: '#fff' }}>
      <Sequence from={0} durationInFrames={video.durationInFrames}>
        <Title>{title}</Title>
      </Sequence>
      <Sequence from={0} durationInFrames={video.durationInFrames}>
        <BarChart
          height={video.height}
          width={video.width}
          max={max}
          csv={csv}
          colors={colors}
          prefix={prefix}
          suffix={suffix}
        />
      </Sequence>
      <Sequence from={0} durationInFrames={video.durationInFrames}>
        <Timeline range={range} />
      </Sequence>
    </div>
  );
}
