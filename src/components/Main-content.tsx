import { FC } from 'react';
import { Button } from './ui/button';

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
	return (
		<div className='border-solid'>
			<p className='text-yellow-300'>halo perkanlkan sadfasdf</p>
			<div>
				<Button>Start</Button>
				<Button>Stop</Button>
			</div>
		</div>
	);
};

export default Main;
