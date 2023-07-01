'use client';
import 'regenerator-runtime/runtime';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import { useEffect, useState } from 'react';

export default function Home() {
	const [isPlaying, setPlaying] = useState(false);
	const [video, setVideo] = useState('');
	const [videoKey, setVideoKey] = useState(0);
	const [isReady, setIsReady] = useState('false');

	const startListening = () =>
		SpeechRecognition.startListening({ continuous: true, language: 'id' });
	let { transcript, browserSupportsSpeechRecognition, resetTranscript } =
		useSpeechRecognition();

	const myCallback = () => {
		if (isReady == 'true') {
			setPlaying(true);
			setVideo('5penutup.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('stop');
		} else if (isReady == 'false') {
			setPlaying(true);
			setVideo('01wait.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('true');
		} else {
			console.log('suksma');
		}
	};

	useEffect(() => {
		startListening();
		if (transcript.toLowerCase().includes('halo adi')) {
			setPlaying(true);
			setVideo('01wait.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('true');
		} else if (transcript.toLowerCase().includes('mulai program')) {
			setPlaying(true);
			setVideo('1pembuka.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		}
		if (
			transcript.toLowerCase().includes('tentang pura') &&
			isReady == 'true'
		) {
			setPlaying(true);
			setVideo('2tentangs.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		} else if (
			transcript.toLowerCase().includes('lihat pura') &&
			isReady == 'true'
		) {
			setPlaying(true);
			setVideo('3daftar.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		} else if (
			transcript.toLowerCase().includes('daftar informasi') &&
			isReady == 'true'
		) {
			setPlaying(true);
			setVideo('4menu.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		} else if (transcript.toLowerCase().includes('keluar program')) {
			setPlaying(true);
			setVideo('5penutup.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('stop');
		} else if (
			transcript.toLowerCase().includes('pura besakih') &&
			isReady == 'true'
		) {
			setPlaying(true);
			setVideo('02besakih.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		} else if (
			transcript.toLowerCase().includes('pura lempuyang') &&
			isReady == 'true'
		) {
			setPlaying(true);
			setVideo('03lempuyang.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		} else if (
			transcript.toLowerCase().includes('pura goa lawah') &&
			isReady == 'true'
		) {
			setPlaying(true);
			setVideo('04goalawah.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		} else if (
			transcript.toLowerCase().includes('pura uluwatu') &&
			isReady == 'true'
		) {
			setPlaying(true);
			setVideo('05uluwatu.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		} else if (
			transcript.toLowerCase().includes('pura batukaru') &&
			isReady == 'true'
		) {
			setPlaying(true);
			setVideo('06batukaru.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		} else if (
			(transcript.toLowerCase().includes('pura pusering jagad') ||
				transcript.toLowerCase().includes('pura pusering jagat')) &&
			isReady == 'true'
		) {
			setPlaying(true);
			setVideo('07puseringjagat.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		} else if (
			(transcript.toLowerCase().includes('pura puring jagad') ||
				transcript.toLowerCase().includes('pura puring jagat')) &&
			isReady == 'true'
		) {
			setPlaying(true);
			setVideo('07puseringjagat.mp4');
			resetTranscript();
			setVideoKey((prevKey) => prevKey + 1);
			setIsReady('false');
		} else {
			console.log('suksma');
		}
	}, [isReady, resetTranscript, transcript]);

	return (
		<div className='bg-black w-full h-screen'>
			{isPlaying && (
				<video
					key={videoKey}
					// controls={false}
					width='100%'
					height='100vh'
					autoPlay
					onEnded={() => myCallback()}
				>
					<source src={video} type='video/mp4' />
				</video>
			)}
			{/* <p className='text-black text-lg bg-blue-300 max-w-max px-2 rounded-sm mb-4 overflow-wrap'>
				{transcript}
			</p> */}
		</div>
	);
}
