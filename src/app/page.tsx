'use client';
import 'regenerator-runtime/runtime';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
import { useState } from 'react';

import { Button } from '@/ui/button';
import Main from '@/components/main-content';

export default function Home() {
	const [textToCopy, setTextToCopy] = useState('');
	const [isCopied, setCopied] = useClipboard(textToCopy, {
		successDuration: 1000,
	});

	const startListening = () =>
		SpeechRecognition.startListening({ continuous: true, language: 'id' });
	const { transcript, browserSupportsSpeechRecognition } =
		useSpeechRecognition();

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

			<div className='border-solid border-2 border-gray-800 bg-yellow-50 h-96 p-5  flex flex-col mt-20'>
				<p className='text-black text-lg'>{transcript}</p>
				<div className='mt-auto flex flex-col gap-1'>
					<Button onClick={startListening}>Start</Button>
					<Button onClick={SpeechRecognition.stopListening}>Stop</Button>
					{/* <Button onClick={setCopied}>
						{isCopied ? 'Copied!' : 'Copy to clipboard'}
					</Button> */}
				</div>
			</div>
		</main>
	);
}
