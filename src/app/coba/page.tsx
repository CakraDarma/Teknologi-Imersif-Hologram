'use client';
import { FC, useState } from 'react';
import ReactPlayer from 'react-player';

const Page = ({}) => {
	const [isPlaying, setPlaying] = useState(false);

	const handlePlay = () => {
		setPlaying(true);
	};
	return (
		// <div>
		// 	{/* <div className='mt-20'>
		// 		<video controls={false} autoPlay muted playsInline>
		// 			<source src='/2.mp4' type='video/mp4' />
		// 		</video>
		// 		<video src='/2.mp4' controls={true} autoPlay={true} playsInline></video>
		// 	</div> */}

		// 	<div>
		// 		<button onClick={handlePlay}>Play Video</button>
		// 		{isPlaying && (
		// 			<video controls autoPlay>
		// 				<source src='/2.mp4' type='video/mp4' />
		// 			</video>
		// 		)}
		// 	</div>
		// </div>
		<div className='flex flex-row '>
			<p className='text-black text-lg bg-blue-300 w-max px-2 rounded-sm mb-4 break-words flex justify-center text-center'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
				expedita voluptatem. Accusamus error officia obcaecati laboriosam
				veniam, dolores reiciendis velit quis facere voluptatum inventore, ipsa
				asperiores earum doloribus? Dolores tempore totam maiores, repellat
				laborum dolore? Saepe delectus dolore fugiat doloribus, veniam, eligendi
				sapiente quasi rerum quae maxime quas blanditiis ducimus accusamus alias
				nisi architecto expedita a! Reiciendis, beatae quae? Pariatur placeat
				accusamus corporis dicta, dolore, nisi, eveniet sed expedita ratione
				sapiente architecto consequuntur beatae velit! Esse cumque veritatis
				expedita maxime praesentium, consectetur exercitationem vitae labore
				ipsa iure velit repellendus eveniet reprehenderit incidunt corporis
				aspernatur officia sapiente dolorem sit repellat optio.
			</p>
		</div>
	);
};

export default Page;
