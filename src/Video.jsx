import { Composition } from 'remotion';
import TimeSeries from './TimeSeries';

export default function ({ video, data }) {
  const isReadable = data.csv.every((entry) => entry.length === data.csv[0].length);

  if (!isReadable) throw new Error('Invalid CSV data');

  const transitions = data.csv.length - 1;

  return (
    <>
      <Composition
        id="TimeSeries"
        component={TimeSeries}
        height={video.height}
        width={video.width}
        durationInFrames={40 * transitions}
        fps={40}
        defaultProps={data}
      />
    </>
  );
};
