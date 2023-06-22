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
		if (transcript.toLowerCase().includes('halo adi')) {
			setPlaying(true);
			setVideo('01wait.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			if (transcript.toLowerCase().includes('tentang pura')) {
				setPlaying(true);
				setVideo('2tentang.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			} else if (transcript.toLowerCase().includes('daftar pura')) {
				setPlaying(true);
				setVideo('3daftar.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			} else if (transcript.toLowerCase().includes('daftar informasi')) {
				setPlaying(true);
				setVideo('4menu.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			} else if (transcript.toLowerCase().includes('keluar program')) {
				setPlaying(true);
				setVideo('5penutup.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			} else if (transcript.toLowerCase().includes('mulai program')) {
				setPlaying(true);
				setVideo('1pembuka.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			} else if (transcript.toLowerCase().includes('nomor 1 pura besakih')) {
				setPlaying(true);
				setVideo('02besakih.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			} else if (transcript.toLowerCase().includes('nomor 2 pura lempuyang')) {
				setPlaying(true);
				setVideo('03lempuyang.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			} else if (transcript.toLowerCase().includes('nomor 3 pura goa lawah')) {
				setPlaying(true);
				setVideo('04goalawah.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			} else if (transcript.toLowerCase().includes('nomor 4 pura uluwatu')) {
				setPlaying(true);
				setVideo('05uluwatu.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			} else if (transcript.toLowerCase().includes('nomor 5 pura batukaru')) {
				setPlaying(true);
				setVideo('06batukaru.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			} else if (
				transcript.toLowerCase().includes('nomor 6 pura pusering jagat')
			) {
				setPlaying(true);
				setVideo('07puseringjagat.mp4');
				resetTranscript();
				setVideoKey((prevKey) => prevKey + 1);
			}
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
