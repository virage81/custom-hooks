import { useEffect, useRef, useState, type RefObject } from 'react';

type UseHover = <T extends HTMLElement>() => {
	hovered: boolean;
	ref: RefObject<T | null>;
};

export const useHover: UseHover = <T extends HTMLElement>() => {
	const [hovered, setHovered] = useState(false);
	const ref = useRef<T>(null);

	const mouseEnter = () => setHovered(true);
	const mouseLeave = () => setHovered(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		el.addEventListener('mouseenter', mouseEnter);
		el.addEventListener('mouseleave', mouseLeave);

		return () => {
			el.removeEventListener('mouseenter', mouseEnter);
			el.removeEventListener('mouseleave', mouseLeave);
		};
	}, []);

	return {
		hovered,
		ref,
	};
};
