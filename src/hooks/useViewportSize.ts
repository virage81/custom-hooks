import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

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

	useWindowEvent('resize', () => {
		setViewport({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	});

	return viewport;
};
