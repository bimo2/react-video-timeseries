import { Composition } from 'remotion';
import TimeSeries from './TimeSeries';

export default function ({ video, data }) {
	const isReadable = data.csv.every((entry) => entry.length === data.csv[0].length);

	if (!isReadable) throw new Error('Invalid CSV data');

	const durationInFrames = data.csv.length - 1;
	const fps = Math.ceil(durationInFrames / video.duration);

	return (
		<>
			<Composition
				id="TimeSeries"
				component={TimeSeries}
				height={video.height}
				width={video.width}
				durationInFrames={durationInFrames}
				fps={fps}
				defaultProps={data}
			/>
		</>
	);
};
