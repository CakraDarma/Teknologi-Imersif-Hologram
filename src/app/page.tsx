'use client';
import 'regenerator-runtime/runtime';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import { useEffect, useState } from 'react';
import { Button } from '@/ui/button';
// import BoxTranscript from '@/components/BoxTranscript';

export default function Home() {
	const [isPlaying, setPlaying] = useState(false);
	const [video, setVideo] = useState('');
	const [videoKey, setVideoKey] = useState(0);

	const handlePlay = () => {
		setPlaying(false);
	};

	const startListening = () =>
		SpeechRecognition.startListening({ continuous: true, language: 'id' });
	let { transcript, browserSupportsSpeechRecognition, resetTranscript } =
		useSpeechRecognition();

	useEffect(() => {
		startListening();
		if (transcript.toLowerCase().includes('apa itu pura')) {
			setPlaying(true);
			setVideo('2.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
		} else if (transcript.toLowerCase().includes('pura di bali')) {
			setPlaying(true);
			setVideo('3.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
		} else if (transcript.toLowerCase().includes('tes')) {
			setPlaying(true);
			setVideo('1.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
		}
	}, [resetTranscript, transcript]);

	return (
		<main className='container mt-20'>
			<div>
				<h1 className='text-gray-800 text-center text-5xl font-bold'>
					Hologram Interaktif
				</h1>
				<p className='text-xl mt-10 text-center'>
					Ayo tanya pertanyaanmu! Media interaktif belajar mengenai Pura
				</p>
			</div>

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
					<Button onClick={startListening}>Start</Button>
					<Button onClick={SpeechRecognition.stopListening}>Stop</Button>
				</div>
			</div>
		</main>
	);
}
