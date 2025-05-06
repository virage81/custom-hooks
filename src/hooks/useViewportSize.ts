import { useLayoutEffect, useState } from 'react';

type UseViewportSize = () => {
	width: number;
	height: number;
};

interface Viewport {
	width: number;
	height: number;
}

export const useViewportSize: UseViewportSize = () => {
	const [viewport, setViewport] = useState<Viewport>(() => ({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
	}));

	const resizeEvent = () => {
		setViewport({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useLayoutEffect(() => {
		if (typeof window === 'undefined') return;

		window.addEventListener('resize', resizeEvent);

		return () => {
			window.removeEventListener('resize', resizeEvent);
		};
	}, []);

	return viewport;
};
