import { FC } from 'react';
import { Button } from './ui/button';

interface BoxTranscriptProps {
	transcript: string;
	isPlaying: boolean;
	video: string;
	videoKey: number;
}

const BoxTranscript: FC<BoxTranscriptProps> = ({
	transcript,
	isPlaying,
	video,
	videoKey,
}) => {
	return (
		<div className='border-solid border-2 border-gray-800 bg-yellow-50 p-5 flex flex-col mt-20'>
			<div className='p-5 flex flex-col'>
				<div className='flex-grow flex justify-center items-center h-96'>
					{/* <button onClick={handlePlay}>Play Video</button> */}
					{isPlaying && (
						<video
							key={videoKey}
							controls={true}
							autoPlay
							className='border-solid border-2 border-gray-50 max-h-80'
						>
							<source src={video} type='video/mp4' />
						</video>
					)}
				</div>
			</div>
			<p className='text-black text-lg bg-blue-300 max-w-max px-2 rounded-sm mb-4 overflow-wrap'>
				{transcript}
			</p>
			<div className='flex flex-col gap-1 w-auto'>
				{/* <Button onClick={startListening}>Start</Button>
				<Button onClick={SpeechRecognition.stopListening}>Stop</Button> */}
			</div>
		</div>
	);
};

export default BoxTranscript;
