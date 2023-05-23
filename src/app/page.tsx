'use client';
import 'regenerator-runtime/runtime';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import { useEffect, useState } from 'react';
import { Button } from '@/ui/button';
import BoxTranscript from '@/components/BoxTranscript';

export default function Home() {
	let [isPlaying, setPlaying] = useState(false);
	let [video, setVideo] = useState('');
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
		if (transcript.toLowerCase().includes('halo')) {
			console.log('halo');
			setVideo('2.mp4');
			setPlaying(true);
			resetTranscript();
		} else if (transcript.toLowerCase().includes('hai')) {
			setVideo('1.mp4');
			setPlaying(true);
		}
		setVideoKey((prevKey) => prevKey + 1);
	}, [transcript, resetTranscript]);

	return (
		<main className='container mt-20'>
			<div>
				<button onClick={handlePlay}>Play Video</button>
				{/* <button onClick={resetTranscript}>Play Video</button> */}
				{isPlaying && (
					<div>
						<video key={videoKey} controls={true} autoPlay>
							<source src={video} type='video/mp4' />
						</video>
					</div>
				)}
			</div>
			{/* <BoxTranscript /> */}
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
		</main>
	);
}
