import { FC } from 'react';
import { Button } from './ui/button';

interface BoxTranscriptProps {
	transcript: string;
}

const BoxTranscript: FC<BoxTranscriptProps> = ({}) => {
	return (
		<div className='border-solid'>
			<div>
				<h1 className='text-gray-800 text-center text-5xl font-bold'>
					Hologram Interaktif
				</h1>
				<p className='text-xl mt-10 text-center'>
					Ayo tanya pertanyaanmu! Media interaktif belajar mengenai Pura
				</p>
			</div>

			<div className='border-solid border-2 border-gray-800 bg-yellow-50 h-96 p-5  flex flex-col mt-20'>
				<p className='text-black text-lg'>{transcript}</p>

				<div className='mt-auto flex flex-col gap-1'>
					<Button onClick={startListening}>Start</Button>
					<Button onClick={SpeechRecognition.stopListening}>Stop</Button>
				</div>
			</div>
		</div>
	);
};

export default BoxTranscript;
