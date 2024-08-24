import { INotSure } from '@/types';
import { Suspense } from 'react';
import Lottie from 'react-lottie';

const DisplayLottie = ({ animationData }: INotSure) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
	};

	return (
		<Suspense fallback={null}>
			{/* To override default onClick pause by Lottie */}
			<div onClick={() => null}>
				<Lottie options={defaultOptions} />
			</div>
		</Suspense>
	);
};

export default DisplayLottie;
