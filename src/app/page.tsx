'use client';
import 'regenerator-runtime/runtime';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
import { useState } from 'react';

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
		<main>
			<h2>Speech to Text Converter</h2>
			<p>
				A React hook that converts speech from the microphone to text and makes
				it available to your React components.
			</p>

			<div className='main-content' onClick={() => setTextToCopy(transcript)}>
				{transcript}
			</div>

			<div className='btn-style'>
				<button onClick={setCopied}>
					{isCopied ? 'Copied!' : 'Copy to clipboard'}
				</button>
				<button onClick={startListening}>Start Listening</button>
				<button onClick={SpeechRecognition.stopListening}>
					Stop Listening
				</button>
			</div>
		</main>
	);
}
