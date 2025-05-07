import { useEffect, useState } from 'react';
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
	const [viewport, setViewport] = useState<Viewport>({
		width: window.innerWidth || 0,
		height: window.innerHeight || 0,
	});

	useEffect(() => {
		const width = window.innerWidth || 0;
		const height = window.innerHeight || 0;
		setViewport({
			width,
			height,
		});
	}, []);

	useWindowEvent('resize', () => {
		setViewport({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	});

	return viewport;
};
