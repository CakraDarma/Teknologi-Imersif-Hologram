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
		if (transcript.toLowerCase().includes('mulai program')) {
			setPlaying(true);
			setVideo('1pembuka.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
		} else if (transcript.toLowerCase().includes('tentang pura')) {
			setPlaying(true);
			setVideo('2tentang.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
		} else if (transcript.toLowerCase().includes('lihat pura')) {
			setPlaying(true);
			setVideo('3lihatpura.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
		} else if (transcript.toLowerCase().includes('Daftar Informasi')) {
			setPlaying(true);
			setVideo('4menu.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
		} else if (transcript.toLowerCase().includes('keluar program')) {
			setPlaying(true);
			setVideo('5penutup.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
		}
	}, [resetTranscript, transcript]);

	return (
		<div className='bg-black w-full h-screen'>
			{isPlaying && (
				<video
					key={videoKey}
					controls={true}
					width='100%'
					height='100vh'
					autoPlay
				>
					<source src={video} type='video/mp4' />
				</video>
			)}
			<p className='text-black text-lg bg-blue-300 max-w-max px-2 rounded-sm mb-4 overflow-wrap'>
				{transcript}
			</p>
		</div>
	);
}
