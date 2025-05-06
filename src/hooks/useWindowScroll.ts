import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

interface Scroll {
	x: number;
	y: number;
}

type UseWindowScroll = () => [scroll: Scroll, scrollTo: (opts: Partial<Scroll>) => void];

export const useWindowScroll: UseWindowScroll = () => {
	const [scroll, setScroll] = useState<Scroll>(() => ({
		x: typeof window !== 'undefined' ? window.scrollX : 0,
		y: typeof window !== 'undefined' ? window.scrollY : 0,
	}));

	const scrollTo = (opts: Partial<Scroll>) => {
		if (typeof window === 'undefined') return;

		window.scrollTo({
			top: opts?.y,
			left: opts?.x,
		});
	};

	useWindowEvent('scroll', () => {
		setScroll({
			x: window.scrollX,
			y: window.scrollY,
		});
	});

	return [scroll, scrollTo];
};
