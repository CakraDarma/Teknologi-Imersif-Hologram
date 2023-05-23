'use client';
import { FC, useState } from 'react';
import ReactPlayer from 'react-player';

const Page = ({}) => {
	const [isPlaying, setPlaying] = useState(false);

	const handlePlay = () => {
		setPlaying(true);
	};
	return (
		<div>
			{/* <div className='mt-20'>
				<video controls={false} autoPlay muted playsInline>
					<source src='/2.mp4' type='video/mp4' />
				</video>
				<video src='/2.mp4' controls={true} autoPlay={true} playsInline></video>
			</div> */}

			<div>
				<button onClick={handlePlay}>Play Video</button>
				{isPlaying && (
					<video controls autoPlay>
						<source src='/2.mp4' type='video/mp4' />
					</video>
				)}
			</div>
		</div>
	);
};

export default Page;
